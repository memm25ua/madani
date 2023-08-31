<!-- Topbar -->
<script lang="ts">
  import ToggleThemeButton from "./ToggleThemeButton.svelte";

  export let data: { url: string };

  let page = "";

  $: {
    page = ": {" + data.url.replace("/", "") + "}";
  }
</script>

<div class="flex justify-between items-center px-4 pr-0 pt-1 h-12">
  <div class="flex items-center">
    <span class="text-2xl font-logo animate-fade-in">
      <a href="/"> Madani </a>
    </span>
    <span
      class="text-sm font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
    >
      {page}
    </span>
  </div>

  <div class="relative flex h-full w-1/3 max-w-[200px] self-end justify-end">
    <div class="relative flex h-full px-2 justify-center">
      <ToggleThemeButton />
    </div>
    <!-- <div class="toolbar-item w-14 justify-end items-end">
      <LangSelector />
    </div> -->
  </div>
</div>
