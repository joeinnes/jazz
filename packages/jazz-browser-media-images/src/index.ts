import {
  Account,
  FileStream,
  Group,
  ImageDefinition,
  Loaded,
} from "jazz-tools";

import { resize } from 'pica-gpu'
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

  if (!imageBlobOrFile || imageBlobOrFile.size === 0) {
    throw new Error("Invalid image file provided");
  }

  const imageType = imageBlobOrFile.type || "image/png";
  const imageBitmap = await createImageBitmap(imageBlobOrFile);
  // Create reusable canvases
  const webglCanvas = document.createElement('canvas');
  const canvas2d = document.createElement('canvas');

  try {
    const originalWidth = imageBitmap.width;
    const originalHeight = imageBitmap.height;
    const owner = options?.owner;

    // Helper function to resize and flip
    const resizeAndFlip = async (targetWidth: number, targetHeight: number): Promise<HTMLCanvasElement> => {
      // Resize with WebGL canvas
      webglCanvas.width = targetWidth;
      webglCanvas.height = targetHeight;

      try {
        resize(imageBitmap, webglCanvas, {
          targetHeight,
          targetWidth,
          filter: "mks2013"
        });
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to resize image to ${targetWidth}x${targetHeight}`);
      }

      // Flip the result using 2D canvas (due to WebGL and 2D having inverted Y axes)
      canvas2d.width = targetWidth;
      canvas2d.height = targetHeight;
      const ctx = canvas2d.getContext('2d');
      if (!ctx) throw new Error("2D context not available");

      // Clear any previous transforms
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      // Flip vertically
      ctx.scale(1, -1);
      ctx.drawImage(webglCanvas, 0, -targetHeight);

      return canvas2d;
    };

    const scale = 8 / Math.max(originalWidth, originalHeight);
    const placeholderWidth = Math.round(originalWidth * scale);
    const placeholderHeight = Math.round(originalHeight * scale);

    await resizeAndFlip(placeholderWidth, placeholderHeight);
    const placeholderDataURL = canvas2d.toDataURL(imageType, 0.8);

    const imageDefinition = ImageDefinition.create(
      {
        originalSize: [originalWidth, originalHeight],
        placeholderDataURL,
      },
      owner,
    );

    let imageResolutions: number[];
    if (options?.resolutions) {
      imageResolutions = options.resolutions;
    } else if (options?.maxSize) {
      imageResolutions = [256, 1024, 2048].filter((res) => res <= options.maxSize);
    } else {
      imageResolutions = [256, 1024, 2048];
    }

    // Generate image resolutions
    for (const resolution of imageResolutions.sort()) {
      const width = originalWidth > originalHeight
        ? resolution
        : Math.round(resolution * (originalWidth / originalHeight));
      const height = originalHeight > originalWidth
        ? resolution
        : Math.round(resolution * (originalHeight / originalWidth));

      // Never upscale
      if (width > originalWidth || height > originalHeight) continue;

      await resizeAndFlip(width, height);
      const resizedImage = await canvasToBlob(canvas2d, imageType, 0.8);
      const binaryStream = await FileStream.createFromBlob(resizedImage, owner);
      imageDefinition[`${width}x${height}`] = binaryStream;

      // Don't block
      await new Promise((resolve) => setTimeout(resolve, 0));
    }

    return imageDefinition;
  } finally {
    imageBitmap.close();
    webglCanvas.width = 0;
    webglCanvas.height = 0;
    canvas2d.width = 0;
    canvas2d.height = 0;
  }
}

function canvasToBlob(canvas: HTMLCanvasElement, type = 'image/png', quality = 0.92): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Canvas toBlob() failed'));
      }
    }, type, quality);
  });
}