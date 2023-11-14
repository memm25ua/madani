<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import HeroImg from "$lib/components/HeroImg.svelte";
  import NavMenu from "$lib/components/navMenu/NavMenu.svelte";
</script>

<div
  class="h-full w-full grow flex flex-wrap font-primary items-center justify-self-center self-center md:mt-40"
>
  <div class="container-col">
    <HeroImg imgSrc="assets/hero.webp" />
  </div>
  <div class="container-col pl-3">
    <Hero />
  </div>
  <div class="container-col pl-0">
    <NavMenu />
  </div>
</div>
