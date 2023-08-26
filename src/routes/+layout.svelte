<script lang="ts">
  import { fade } from "svelte/transition";
  import "../app.css";
  import TopBar from "$lib/components/TopBar.svelte";
  export let data;

  const fadeConfig = {
    duration: 500,
  };

  let x = 0;
  let y = 0;

  function handleMouseMove(event: MouseEvent) {
    x = event.clientX;
    y = event.clientY;
  }
</script>

<main
  on:mousemove={handleMouseMove}
  class="bg-pampas-200 dark:bg-codgray-950 dark:text-pampas-200 text-codgray-800 min-h-screen w-screen flex flex-col font-primary"
>
  <TopBar />
  {#key data}
    <div
      in:fade={{ ...fadeConfig, delay: 500 }}
      out:fade={{ ...fadeConfig }}
      class="flex-grow"
    >
      <slot />
    </div>
  {/key}
  <div role="status">
    <div class="circle" style="left: {x - 18}px; top: {y - 18}px;"></div>
  </div>
</main>

<style>
  .circle {
    @apply absolute h-9 w-9 animate-[pulse_2s_ease-in_infinite] rounded-full bg-white mix-blend-difference pointer-events-none;
  }
</style>
