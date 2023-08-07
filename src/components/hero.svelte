<!--
    Hero component
    ==============
    
    The hero component is used to display a hero image with a title and a subtitle.
    It is used on the home page and on the project pages.
-->

<script lang="ts">
  import Typewriter, { scramble } from "svelte-typewriter";
  export let title: string = "Hi there, I'm";
  let name: string = "Madani El Mrabet Martínez";
  export let subtitle: string = "Software ";
  let scrambleDuration: number = 3000000;
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
      }, 1200);
    }, 200);
  }

  function speedUpScramble() {
    scrambleDuration = 1000;
  }
</script>

<div class="h-full w-full flex flex-wrap font-primary">
  <div class="container-col">
    <div class="title flex">
      <h1 class="text-[1.65rem] font-thin mb-4" on:mouseenter={speedUpScramble}>
        {title} &nbsp;
        <Typewriter mode="scramble" {scrambleDuration}>
          {name}
        </Typewriter>
      </h1>
    </div>

    <span class="text-2xl font-thin">
      {subtitle}
    </span>
    <div class="flex font-black">
      <Typewriter mode="loop" cursor={true} interval={100} on:done={handleDone}>
        {#each words as word}
          <span
            class="text-2xl mb-8 animate__animated animate__fadeIn animate__delay-1s"
            >{word}</span
          >
        {/each}
      </Typewriter>
      {#if showEmoji}
        <span class="text-2xl">
          {emojis[emojiIndex]}
        </span>
      {/if}
    </div>
  </div>
</div>
