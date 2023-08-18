<!-- Topbar -->
<script lang="ts">
  import LangSelector from "./LangSelector.svelte";
  import theme from "../stores/themeStore";
  import ToogleThemeButton from "./ToogleThemeButton.svelte";
  import { onMount } from "svelte";

  let currentTheme;

  onMount(() => {
    theme.subscribe((value) => {
      currentTheme = value;
      document.body.className = currentTheme === "dark" ? "dark" : "";
    });
  });
</script>

<div class="flex justify-between items-center pl-6 pr-20 pt-1">
  <span class="text-2xl font-logo"> MADANI </span>
  <div class="self-end">
    <ToogleThemeButton />
  </div>
  <LangSelector />
</div>
