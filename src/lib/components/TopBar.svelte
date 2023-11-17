<script lang="ts">
  import { t } from "svelte-i18n";
  import ToggleThemeButton from "./ToggleThemeButton.svelte";
  import { blur, slide } from "svelte/transition";
  import { onMount } from "svelte";
  import LangSelector from "./LangSelector.svelte";
  import { setHover } from "$lib/stores/circleStore";

  export let data: { url: string };

  let page = "";
  let showDropdown = false;
  let browser = "";
  let isSafari = false;
  let icon = "home";

  let iconMap: Record<string, string> = {
    home: "home",
    about: "fingerprint",
    projects: "emoji_objects",
    contact: "call",
  };

  // This function will be run when the component is initialized
  onMount(() => {
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    if (userAgent.indexOf("Chrome") > -1) {
      browser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      isSafari = true;
      browser = "Apple Safari";
    }
  });

  $: {
    let url = data.url;
    url === "/" ? (url = "home") : (url = url.replace("/", ""));

    page = ": { " + $t("topbar." + url) + " }";
    icon = iconMap[url];
  }

  function openDropdown() {
    setHover(true);
    showDropdown = true;
    // close dropdown when clicked outside
    setTimeout(() => {
      document.body.addEventListener("click", closeDropdown);
    }, 0);
  }

  function closeDropdown() {
    setHover(false, 400);
    showDropdown = false;
    document.body.removeEventListener("click", closeDropdown);
  }
</script>

<header
  class="lg:col-span-1 z-40 relative"
  style="view-transition-name: header;"
>
  <div class=" flex justify-between items-center px-4 pr-0 pt-2 h-12">
    <div class="flex items-center relative md:pt-4">
      <span
        class="text-3xl xl:text-[2.5vw] font-logo animate-fade-in font-bold tracking-tighter pr-2"
        style="view-transition-name: logo;"
      >
        <a href="/"> madani. </a>
      </span>
      <div
        class="relative w-max rounded-lg md:ml-2 h-12 flex items-center justify-center"
      >
        {#if !showDropdown}
          <button
            class="focus:outline-none"
            in:blur={{ duration: 400, delay: 100 }}
            on:mouseenter|stopPropagation|preventDefault={openDropdown}
          >
            <!-- <Typewriter interval={20}> -->
            <span
              class="text-lg md:text-xl xl:text-[1.5vw] font-primary font-thin pl-1 flex items-center"
              style="view-transition-name: page-name;"
            >
              <span
                class="material-symbols-sharp text-inherit text-lg md:text-xl xl:text-[1.5vw]"
              >
                {icon}
              </span>
              {$t(page)}
            </span>
            <!-- </Typewriter> -->
          </button>
        {:else}
          <!-- Dropdown -->
          <div
            in:slide={{ duration: isSafari ? 0 : 400, delay: 0 }}
            out:slide={{ duration: isSafari ? 0 : 400, delay: 0 }}
            on:mouseleave|stopPropagation|preventDefault={closeDropdown}
            role="button"
            tabindex="0"
            class="absolute transition-colors top-0 left-1 h-fit w-max text-2xl font-primary font-semibold text-perano-700 dark:text-perano-300 pl-1"
          >
            <nav class="w-full h-full">
              <ul class="bg-pampas-200 dark:bg-codgray-950 rounded-lg">
                <li class=" rounded-md pt-1">
                  {": {"}
                </li>
                <li class="3xl:pt-2 rounded-md circle-link">
                  <a class="w-full h-full flex items-center" href="/">
                    <div class="flex">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="material-symbols-sharp text-inherit">
                        home
                      </span>
                      <span class="pt-0.5"> : {$t("topbar.home")},</span>
                    </div>
                  </a>
                </li>
                <li class="3xl:pt-2 rounded-md circle-link">
                  <a class="w-full h-full" href="/about">
                    <div class="flex">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="material-symbols-sharp text-inherit">
                        fingerprint
                      </span>
                      <span class="pt-0.5"> : {$t("topbar.about")},</span>
                    </div>
                  </a>
                </li>
                <li class="3xl:pt-2 rounded-md circle-link pr-4">
                  <a class="w-full h-full" href="/projects">
                    <div class="flex">
                      &nbsp;&nbsp;&nbsp;&nbsp; <span
                        class="material-symbols-sharp text-inherit"
                      >
                        emoji_objects
                      </span>
                      <span class="pt-0.5"> : {$t("topbar.projects")},</span>
                    </div>
                  </a>
                </li>
                <li class="3xl:pt-2 rounded-md circle-link">
                  <a class="w-full h-full" href="/contact">
                    <div class="flex">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="material-symbols-sharp text-inherit">
                        call
                      </span>
                      <span class="pt-0.5"> : {$t("topbar.contact")},</span>
                    </div>
                  </a>
                </li>
                <li class="3xl:pt-2 rounded-m">
                  &nbsp;&nbsp;{"}"}
                </li>
              </ul>
            </nav>
          </div>
        {/if}
      </div>
    </div>

    <div
      class=" relative flex h-full w-1/3 max-w-[200px] self-end justify-end gap-2 pr-3"
    >
      <div class="relative flex h-full justify-center z-20">
        <ToggleThemeButton />
      </div>
      <div class="relative flex h-full w-12 justify-center z-10">
        <LangSelector />
      </div>
    </div>
  </div>
</header>

<style>
  :root {
    --cursor-color: white;
    --cursor-width: 2px;
  }
</style>
