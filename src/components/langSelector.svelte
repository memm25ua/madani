<!--
    This component is used to select the language of the website.
    It is used in the header component. It is a custom dropdownwith bookamrk appearance.
    When clicked, it shows a list of languages to select from, sliding down the "bookamrk".
-->

<script lang="ts">
  import { writable } from "svelte/store";

  export let selectedLanguage: string = "English";
  const languages = ["English", "Spanish", "French", "German"];

  let open = false;

  function selectLanguage(lang: string) {
    selectedLanguage = lang;
    open = false;
  }
</script>

<div class="absolute right-2 top-[-16px]">
  <button
    class="bg-transparent"
    on:click={() => (open = !open)}
    on:focusout={() => (open = false)}
  >
    {#if open}
      <div
        class="relative bg-white border border-gray-200 mt-2 w-full animate-slide-down-xl"
      >
        {#each languages as lang (lang)}
          <button
            class="block w-full text-left px-4 py-2 hover:bg-gray-100"
            on:click={() => selectLanguage(lang)}
          >
            {lang}
          </button>
        {/each}
      </div>
    {/if}
    <span
      class="material-symbols-rounded text-8xl {open
        ? 'animate-slide-down-xl'
        : ''}">bookmark</span
    >
  </button>
</div>
