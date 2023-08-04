<!-- Navbar -->
<script lang="ts">
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

<div class="flex justify-between items-center px-6">
  <span class="font-bold text-xl"> MADANI </span>
  <div
    class="relative cursor-pointer"
    role="button"
    tabindex="0"
    on:keydown={handleKeyDown}
  >
    <button
      class="bg-gray-300 p-2 border border-gray-400 transition-all duration-300"
      on:click={toggleLanguage}
    >
      {language}
    </button>
    <div
      class={`transition-all duration-300 transform ${
        showLanguages ? "scale-y-100" : "scale-y-0"
      } absolute bg-white border border-gray-400 mt-1 origin-top`}
    >
      <button
        on:click={() => selectLanguage("en")}
        class="p-2 cursor-pointer hover:bg-gray-200"
      >
        English
      </button>
      <button
        on:click={() => selectLanguage("es")}
        class="p-2 cursor-pointer hover:bg-gray-200"
      >
        Español
      </button>
      <!-- Add more languages here -->
    </div>
  </div>
</div>

<style>
  .scale-y-0 {
    transform: scaleY(0);
  }
  .scale-y-100 {
    transform: scaleY(1);
  }
</style>
