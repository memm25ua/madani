<!--
    This component is used to select the language of the website.
    It is used in the header component. It is a custom dropdownwith bookamrk appearance.
    When clicked, it shows a list of languages to select from, sliding down the "bookamrk".
-->

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
    document.body.removeEventListener("click", closeDropdown);
  }

  function openDropdown() {
    open = true;
    document.body.addEventListener("click", closeDropdown);
  }

</script>

<div
  class="flex flex-col items-center text-codgray-300 font-light -mt-3.5"
  style="view-transition-name: langSelectorWrapper;"
>
  <div
    class="bg-codgray-600 border-gray-200 mt-2 w-[42px] z-20 animate h-full {open
      ? 'animate-slide-down'
      : 'hidden'} transition-all"
  >
    {#each languages.filter((lang) => lang !== selectedLanguage) as lang (lang)}
      <div class="flex items-center justify-center w-full">
        <button class="w-max h-max my-3" on:click={() => selectLanguage(lang)}>
          <img
            class="hover:grayscale transition-all object-cover h-6 w-6 rounded-full border-pampas-200 border"
            src={lang.flag}
            alt="lan"
          />
        </button>
      </div>
    {/each}
  </div>
  <button
    class="bg-transparent flex items-center justify-center relative z-10 {open
      ? '-mt-4 animate-slide-down'
      : ''}"
    on:click|stopPropagation={openDropdown}
    style="view-transition-name: langSelector;"
  >
    <img
      class="absolute hover:grayscale transition-all object-cover h-6 w-6 rounded-full border-pampas-200 border mb-2"
      src={selectedLanguage.flag}
      alt="lan"
      width="20px"
    />
    <span class="material-symbols-sharp !text-7xl text-codgray-600"
      >bookmark</span
    >
  </button>
</div>
<style>
  .material-symbols-sharp {
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }
  </style>