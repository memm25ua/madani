<script lang="ts">
  import { langs, DefaultLang } from "../model/i18n";
  import { locale } from "svelte-i18n";
  import type { ILang } from "../model/i18n";
  import { onMount } from "svelte";

  export let selectedLanguage: ILang = DefaultLang;

  let languages = langs;
  let open = false;

  onMount(() => {
    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang) {
      $locale = savedLang;
    }
    locale.subscribe((value) => {
      selectedLanguage =
        languages.find((lang) => lang.code === value) || DefaultLang;
    });
  });

  function selectLanguage(selected: ILang) {
    $locale = selected.code;
    localStorage.setItem("selectedLang", selected.code);
    selectedLanguage = selected;
    open = false;
  }

  function closeDropdown() {
    open = false;
  }

  function openDropdown() {
    open = true;
  }
</script>

<svelte:window on:click={closeDropdown} />

<div class="flex flex-col items-center text-codgray-300 font-light relative">
  <button class="flex items-center h-full w-10 justify-center relative z-10" on:mouseenter={openDropdown} on:click|stopPropagation={openDropdown}>
    <img class="hover:grayscale transition-all object-cover w-full h-6 rounded-full" src={selectedLanguage.flag} alt="lan" width="20px" />
  </button>
  <button class={`absolute top-10 w-20 rounded-md shadow-lg ${open ? 'block' : 'hidden'}`} on:mouseleave={closeDropdown} style="z-index: 50;">
    <div class="rounded-md bg-white shadow-xs">
      <div class="py-1">
        {#each languages as lang}
          <button on:click={() => selectLanguage(lang)} class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            {lang.name}
          </button>
        {/each}
      </div>
    </div>
  </button>
</div>
