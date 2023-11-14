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
    class=" select-none transition-colors overflow-hidden relative duration-500 bg-pampas-200 dark:bg-codgray-950 dark:text-pampas-100 text-codgray-800 h-screen w-screen font-primary"
  >
    <!-- Top Thin Bar -->
    <header
      class="lg:col-span-1 z-40 relative"
      style="view-transition-name: header;"
    >
      <TopBar {data} />
    </header>

    <main class="main-section">
      <div class="w-full h-full max-w-screen-3xl grow">
        <slot />
      </div>
    </main>

    <CircleCursor />
  </main>
{/if}
