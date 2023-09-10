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
      img: "assets/crmble.png",
      flipped: false,
      grow: false,
    },
    {
      id: 2,
      name: "Bindfy",
      description:
        "Initiated a SaaS project, based on an iOS and web application for easy management of raffles for businesses.",
      link: "https://partners.bindfyapp.com/",
      techStack: "Angular.ts, SwiftUI, Firebase",
      img: "assets/bindfy.png",
      flipped: false,
      grow: true,
    },
    {
      id: 3,
      name: "ApparelLab",
      description:
        "Personal ecommerce project in production. Developed a full-stack application (DevOps included) for a clothing brand.",
      link: "apparellab.es",
      techStack: "Next.js, Node.js, PostgreSQL, AWS",
      img: "assets/apparel.png",
      flipped: false,
      grow: false,
    }
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
          class="relative w-96 h-64 2xl:h-96 {project.grow ? 'grow' : ''} rounded-2xl lg:ml-5 bg-pampas-100 mb-6 dark:bg-codgray-900"
        >
          {#if project.flipped}
            <button
              on:click={() => {
                project.flipped = false;
              }}
              class="h-full w-full"
              in:blur={{ duration: animDuration, easing: circOut }}
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
              in:blur={{ duration: animDuration, easing: circOut }}
            >
              <img
                src={project.img}
                alt="PPP"
                class="h-full w-full object-cover rounded-2xl"
              />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  </section>
</main>
