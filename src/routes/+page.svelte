<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import HeroImg from "$lib/components/HeroImg.svelte";
  import NavMenu from "$lib/components/NavMenu.svelte";
</script>

<div
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
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
