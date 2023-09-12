<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import ToggleThemeButton from "./ToggleThemeButton.svelte";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
    import LangSelector from "./LangSelector.svelte";

  export let data: { url: string };

  let page = "";
  let showDropdown = false;
  let browser = "";
  let isSafari = false;
  let safariClass =
    "bg-papas-200 rounded-sm dark:bg-codgray-950 animate-[fade_1s_ease-in-out_forwards] hover:bg-perano-200 dark:hover:bg-codgray-900";

  // This function will be run when the component is initialized
  onMount(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) {
      browser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      isSafari = true;
      browser = "Apple Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
      browser = "Mozilla Firefox";
    } else if (
      userAgent.indexOf("MSIE") > -1 ||
      userAgent.indexOf("Trident") > -1
    ) {
      browser = "Microsoft Internet Explorer";
    } else {
      browser = "Unknown browser";
    }
  });

  $: {
    data.url === "/"
      ? (page = ": { home }")
      : (page = ": { " + data.url.replace("/", "") + " }");
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
    <span class="text-2xl xl:text-[2vw] font-logo animate-fade-in">
      <a href="/"> Madani </a>
    </span>
    <div class="relative w-max">
      {#if !showDropdown}
        <button
          class="focus:outline-none"
          on:click|stopPropagation={openDropdown}
        >
          <!-- <Typewriter interval={20}> -->
          <span
            class="text-lg md:text-xl xl:text-[1.5vw] font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
            style="view-transition-name: page-name;"
          >
            {page}<span class="text-[#628D4F] font-normal text-sm md:text-md"
              >&nbsp;//Menu</span
            >
          </span>
          <!-- </Typewriter> -->
        </button>
      {/if}
      {#if showDropdown}
        <!-- Dropdown -->
        <div
          in:slide={{ duration: isSafari ? 0 : 400, delay: 0 }}
          class="absolute transition-colors -top-4 left-1 h-fit w-max text-2xl font-primary font-bold text-perano-700 dark:text-perano-300 pl-1"
        >
          <nav class="w-full h-full">
            <ul class="bg-pampas-200 dark:bg-codgray-950 rounded-lg">
              <li
                class=" rounded-md pt-1"
              >
                {": {"}
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-pampas-100 dark:hover:bg-codgray-900"
              >
                <a
                  class="w-full h-full flex items-center"
                  style="view-transition-name: page-name;"
                  href="/"
                >
                  <div class="flex">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="material-symbols-sharp text-perano-900 dark:text-perano-500 "> home </span>
                    <span class="pt-0.5"> : home,</span>
                  </div>
                </a>
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-pampas-100 dark:hover:bg-codgray-900"
              >
                <a
                  class="w-full h-full"
                  href="/about"
                  style="view-transition-name: page-name;"
                >
                  <div class="flex">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="material-symbols-sharp text-perano-900 dark:text-perano-500" > info </span>
                    <span class="pt-0.5"> : about,</span>
                  </div>
                </a>
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-pampas-100 dark:hover:bg-codgray-900 pr-4"
              >
                <a
                  class="w-full h-full"
                  style="view-transition-name: page-name;"
                  href="/projects"
                >
                  <div class="flex">
                    &nbsp;&nbsp;&nbsp;&nbsp; <span
                      class="material-symbols-sharp text-perano-900 dark:text-perano-500 "
                    >
                      lightbulb
                    </span>
                    <span class="pt-0.5"> : projects,</span>
                  </div>
                </a>
              </li>
              <li
                class="3xl:pt-2 rounded-md hover:bg-pampas-100 dark:hover:bg-codgray-900"
              >
                <a
                  class="w-full h-full"
                  style="view-transition-name: page-name;"
                  href="/contact"
                >
                  <div class="flex">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="material-symbols-sharp text-perano-900 dark:text-perano-500 "> call </span>
                    <span class="pt-0.5"> : contact,</span>
                  </div>
                </a>
              </li>
              <li
                class="3xl:pt-2 rounded-m"
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
    <div class="relative flex h-full justify-center">
      <ToggleThemeButton />
    </div>
    <div class="relative flex h-full w-12 pr-2 justify-center">
      <LangSelector />
    </div>
  </div>
</div>

<style>
  :root {
    --cursor-color: white;
    --cursor-width: 2px;
  }
</style>
