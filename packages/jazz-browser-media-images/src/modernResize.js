/**
 * ModernResize - A modern, zero-dependency image resizing library
 * Inspired by Pica but built for the modern web with native APIs
 */

class ModernResize {
  constructor(options = {}) {
    this.options = {
      quality: options.quality || 3,
      alpha: options.alpha !== false,
      unsharpAmount: options.unsharpAmount || 0,
      unsharpRadius: options.unsharpRadius || 0,
      unsharpThreshold: options.unsharpThreshold || 0,
      transferable: options.transferable !== false,
      ...options,
    }

    this.features = this._detectFeatures()
  }

  /**
   * Detect browser capabilities
   */
  _detectFeatures() {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    return {
      canvas: !!ctx,
      offscreenCanvas: typeof OffscreenCanvas !== "undefined",
      imageData: typeof ImageData !== "undefined",
      transferable: typeof ArrayBuffer !== "undefined" && typeof Uint8ClampedArray !== "undefined",
      webWorkers: typeof Worker !== "undefined",
      imageBitmap: typeof createImageBitmap !== "undefined",
    }
  }

  /**
   * Resize an image from source to destination canvas
   * @param {HTMLImageElement|HTMLCanvasElement|ImageBitmap} from - Source image
   * @param {HTMLCanvasElement} to - Destination canvas
   * @param {Object} options - Resize options
   * @returns {Promise<HTMLCanvasElement>}
   */
  async resize(from, to, options = {}) {
    const opts = { ...this.options, ...options }

    // Validate inputs
    if (!from || !to) {
      throw new Error("Source and destination are required")
    }

    // Get source dimensions
    const srcWidth = from.width || from.videoWidth || from.naturalWidth
    const srcHeight = from.height || from.videoHeight || from.naturalHeight

    if (!srcWidth || !srcHeight) {
      throw new Error("Could not determine source dimensions")
    }

    // Set destination canvas size
    const destWidth = to.width
    const destHeight = to.height

    if (!destWidth || !destHeight) {
      throw new Error("Destination canvas must have width and height set")
    }

    // Choose resize method based on quality and browser support
    if (opts.quality >= 3 && this.features.imageBitmap) {
      return this._resizeWithImageBitmap(from, to, srcWidth, srcHeight, destWidth, destHeight, opts)
    } else if (opts.quality >= 2) {
      return this._resizeHighQuality(from, to, srcWidth, srcHeight, destWidth, destHeight, opts)
    } else {
      return this._resizeBasic(from, to, srcWidth, srcHeight, destWidth, destHeight, opts)
    }
  }

  /**
   * High-quality resize using ImageBitmap API
   */
  async _resizeWithImageBitmap(from, to, srcW, srcH, destW, destH, opts) {
    try {
      const bitmap = await createImageBitmap(from, {
        resizeWidth: destW,
        resizeHeight: destH,
        resizeQuality: "high",
      })

      const ctx = to.getContext("2d")
      ctx.clearRect(0, 0, destW, destH)
      ctx.drawImage(bitmap, 0, 0)
      bitmap.close()

      if (opts.unsharpAmount > 0) {
        this._applyUnsharpMask(ctx, destW, destH, opts)
      }

      return to
    } catch (error) {
      // Fallback to high quality resize
      return this._resizeHighQuality(from, to, srcW, srcH, destW, destH, opts)
    }
  }

  /**
   * High-quality resize using step-down algorithm
   */
  _resizeHighQuality(from, to, srcW, srcH, destW, destH, opts) {
    const ctx = to.getContext("2d")
    ctx.clearRect(0, 0, destW, destH)

    // Enable high-quality scaling
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // Calculate if we need step-down resizing
    const scaleX = destW / srcW
    const scaleY = destH / srcH
    const minScale = Math.min(scaleX, scaleY)

    if (minScale < 0.5) {
      // Use step-down algorithm for better quality
      return this._stepDownResize(from, to, srcW, srcH, destW, destH, opts)
    } else {
      // Direct resize is sufficient
      ctx.drawImage(from, 0, 0, srcW, srcH, 0, 0, destW, destH)

      if (opts.unsharpAmount > 0) {
        this._applyUnsharpMask(ctx, destW, destH, opts)
      }

      return to
    }
  }

  /**
   * Step-down resize algorithm for high-quality downscaling
   */
  _stepDownResize(from, to, srcW, srcH, destW, destH, opts) {
    let currentW = srcW
    let currentH = srcH

    // Create temporary canvas for intermediate steps
    const tempCanvas = document.createElement("canvas")
    const tempCtx = tempCanvas.getContext("2d")
    tempCtx.imageSmoothingEnabled = true
    tempCtx.imageSmoothingQuality = "high"

    // Copy source to temp canvas
    tempCanvas.width = currentW
    tempCanvas.height = currentH
    tempCtx.drawImage(from, 0, 0)

    // Step down by half until we're close to target size
    while (currentW > destW * 2 || currentH > destH * 2) {
      currentW = Math.max(Math.floor(currentW / 2), destW)
      currentH = Math.max(Math.floor(currentH / 2), destH)

      const newCanvas = document.createElement("canvas")
      newCanvas.width = currentW
      newCanvas.height = currentH
      const newCtx = newCanvas.getContext("2d")
      newCtx.imageSmoothingEnabled = true
      newCtx.imageSmoothingQuality = "high"

      newCtx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, currentW, currentH)

      tempCanvas.width = currentW
      tempCanvas.height = currentH
      tempCtx.clearRect(0, 0, currentW, currentH)
      tempCtx.drawImage(newCanvas, 0, 0)
    }

    // Final resize to exact dimensions
    const ctx = to.getContext("2d")
    ctx.clearRect(0, 0, destW, destH)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(tempCanvas, 0, 0, currentW, currentH, 0, 0, destW, destH)

    if (opts.unsharpAmount > 0) {
      this._applyUnsharpMask(ctx, destW, destH, opts)
    }

    return to
  }

  /**
   * Basic resize using simple canvas drawImage
   */
  _resizeBasic(from, to, srcW, srcH, destW, destH, opts) {
    const ctx = to.getContext("2d")
    ctx.clearRect(0, 0, destW, destH)

    ctx.imageSmoothingEnabled = opts.quality > 0
    if (ctx.imageSmoothingQuality) {
      ctx.imageSmoothingQuality = opts.quality > 1 ? "high" : "medium"
    }

    ctx.drawImage(from, 0, 0, srcW, srcH, 0, 0, destW, destH)
    return to
  }

  /**
   * Apply unsharp mask filter for enhanced sharpness
   */
  _applyUnsharpMask(ctx, width, height, opts) {
    if (!this.features.imageData) return

    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data
    const originalData = new Uint8ClampedArray(data)

    // Simple unsharp mask implementation
    const amount = opts.unsharpAmount
    const radius = Math.max(1, Math.floor(opts.unsharpRadius))
    const threshold = opts.unsharpThreshold

    for (let y = radius; y < height - radius; y++) {
      for (let x = radius; x < width - radius; x++) {
        const idx = (y * width + x) * 4

        for (let c = 0; c < 3; c++) {
          // RGB channels only
          let sum = 0
          let count = 0

          // Calculate blur
          for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
              const blurIdx = ((y + dy) * width + (x + dx)) * 4 + c
              sum += originalData[blurIdx]
              count++
            }
          }

          const blurred = sum / count
          const original = originalData[idx + c]
          const difference = original - blurred

          if (Math.abs(difference) > threshold) {
            const sharpened = original + difference * amount
            data[idx + c] = Math.max(0, Math.min(255, sharpened))
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0)
  }

  /**
   * Resize from file input to canvas
   * @param {File|Blob} file - Image file
   * @param {HTMLCanvasElement} canvas - Destination canvas
   * @param {Object} options - Resize options
   * @returns {Promise<HTMLCanvasElement>}
   */
  async resizeFromFile(file, canvas, options = {}) {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.onload = async () => {
        try {
          URL.revokeObjectURL(img.src)
          const result = await this.resize(img, canvas, options)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }

      img.onerror = () => {
        URL.revokeObjectURL(img.src)
        reject(new Error("Failed to load image"))
      }

      img.src = URL.createObjectURL(file)
    })
  }

  /**
   * Utility: Create canvas with specified dimensions
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @returns {HTMLCanvasElement}
   */
  createCanvas(width, height) {
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    return canvas
  }

  /**
   * Utility: Calculate aspect ratio preserving dimensions
   * @param {number} srcWidth - Source width
   * @param {number} srcHeight - Source height
   * @param {number} maxWidth - Maximum width
   * @param {number} maxHeight - Maximum height
   * @returns {Object} - {width, height}
   */
  calculateDimensions(srcWidth, srcHeight, maxWidth, maxHeight) {
    const aspectRatio = srcWidth / srcHeight

    let width = maxWidth
    let height = maxWidth / aspectRatio

    if (height > maxHeight) {
      height = maxHeight
      width = maxHeight * aspectRatio
    }

    return {
      width: Math.floor(width),
      height: Math.floor(height),
    }
  }

  /**
   * Get library information
   */
  getInfo() {
    return {
      version: "1.0.0",
      features: this.features,
      options: this.options,
    }
  }
}

// Export for ES modules
export default ModernResize

// Also make available globally for compatibility
if (typeof window !== "undefined") {
  window.ModernResize = ModernResize
}
