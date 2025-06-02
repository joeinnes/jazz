import ImageBlobReduce from "image-blob-reduce";
import {
  Account,
  FileStream,
  Group,
  ImageDefinition,
  Loaded,
} from "jazz-tools";

import { Image } from 'image-js'

/**
 * Creates an image definition with multiple resolutions and a placeholder.
 * 
 * This function processes an image (provided as a `Blob` or `File`) and generates:
 * - A placeholder image (8px wide).
 * - Multiple resized versions of the image based on the specified `maxSize` or `resolutions`.
 * - An `ImageDefinition` object containing the original image size, placeholder, and resized versions.
 *
 * @category Image creation
 * 
 * @param {Blob | File} imageBlobOrFile - The image file or blob to process.
 * @param {Object} [options] - Optional parameters for image creation.
 * @param {Group | Account} [options.owner] - The owner of the image, either a group or an account.
 * @param {256 | 1024 | 2048} [options.maxSize] - The maximum resolution size to generate. If specified, `resolutions` must be `undefined`.
 * @param {number[]} [options.resolutions] - A list of resolutions to generate for the image. If specified, `maxSize` must be `undefined`.
 * @returns {Promise<Loaded<typeof ImageDefinition>>} A promise that resolves to the created `ImageDefinition` object.
 * 
 * @throws {Error} If both `maxSize` and `resolutions` are specified.
 * 
 * @example
 * // Example 1: Using maxSize
 * const imageDefinition = await createImage(imageBlob, { maxSize: 1024 });
 * 
 * @example
 * // Example 2: Using resolutions
 * const imageDefinition = await createImage(imageBlob, { resolutions: [256, 512, 1024] });
 * 
 * @example
 * // Example 3: Without maxSize or resolutions
 * const imageDefinition = await createImage(imageBlob);
 */
export async function createImage(
  imageBlobOrFile: Blob | File,
  options?: {
    owner?: Group | Account;
  } & (
      | { maxSize: 256 | 1024 | 2048; resolutions?: never }
      | { resolutions: number[]; maxSize?: never }
      | { resolutions?: undefined; maxSize?: undefined }
    ),
): Promise<Loaded<typeof ImageDefinition>> {
  if (options?.maxSize !== undefined && options?.resolutions !== undefined) {
    throw new Error("You cannot specify both `maxSize` and `resolutions` at the same time.");
  }


  const image = await Image.load(imageBlobOrFile instanceof Blob ? await imageBlobOrFile.arrayBuffer() : imageBlobOrFile);
  const imageType = imageBlobOrFile.type || "image/png"; // Assume PNG if type is not specified
  const originalWidth = image.width;
  const originalHeight = image.height;

  const owner = options?.owner;

  const placeholderDataURL = image.resize({ width: originalWidth >= originalHeight ? 8 : undefined, height: originalHeight >= originalWidth ? 8 : undefined }).toDataURL();

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
    } else if (options && options.maxSize) {
      imageResolutions = [256, 1024, 2048].filter((res) => res <= options.maxSize);
    } else {
      imageResolutions = [256, 1024, 2048];
    }

    for (let resolution of imageResolutions.sort()) {
      const width =
        originalWidth > originalHeight
          ? resolution
          : Math.round(resolution * (originalWidth / originalHeight));
      const height =
        originalHeight > originalWidth
          ? resolution
          : Math.round(resolution * (originalHeight / originalWidth));
      const resizedImage = await image.resize({ width, height }).toBlob(imageType, 0.8); // Hardcode 0.8?
      const binaryStream = await FileStream.createFromBlob(resizedImage, owner);
      imageDefinition[`${width}x${height}`] = binaryStream;

      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  };

  await fillImageResolutions();
  return imageDefinition;
}
