<script lang="ts">
  import { blur, fade, fly, scale } from "svelte/transition";
  import {
    bounceInOut,
    cubicIn,
    cubicInOut,
    cubicOut,
    elasticInOut,
    expoOut,
  } from "svelte/easing";
  import { onMount } from "svelte";
  import theme from "$lib/stores/themeStore";

  export let data: any;

  let transitionConfig = {
    duration: 500,
  };

  let transitionInConfig = {
    easing: cubicIn,
    ...transitionConfig,
  };

  let transitionOutConfig = {
    easing: cubicIn,
    ...transitionConfig,
  };

  let imageSrc = ""; // Default image
  let imageClass = "";

  $: if (data.url === "/about") {
    imageSrc = "assets/heroAbout.png";
  } else if (data.url === "/projects") {
    imageSrc = "assets/heroProjects.png";
  } else if (data.url === "/contact") {
    imageSrc = "assets/heroContact.png";
  } else if (data.url === "/") {
    imageSrc = "assets/hero.png";
  }

  onMount(() => {
    theme.subscribe((value) => {
      document.body.className = value === "dark" ? "dark" : "light";
    });
  });
</script>

{#key data}
  <div class="flex justify-center w-full h-full absolute" in:scale={{ duration: 300, easing: cubicInOut }} >
    <img
      in:blur={transitionInConfig}
      class="object-contain max-w-full max-h-full {imageClass}"
      src={imageSrc}
      alt="Hero"
    />
  </div>
{/key}

<style>
  /* Add your styles here */
</style>
