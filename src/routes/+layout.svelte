<script lang="ts">
  import { isLoading } from "svelte-i18n";
  import "../app.css";
  import TopBar from "$lib/components/TopBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
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
  <!-- Top Thin Bar -->

  <TopBar {data} />

  <main
    class="flex w-full grow flex-col items-center justify-start px-2 font-primary md:px-5 md:pt-10"
  >
    <slot />
  </main>

  <Footer />

  <CircleCursor />
{/if}
