<script lang="ts">
  import { isLoading } from "svelte-i18n";
  import "../app.css";
  import TopBar from "$lib/components/TopBar.svelte";
  import { onMount } from "svelte";
  import theme from "$lib/stores/themeStore";
  import { onNavigate } from "$app/navigation";
  import CircleCursor from "$lib/components/CircleCursor.svelte";

  export let data;

  onMount(() => {
    theme.subscribe((value) => {
      document.body.className = value === "dark" ? "dark" : "light";
    });
  });

  onNavigate((navigation) => {
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
</script>

{#if $isLoading}
  Please wait...
{:else}
  <main
    class=" select-none transition-colors overflow-hidden relative duration-500 bg-pampas-200 dark:bg-codgray-950 dark:text-pampas-100 text-codgray-800 min-h-screen w-screen font-primary lg:grid lg:grid-cols-1 lg:grid-rows-[auto,1fr]"
  >
    <!-- Top Thin Bar -->
    <div
      class="lg:col-span-1 z-40 relative"
      style="view-transition-name: header;"
    >
      <TopBar {data} />
    </div>

    <div
      class="lg:col-span-1 flex flex-col overflow-auto px-6 items-center justify-center"
    >
      <div class="max-w-screen-2xl w-full grow">
        <slot />
      </div>
    </div>

    <CircleCursor />
  </main>
{/if}
