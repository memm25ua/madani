<!-- Navbar -->
<script lang="ts">
    import LangSelector from "./langSelector.svelte";

  let language = "en"; // default language
  let showLanguages = false;

  function toggleLanguage() {
    showLanguages = !showLanguages;
  }

  function selectLanguage(lang: string) {
    language = lang;
    showLanguages = false;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      toggleLanguage();
    }
  }
</script>

<div class="flex justify-between items-center px-6 pt-3">
  <span class="font-bold text-2xl font-logo"> MADANI </span>
  <LangSelector/>
</div>
