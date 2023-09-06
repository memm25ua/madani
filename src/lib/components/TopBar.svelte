<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import ToggleThemeButton from "./ToggleThemeButton.svelte";

  export let data: { url: string };

  let page = "";
  let showDropdown = false;

  $: {
    page = ": { " + data.url.replace("/", "") + " }";
  }

  function toggleDropdown() {
    showDropdown = !showDropdown;
    //remove page last character
    page = showDropdown ? page.slice(0, -1) + "," : page + " }";
  }
</script>

<div class="flex justify-between items-center px-4 pr-0 pt-1 h-12">
  <div class="flex items-center relative">
    <span class="text-2xl font-logo animate-fade-in">
      <a href="/"> Madani </a>
    </span>
    <div class="relative">
      {#if !showDropdown}
        <button class="focus:outline-none" on:click={toggleDropdown}>
          <Typewriter interval={50}>
            <span
              class="text-sm font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
            >
              {page}
            </span>
          </Typewriter>
        </button>
      {/if}
      {#if showDropdown}
        <nav
          class="absolute -top-3 left-1 rounded-md shadow-lg w-20 bg-transparent text-sm font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
        >
          <ul>
            <li>{"{"}</li>
            <li>
              <a
                class="w-full h-full contents"
                href="/about"
                on:click={toggleDropdown}>&nbsp;&nbsp; about,</a
              >
            </li>
            <li>
              <a
                class="w-full h-full contents"
                href="/projects"
                on:click={toggleDropdown}>&nbsp;&nbsp; projects,</a
              >
            </li>
            <li>
              <a
                class="w-full h-full contents"
                href="/contact"
                on:click={toggleDropdown}>&nbsp;&nbsp; contact,</a
              >
            </li>
            <li>{"}"}</li>
          </ul>
        </nav>
      {/if}
    </div>
  </div>

  <div class="relative flex h-full w-1/3 max-w-[200px] self-end justify-end">
    <div class="relative flex h-full px-2 justify-center">
      <ToggleThemeButton />
    </div>
  </div>
</div>

<style>
  :root {
    --cursor-color: white;
    --cursor-width: 2px;
  }
</style>
