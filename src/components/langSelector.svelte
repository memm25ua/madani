<!--
    This component is used to select the language of the website.
    It is used in the header component. It is a custom dropdownwith bookamrk appearance.
    When clicked, it shows a list of languages to select from, sliding down the "bookamrk".
-->

<script lang="ts">
  import { slide } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  export let selectedLanguage: string = "en";
  const languages = ["es"];

  let open = false;

  function selectLanguage(lang: string) {
    //remove lang from languages and add selectedLanguage
    languages.splice(languages.indexOf(lang), 1);
    languages.push(selectedLanguage);

    selectedLanguage = lang;
    open = false;
  }
</script>

<div
  class="flex flex-col items-center text-codgray-300 font-light"
>
  {#if open}
    <div
      transition:slide={{ duration: 1000, easing: cubicOut }}
      class="relative bg-codgray-600 border-gray-200 mt-2 w-[42px] z-10"
    >
      {#each languages as lang (lang)}
        <button
          class="block w-full text-center hover:bg-gray-100 p-2"
          on:click={() => selectLanguage(lang)}
        >
          {lang}
        </button>
      {/each}
    </div>
  {/if}
  <button
    class="bg-transparent flex items-center justify-center relative mt-[-18px] z-0"
    on:click={() => (open = !open)}
  >
    <span class="absolute z-90">{selectedLanguage}</span>
    <span class="material-symbols-sharp !text-7xl text-codgray-600"
      >bookmark</span
    >
  </button>
</div>

<style>
</style>
