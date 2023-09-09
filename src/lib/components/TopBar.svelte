<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import ToggleThemeButton from "./ToggleThemeButton.svelte";
  import { slide } from "svelte/transition";

  export let data: { url: string };

  let page = "";
  let showDropdown = false;

  $: {
    page = ": { " + data.url.replace("/", "") + " }";
  }

  function openDropdown() {
    showDropdown = true;
    // close dropdown when clicked outside
    document.body.addEventListener("click", closeDropdown);
  }

  function closeDropdown() {
    showDropdown = false;
    document.body.removeEventListener("click", closeDropdown);
  }
</script>

<div class="flex justify-between items-center px-4 pr-0 pt-1 h-12">
  <div class="flex items-center relative md:pt-2">
    <span class="text-2xl xl:text-[2vw] pt-2 font-logo animate-fade-in">
      <a href="/"> Madani </a>
    </span>
    <div class="relative pt-2">
      {#if !showDropdown}
        <button
          class="focus:outline-none"
          on:click|stopPropagation={openDropdown}
        >
          <!-- <Typewriter interval={20}> -->
          <span
            class="text-lg xl:text-[1.5vw] font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
            style="view-transition-name: page-name;"
          >
            {page}
          </span>
          <!-- </Typewriter> -->
        </button>
      {/if}
      {#if showDropdown}
        <!-- Dropdown -->
        <div
          in:slide={{ duration: 400, delay: 0 }}
          out:slide={{ duration: 400, delay: 0 }}
          class="absolute transition-colors -top-2 left-1 h-fit w-max text-2xl xl:text-[1.5vw] font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
        >
          <nav class="w-full h-full bg-pampas-200 shadow-inner dark:bg-codgray-950 rounded-md ">
            <ul>
              <li
                class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700 pt-1"
              >
                {": {"}
                <span class="text-[#628D4F] font-normal text-xl"
                  >&nbsp;// Nav</span
                >
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700"
              >
                <a
                  class="w-full h-full"
                  href="/about"
                  style="view-transition-name: page-name;"
                  >&nbsp;&nbsp;&nbsp;&nbsp; about,</a
                >
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700 pr-4"
              >
                <a
                  class="w-full h-full"
                  style="view-transition-name: page-name;"
                  href="/projects">&nbsp;&nbsp;&nbsp;&nbsp; projects,</a
                >
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700"
              >
                <a
                  class="w-full h-full"
                  style="view-transition-name: page-name;"
                  href="/contact">&nbsp;&nbsp;&nbsp;&nbsp; contact,</a
                >
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-perano-300 dark:hover:bg-perano-700"
              >
                &nbsp;&nbsp;{"}"}
              </li>
            </ul>
          </nav>
        </div>
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
