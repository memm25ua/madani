<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
  import { circOut, cubicIn, cubicOut, elasticOut } from "svelte/easing";
  import { blur, scale, slide } from "svelte/transition";
  import { t } from "svelte-i18n";

  const animDuration = 400;

  interface Project {
    id: number;
    name: string;
    shortname: string;
    description: string;
    link: string;
    techStack: string;
    img: string;
    flipped: boolean;
    grow: boolean;
  }

  let projects: Project[] = [
    {
      id: 1,
      name: "Crmble Trello Powerup",
      shortname: "Crmble",
      description:
        "Front-End Angular Developer at App Square S.L. Specialized in designing and developing user interfaces for a CRM platform.",
      link: "https://crmble.com/",
      techStack: "Angular.js, HTML, CSS",
      img: "assets/crmble.png",
      flipped: false,
      grow: false,
    },
    {
      id: 2,
      name: "Bindfy",
      shortname: "Bindfy",
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
      shortname: "ApparelLab",
      description:
        "Personal ecommerce project in production. Developed a full-stack application (DevOps included) for a clothing brand.",
      link: "https://apparellab.es/",
      techStack: "Next.js, Node.js, PostgreSQL, AWS",
      img: "assets/apparel.png",
      flipped: false,
      grow: false,
    },
  ];

  let selectedProject: Project | null = null;

  function openModal(project: Project) {
    selectedProject = project;
  }

  function closeModal() {
    selectedProject = null;
  }
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
>
  <section class="container-col">
    <HeroImg imgSrc="assets/heroProjects.webp" title="{$t("projects.title")}" />
  </section>

  <section class="container-col w-1/2">
    <div class="flex w-full h-full flex-wrap flex-row justify-center">
      {#each projects as project}
        <div
          on:mouseenter={() => {
            project.grow = true;
          }}
          on:mouseleave={() => {
            project.grow = false;
          }}
          role="status"
          class="relative w-96 h-64 2xl:h-96 hover:scale-[1.03] hover:grayscale-0 {project.flipped
            ? 'grayscale-0'
            : 'grayscale'} transition-all duration-300 {project.grow ||
          project.flipped
            ? 'grow'
            : ''} rounded-2xl lg:ml-5 bg-pampas-100 mb-6 dark:bg-codgray-900"
        >
          <button
            on:click={() => {
              /* project.flipped = true;

                setTimeout(() => {
                  project.flipped = false;
                }, 8000); */
              openModal(project);
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
        </div>
      {/each}
    </div>
  </section>

  {#if selectedProject}
    <div
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      
    >
      <button class="absolute top-0 right-0 p-4 w-full h-full  bg-black  bg-opacity-50 z-0" on:click={closeModal}>
      </button>
      <div
        class="flex flex-col items-center bg-pampas-200 dark:bg-codgray-950 text-codgray-950 dark:text-pampas-200 rounded-lg shadow-lg p-10 w-96 cursor-text z-10"
        in:blur={{ duration: animDuration, easing: circOut }}
      >
        <h2 class="text-2xl font-bold mb-2">{selectedProject.name}</h2>
        <p class="text-lg mb-2">
          {selectedProject.description}
        </p>
        <p class="text-sm mb-4">
          <strong>Tech Stack:</strong>
          {selectedProject.techStack}
        </p>
        <a
          href={selectedProject.link}
          on:click={(e) => {}}
          class="text-center text-white rounded-lg pt-2 px-4 text-xl xl:text-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 hover:from-orange-600 transition-colors hover:via-pink-600 hover:to-blue-600"
        >
          {selectedProject.shortname}
        </a>
      </div>
    </div>
  {/if}
</main>
