import ImageBlobReduce from "image-blob-reduce";
import {
  Account,
  FileStream,
  Group,
  ImageDefinition,
  Loaded,
} from "jazz-tools";
import Pica from "pica";

let pica: Pica.Pica | undefined;

/** @category Image creation */
export async function createImage(
  imageBlobOrFile: Blob | File,
  options?: {
    owner?: Group | Account;
  } & (
    | { maxSize: 256 | 1024 | 2048; resolutions?: never } // maxSize is set, resolutions must be undefined
    | { resolutions: number[]; maxSize?: never } // resolutions is set, maxSize must be undefined
  ),
): Promise<Loaded<typeof ImageDefinition>> {
  // Initialize Pica here to not have module side effects
  if (!pica) {
    pica = new Pica();
  }

  const owner = options?.owner;

  let originalWidth!: number;
  let originalHeight!: number;
  const Reducer = new ImageBlobReduce({ pica });
  Reducer.after("_blob_to_image", (env) => {
    originalWidth =
      (env as unknown as { orientation: number }).orientation & 4
        ? env.image.height
        : env.image.width;
    originalHeight =
      (env as unknown as { orientation: number }).orientation & 4
        ? env.image.width
        : env.image.height;
    return Promise.resolve(env);
  });

  const placeholderDataURL = (
    await Reducer.toCanvas(imageBlobOrFile, { max: 8 })
  ).toDataURL("image/png");

  const imageDefinition = ImageDefinition.create(
    {
      originalSize: [originalWidth, originalHeight],
      placeholderDataURL,
    },
    owner,
  );

  const fillImageResolutions = async () => {
    let imageResolutions: number[];
    if (options && options.resolutions) {
      imageResolutions = options.resolutions;
    } else if (options && 'maxSize' in options) {
      imageResolutions = [256, 1024, 2048].filter((res) => res <= options.maxSize);
    } else {
      imageResolutions = [256, 1024, 2048];
    }

    for (let resolution of imageResolutions) {
      const max = await Reducer.toBlob(imageBlobOrFile, { max: resolution });
      const width =
        originalWidth > originalHeight
          ? resolution
          : Math.round(resolution * (originalWidth / originalHeight));
      const height =
        originalHeight > originalWidth
          ? resolution
          : Math.round(resolution * (originalHeight / originalWidth));
      const binaryStream = await FileStream.createFromBlob(max, owner);
      imageDefinition[`${width}x${height}`] = binaryStream;
      await new Promise((resolve) => setTimeout(resolve, 0));

    }
  };

  await fillImageResolutions();
  return imageDefinition;
}
