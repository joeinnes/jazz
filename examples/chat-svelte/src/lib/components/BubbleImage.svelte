<script lang="ts">
  import type { ImageDefinition } from 'jazz-tools';
  import { useProgressiveImg } from '$lib/utils/useProgressiveImage.svelte';
  let { image }: { image: ImageDefinition } = $props();
  const { src } = $derived(
    useProgressiveImg({
      image
    })
  );
</script>

<img class="h-auto max-h-[20rem] max-w-full rounded-t-xl mb-1" {src} alt="" />
