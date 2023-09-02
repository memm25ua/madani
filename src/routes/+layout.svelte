<script lang="ts">
  import { blur, fade, fly, slide } from "svelte/transition";
  import "../app.css";
  import TopBar from "$lib/components/TopBar.svelte";
  import HeroImg from "$lib/components/HeroImg.svelte";
  import { onMount } from "svelte";
  import { cubicIn, cubicOut } from "svelte/easing";
  import theme from "$lib/stores/themeStore";

  export let data;

  const transitionConfig = {
    duration: 600,
    easing: cubicIn,
  };

  let x = 0;
  let y = 0;
  let showCircle = false;
  let touchable = false;
  let moving = false;

  onMount(() => {
    theme.subscribe((value) => {
      document.body.className = value === "dark" ? "dark" : "light";
    });
  });

  function handleMouseMove(event: MouseEvent) {
    if (moving) return;

    moving = true;
    x = event.clientX;
    y = event.clientY;
    if (!touchable) {
      showCircle = true;
    }

    setTimeout(() => {
      moving = false;
    }, 50);
  }

  onMount(() => {
    function handleTouchStart() {
      touchable = true;
      window.removeEventListener("touchstart", handleTouchStart);
    }
    window.addEventListener("touchstart", handleTouchStart);
  });
</script>

<main
  on:mousemove={handleMouseMove}
  class="transition-colors overflow-hidden relative duration-500 bg-pampas-200 dark:bg-codgray-950 dark:text-pampas-200 text-codgray-800 min-h-screen w-screen flex flex-col font-primary lg:grid lg:grid-cols-3 lg:grid-rows-[auto,1fr]"
>
  <!-- Top Thin Bar -->
  <div class="lg:col-span-3">
    <TopBar {data} />
  </div>

  <!-- Left Screen Part with Hero Image -->
  <div class="container-col w-full lg:h-full relative lg:col-span-1 h-60 ">
    <HeroImg {data} />
  </div>

  <!-- Right Part Where Content is Displayed -->
  {#key data}
    <div
      in:blur={transitionConfig}
      class="h-full flex items-center justify-center lg:col-span-2"
    >
      <div class="w-full">
        <slot />
      </div>
    </div>
  {/key}

  {#if showCircle}
    <div role="status">
      <div
        class="circle pointer-events-none absolute h-6 w-6 animate-[fade_0.2s_ease-in] rounded-full bg-white mix-blend-exclusion"
        style="left: {x - 12}px; top: {y - 12}px;"
      ></div>
    </div>
  {/if}
</main>

<style>
  .circle {
    transition:
      top 0.2s ease-out,
      left 0.2s ease-out; /* Add this line */
  }
</style>
