<script lang="ts">
  let { size = 24, strokeWidth = 2 } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-image-icon lucide-image"
  ><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path
    d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
  /></svg
>
