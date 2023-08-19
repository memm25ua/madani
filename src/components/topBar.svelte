<!-- Topbar -->
<script lang="ts">
  import LangSelector from "./langSelector.svelte";
  import theme from "../stores/themeStore";
  import ToogleThemeButton from "./toogleThemeButton.svelte";
  import { onMount } from "svelte";

  let currentTheme;

  onMount(() => {
    theme.subscribe((value) => {
      currentTheme = value;
      document.body.className = currentTheme === "dark" ? "dark" : "";
    });
  });
</script>

<div class="flex justify-between items-center px-4 pr-0 pt-1">
  <span class="text-2xl font-logo"> MADANI </span>
  <div class="top-right-toolbar">
    <div class="toolbar-item">
      <ToogleThemeButton />
    </div>
    <div class="toolbar-item w-14">
      <LangSelector />
    </div>
  </div>
</div>

<style>
  .top-right-toolbar {
    @apply relative flex h-full w-1/3 self-end max-w-[200px];
  }
  .toolbar-item{
    @apply relative flex h-full flex-grow items-center justify-center;
  }
</style>
