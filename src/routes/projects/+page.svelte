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
      link: "https://partners.bindfyapp.com/landing",
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
      grow: true,
    },
    {
      id: 4,
      name: "This portfolio 😮‍💨",
      shortname: "this",
      description:
        "Personal portfolio, developed with SvelteKit and TailwindCSS.",
      link: "#",
      techStack: "SvelteKit, TailwindCSS, TypeScript",
      img: "assets/selfRef.webp",
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

<section class="w-full flex items-center justify-center mb-5 sm:mt-0">
  <HeroImg imgSrc="assets/heroProjects.webp" title={$t("projects.title")} />
</section>

<section class="flex w-full flex-wrap">
  {#each projects as project}
    <div
      role="status"
      class=" w-full sm:w-2/5 hover:grow grayscale relative h-64 2xl:h-96 hover:scale-[1.03] hover:grayscale-0 transition-all duration-300
          {project.grow
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
</section>

{#if selectedProject && selectedProject.id !== 9}
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
  >
    <button
      class="absolute top-0 right-0 p-4 w-full h-full bg-black bg-opacity-50 z-0"
      on:click={closeModal}
    >
    </button>
    <div
      class="flex flex-col items-center bg-pampas-200 gap-2 sm:gap-4 xl:gap-10 dark:bg-codgray-950 text-codgray-950 dark:text-pampas-200 rounded-lg shadow-lg p-10 md:px-20 sm:w-1/2 justify-center sm:h-1/2 cursor-text z-10"
      in:blur={{ duration: animDuration, easing: circOut }}
    >
      <h2 class="text-3xl xl:text-6xl font-bold mb-2">
        {selectedProject.name}
      </h2>
      <p class="text-xl xl:text-3xl mb-2 text-center">
        {selectedProject.description}
      </p>
      <p class="text-3xl xl:text-5xl mb-4">
        <strong>Tech Stack:</strong>
        {selectedProject.techStack}
      </p>
      <a
        href={selectedProject.link}
        on:click={(e) => {}}
        class="text-center text-white rounded-lg pt-2 px-4 text-2xl xl:text-6xl xl:px-8 hover:text-codgray-950 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 hover:from-orange-600 hover:via-pink-600 hover:to-blue-600"
      >
        {selectedProject.shortname}
        <span class="material-symbols-sharp text-xl xl:text-4xl"
          >travel_explore</span
        >
      </a>
    </div>
  </div>
{/if}

<!--  {#if selectedProject && selectedProject.id === 4}
    <div
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <button
        class="absolute top-0 right-0 p-4 w-full h-full bg-black bg-opacity-50 z-0"
        on:click={closeModal}
      >
      </button>
      <div
        class="flex flex-col items-center bg-pampas-200 gap-2 sm:gap-4 xl:gap-10 dark:bg-codgray-950 text-codgray-950 dark:text-pampas-200 rounded-lg shadow-lg p-10 md:px-20 sm:w-1/2 justify-center sm:h-1/2 cursor-text z-10"
        in:blur={{ duration: animDuration, easing: circOut }}
      >
        <img src="assets/selfRef.gif" alt="Project" class="grow" />
        <a
          href={selectedProject.link}
          on:click={(e) => {}}
          class="text-center text-white rounded-lg pt-2 px-4 text-2xl xl:text-6xl xl:px-8 hover:text-codgray-950 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 hover:from-orange-600 hover:via-pink-600 hover:to-blue-600"
        >
          {selectedProject.shortname}
          <span class="material-symbols-sharp text-xl xl:text-4xl"
            >travel_explore</span
          >
        </a>
      </div>
    </div>
  {/if} -->
