<!-- Topbar -->
<script lang="ts">
  import theme from "../stores/themeStore";
  import LangSelector from "./LangSelector.svelte";
  import ToggleThemeButton from "./ToggleThemeButton.svelte";
  import { onMount } from "svelte";

  let currentTheme;

  onMount(() => {
    theme.subscribe((value) => {
      currentTheme = value;
      document.body.className = currentTheme === "dark" ? "dark" : "light";
    });
  });
</script>

<div class="flex justify-between items-center px-4 pr-0 pt-1 h-12">
  <span class="text-2xl font-logo animate-fade-in">
    <a href="/"> Madani </a>
  </span>
  <div class="relative flex h-full w-1/3 max-w-[200px] self-end justify-end">
    <div class="relative flex h-full px-2 justify-center">
      <ToggleThemeButton />
    </div>
    <!-- <div class="toolbar-item w-14 justify-end items-end">
      <LangSelector />
    </div> -->
  </div>
</div>