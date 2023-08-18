<!--
    Hero component
    ==============
    
    The hero component is used to display a hero image with a title and a subtitle.
    It is used on the home page and on the project pages.
-->

<script lang="ts">
  import Typewriter, { scramble } from "svelte-typewriter";
  export let title: string = "Hi there!! 👋 ";
  let name: string = "Madani El Mrabet Martínez,";
  export let subtitle: string = "Software ";
  let showEmoji: boolean = false;
  let emojiIndex: number = 0;
  let words: string[] = [
    "Developer",
    "Engineer",
    "Designer",
    "Architect",
    "Lover",
  ];
  const emojis = ["👨🏽‍💻", "🚀", "🎨", "🏗️", "❤️"];

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

<div class="container-col">
  <lottie-player
    src="https://lottie.host/b81108f5-0cf7-4152-951e-1aef5bafd9f9/Nrn4ELrdcy.json"
    background="Transparent"
    speed=".5"
    class="lottie-anim"
    direction="{1}"
    mode="normal"
    autoplay
  ></lottie-player>
</div>

<div class="container-col font-light">
  <div class="title flex">
    <h1 class="text-2xl mb-1">
      {title}
      <Typewriter mode="scramble" scrambleDuration={1000}>
        <span data-static>I'm</span>
        <span>{name}</span>
      </Typewriter>
    </h1>
  </div>

  <div class="flex">
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
        <span class="text-2xl mb-8 font-black">{word}</span>
      {/each}
    </Typewriter>
    {#if showEmoji}
      <span class="text-2xl">
        &nbsp;{emojis[emojiIndex]}
      </span>
    {/if}
  </div>
</div>

<style>
  :root {
    --cursor-color: white; /* Sets the cursor color to red */
    --cursor-width: 2px; /* Sets the cursor width to 2 pixels */
  }

  .lottie-anim {
    width: 300px;
    height: 300px;
  }
</style>
