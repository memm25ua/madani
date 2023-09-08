<script>
  import HeroImg from "$lib/components/HeroImg.svelte";

  // Your JavaScript logic here
  let skills = [
    "Angular.ts",
    "HTML/CSS",
    "Swift/SwiftUI",
    "Git Flow",
    "Java/SpringBoot",
    "PHP/Laravel",
    "Python/Tensorflow",
  ];
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
>
  <section class="container-col p-6">
    <HeroImg imgSrc="assets/heroAbout.png" title="ABOUT ME" />
  </section>

  <section class="container-col">
    <p class="text-lg mb-4 font-light">
      Enthusiastic Software Developer with a passion for learning and applying
      new technologies to drive innovative solutions. I specialize in designing
      and developing user interfaces, particularly in Angular for CRM platforms.
      I have experience working in cross-functional teams and delivering
      scalable solutions.
    </p>
  </section>

  <section class="container-col items-start">
    <h2 class="text-2xl font-title mb-4">sKills</h2>
    <ul>
      {#each skills as skill}
        <li class="text-lg mb-2 font-normal">{skill}</li>
      {/each}
    </ul>
  </section>
</main>

<style>
  /* Add any custom styles if needed */
</style>
