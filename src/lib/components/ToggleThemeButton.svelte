<script lang="ts">
  import { onMount } from "svelte";
  import { ThemeEnum as Theme } from "../stores/themeStore";
  import theme from "../stores/themeStore";

  let isChecked = false;

  onMount(() => {
    theme.subscribe((t) => {
      isChecked = t === Theme.LIGHT;
    });
  });

  const toggleTheme = () => {
    theme.update((value) => (value === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };
</script>

<div class="flex flex-col items-center">
  <div class="flex items-center h-full justify-center relative z-10" style="view-transition-name: themeToggle;">
    <input type="checkbox" id="theme-toggle" bind:checked={isChecked} on:change={toggleTheme} />
    <label
      class="inline-block cursor-pointer h-6 w-6 rounded-full transition-all duration-500 "
      for="theme-toggle"
    ></label>
  </div>
</div>

<style>
  #theme-toggle {
    visibility: hidden;
  }

  #theme-toggle:not(:checked) + label {
    background-color: rgb(225, 191, 0);
  }

  #theme-toggle:checked + label {
    background-color: transparent;
    box-shadow: inset -4px -3px 0px 0px #393636;
  }
</style>
