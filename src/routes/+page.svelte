<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import HeroImg from "$lib/components/HeroImg.svelte";
  import NavMenu from "$lib/components/navMenu/NavMenu.svelte";
</script>

<section
  class="grow flex flex-wrap w-full h-full items-center justify-center gap-3 mt-3"
>
  <HeroImg imgSrc="assets/hero.webp" />

  <Hero />
  <NavMenu />
</section>
