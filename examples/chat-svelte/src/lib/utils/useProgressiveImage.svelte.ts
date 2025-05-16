import type { ImageDefinition } from 'jazz-tools';
import { onDestroy } from 'svelte';

export function useProgressiveImg({
  image,
  maxWidth,
  targetWidth
}: {
  image: ImageDefinition | null | undefined;
  maxWidth?: number;
  targetWidth?: number;
}) {
  let current = $state<{
    src?: string;
    res?: `${number}x${number}` | 'placeholder';
  }>();
  const originalSize = $state(image?.originalSize);

  const unsubscribe = image?.subscribe({}, (update) => {
    const highestRes = update?.highestResAvailable({ maxWidth, targetWidth });
    if (highestRes) {
      if (highestRes.res !== current?.res) {
        const blob = highestRes.stream.toBlob();
        if (blob) {
          const blobURI = URL.createObjectURL(blob);
          current = { src: blobURI, res: highestRes.res };

          setTimeout(() => URL.revokeObjectURL(blobURI), 200); // Give Firefox time.
        }
      }
    } else {
      current = {
        src: update?.placeholderDataURL,
        res: 'placeholder'
      };
    }
  });

  onDestroy(() => () => {
    unsubscribe?.();
  });

  return {
    get src() {
      return current?.src;
    },
    get res() {
      return current?.res;
    },

    originalSize
  };
}
