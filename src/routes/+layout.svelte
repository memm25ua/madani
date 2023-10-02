<script lang="ts">
  import { isLoading } from "svelte-i18n";
  import "../app.css";
  import TopBar from "$lib/components/TopBar.svelte";
  import { onMount } from "svelte";
  import theme from "$lib/stores/themeStore";
  import { onNavigate } from "$app/navigation";

  export let data;

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

  onNavigate((navigation) => {
    console.log("onNavigate");
    // @ts-ignore
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      // @ts-ignore
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
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
    }, 20);
  }

  // animate circle on click
  function handleClick() {
    if (moving) return;
    showCircle = false;
    setTimeout(() => {
      showCircle = true;
    }, 10);
  }

  onMount(() => {
    function handleTouchStart() {
      touchable = true;
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart);
  });
</script>

{#if $isLoading}
  Please wait...
{:else}
  <main
    class="transition-colors overflow-hidden relative duration-500 bg-pampas-200 dark:bg-codgray-950 dark:text-pampas-100 text-codgray-800 min-h-screen w-screen font-primary lg:grid lg:grid-cols-1 lg:grid-rows-[auto,1fr]"
  >
    <!-- Top Thin Bar -->
    <div
      class="lg:col-span-1 z-40 relative"
      style="view-transition-name: header;"
    >
      <TopBar {data} />
    </div>

    <div
      class="lg:col-span-1 flex flex-col overflow-hidden px-6 items-center justify-center"
    >
      <div class="max-w-[1700px] w-full">
        <slot />
      </div>
    </div>

    {#if showCircle}
      <div role="status">
        <div
          class="circle pointer-events-none absolute animate-scaleup z-50 h-5 w-5 rounded-full bg-transparent border dark:border-pampas-100 border-white"
          style="left: {x - 10}px; top: {y - 10}px;"
        ></div>
      </div>
    {/if}
  </main>
{/if}

<style>
  .circle {
    transition:
      top 0.1s ease-out,
      left 0.1s ease-out; /* Add this line */
  }
  
</style>
