<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
    import { circOut, cubicIn, cubicOut, elasticOut } from "svelte/easing";
  import { blur, scale, slide } from "svelte/transition";

  const animDuration = 400;

  let projects = [
    {
      id: 1,
      name: "Crmble Trello Powerup",
      description:
        "Front-End Angular Developer at App Square S.L. Specialized in designing and developing user interfaces for a CRM platform.",
      link: "#",
      techStack: "Angular.js, HTML, CSS",
      img: "assets/hero.png",
      flipped: false,
    },
    {
      id: 2,
      name: "iOS App with Firebase Backend",
      description:
        "Freelance iOS App developer. Initiated and executed a start-up focused iOS application development project.",
      link: "#",
      techStack: "Swift, SwiftUI",
      img: "assets/hero.png",
      flipped: false,
    },
    {
      id: 3,
      name: "Real-time Game",
      description:
        "Personal project focused on real-time game development. Utilized Apache Kafka for synchronization.",
      link: "#",
      techStack: "Python, Apache Kafka",
      img: "assets/hero.png",
      flipped: false,
    },
  ];
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
>
  <section class="container-col">
    <HeroImg imgSrc="assets/heroProjects.png" title="PROJECTS" />
  </section>

  <section class="container-col w-1/2">
    <div class="flex w-full h-full flex-wrap flex-row justify-center">
      {#each projects as project}
        <div
          class="relative w-96 h-64 2xl:h-96 rounded-2xl {project.flipped
            ? 'shadow-inner shadow-pampas-200'
            : 'shadow-md shadow-pampas-300'}  lg:ml-5 bg-pampas-100 mb-6 dark:bg-codgray-900 p-6"
        >
          {#if project.flipped}
            <button
              on:click={() => {
                project.flipped = false;
              }}
              class="h-full w-full"
              in:blur={{ duration: animDuration , easing: circOut }}
            >
              <h2 class="text-2xl font-bold mb-2">{project.name}</h2>
              <p class="text-lg mb-2">
                {project.description}
              </p>
              <p class="text-sm mb-4">
                <strong>Tech Stack:</strong>
                {project.techStack}
              </p>
              <a href={project.link} class="text-blue-500">Learn More</a>
            </button>
          {:else}
            <button
              on:click={() => {
                project.flipped = true;
              }}
              class="h-full w-full"
              in:blur={{ duration: animDuration , easing: circOut }}
            >
              <img
                src={project.img}
                alt="PPP"
                class="h-full object-contain rounded-2xl"
              />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  </section>
</main>
