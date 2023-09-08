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
  }
</script>

<div class="flex justify-between items-center px-4 pr-0 pt-1 h-12">
  <div class="flex items-center relative md:pt-2">
    <span class="text-2xl xl:text-[2vw] pt-2 font-logo animate-fade-in">
      <a href="/"> Madani </a>
    </span>
    <div class="relative pt-2">
      {#if !showDropdown}
        <button class="focus:outline-none" on:click={toggleDropdown}>
          <Typewriter interval={50}>
            <span
              class="text-lg xl:text-[1.5vw] font-primary font-bold text-perano-700 dark:text-perano-300  pl-1"
            >
              {page}
            </span>
          </Typewriter>
        </button>
      {/if}
      {#if showDropdown}
      <!-- Dropdown -->
        <nav
          class="absolute shadow-none dark:bg-codgray-90 bg-pampas-200 dark:bg-codgray-950 transition-colors -top-3 left-1 rounded-md w-max text-2xl xl:text-[1.5vw] font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
        >
          <ul>
            <li class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700">{": {"} <span class="text-[#628D4F] font-normal text-xl">&nbsp;// Nav</span></li>
            <li class="3xl:pt-2  rounded-md hover:bg-perano-300 dark:hover:bg-perano-700">
              <a
                class="w-full h-full"
                href="/about"
                on:click={toggleDropdown}>&nbsp;&nbsp;&nbsp;&nbsp; about,</a
              >
            </li>
            <li class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700">
              <a
                class="w-full h-full"
                href="/projects"
                on:click={toggleDropdown}>&nbsp;&nbsp;&nbsp;&nbsp; projects,</a
              >
            </li>
            <li class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700">
              <a
                class="w-full h-full"
                href="/contact"
                on:click={toggleDropdown}>&nbsp;&nbsp;&nbsp;&nbsp; contact,</a
              >
            </li>
            <li class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700">&nbsp;&nbsp;{"}"}</li>
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
