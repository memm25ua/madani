<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { cubicIn, cubicOut } from "svelte/easing";
    import { onMount } from "svelte";
    import theme from "$lib/stores/themeStore";
  
    export let data: any;
  
    let transitionConfig = {
      duration: 800,
      easing: cubicOut,
    };
  
    let imageSrc = ""; // Default image
    let imageClass = "w-11/12 sm:w-full h-auto"; // Default class
  
    $: if (data.url === "/about") {
      imageSrc = "assets/heroAbout.png";
      imageClass = "w-full h-auto";
      transitionConfig = {
        duration: 800,
        easing: cubicIn,
      };
    } else if (data.url === "/projects") {
      imageSrc = "assets/heroProjects.png";
      imageClass = "w-full h-auto";
      transitionConfig = {
        duration: 800,
        easing: cubicIn,
      };
    } else if (data.url === "/contact") {
      imageSrc = "assets/heroContact.png";
      imageClass = "w-full h-auto";
      transitionConfig = {
        duration: 800,
        easing: cubicIn,
      };
    } else if (data.url === "/") {
      imageSrc = "assets/hero.png";
      imageClass = "w-full h-auto";
      transitionConfig = {
        duration: 800,
        easing: cubicIn,
      };
    }
    
    onMount(() => {
      theme.subscribe((value) => {
        document.body.className = value === "dark" ? "dark" : "light";
      });
    });
  </script>
  
  <div class="container-col pt-0">
    {#key data}
      <div class="flex justify-center w-full sm:w-4/5 h-auto animate-fade-in">
        <img
          in:fade={{ ...transitionConfig, delay: 800 }}
          out:fade={transitionConfig}
          class={imageClass}
          src={imageSrc}
          alt="Hero"
        />
      </div>
    {/key}
  </div>
  
  <style>
    /* Add your styles here */
  </style>
  