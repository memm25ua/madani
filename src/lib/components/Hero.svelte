<!--
    Hero component
    ==============
    
    The hero component is used to display a hero image with a title and a subtitle.
    It is used on the home page and on the project pages.
-->

<script lang="ts">
  import Typewriter, { scramble } from "svelte-typewriter";
  import { t } from "svelte-i18n";
  let title: string = $t("hero.title");
  let name: string = $t("hero.name");
  let subtitle: string = "Software ";
  let showEmoji: boolean = false;
  let emojiIndex: number = 0;
  let words: string[] = [
    "Developer",
    "Engineer",
    "Designer",
    "Architect",
    "Lover",
  ];
  const emojis = ["👨🏽‍💻", "🚀", "🎨", "🏗️", "💙"];

  function handleDone() {
    setTimeout(() => {
      showEmoji = true;
      setTimeout(() => {
        showEmoji = false;
        emojiIndex++;
        if (emojiIndex >= emojis.length) {
          emojiIndex = 0;
        }
      }, 1800);
    }, 30);
  }
</script>

<section class="font-thin w-96 md:w-72 pl-4">
  <div class="title flex w-full">
    <h1 class="text-2xl sm:text-3xl mb-1">
      {title} <br />
      <span>{name}</span>
    </h1>
  </div>

  <div class="flex w-full">
    <span class="text-2xl">
      {subtitle}
      &nbsp;
    </span>
    <br />
    <Typewriter
      class="typewriter"
      mode="loop"
      cursor={false}
      interval={100}
      unwriteInterval={50}
      wordInterval={2000}
      on:done={handleDone}
    >
      {#each words as word}
        <span class="text-2xl mb-8 font-semibold">{word}</span>
      {/each}
    </Typewriter>
    {#if showEmoji}
      <span class="text-2xl">
        &nbsp;{emojis[emojiIndex]}
      </span>
    {/if}
  </div>
</section>

<style>
  :root {
    --cursor-color: white; /* Sets the cursor color to red */
    --cursor-width: 2px; /* Sets the cursor width to 2 pixels */
  }
</style>
