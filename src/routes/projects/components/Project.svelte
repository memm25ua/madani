<script lang="ts">
  import type { Project } from "../model/model";
  import { blur } from "svelte/transition";
  import { t } from "svelte-i18n";
  import { circOut } from "svelte/easing";

  export let project: Project;

  const animDuration = 400;

  let selectedProject: Project | null = null;

  function openModal(project: Project) {
    selectedProject = project;
  }

  function closeModal() {
    selectedProject = null;
  }
</script>

<div
  role="status"
  class="w-full md:w lg:w-2/5 hover:grow grayscale relative h-64 2xl:h-96 hover:scale-[1.03] hover:grayscale-0 transition-all duration-300
          {project.grow
    ? 'grow'
    : ''} rounded-2xl lg:ml-5 bg-pampas-100 mb-6 dark:bg-codgray-900"
>
  <button
    on:click={() => {
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

{#if selectedProject}
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10"
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
        {$t(selectedProject.title)}
      </h2>
      <p class="text-xl xl:text-3xl mb-2 text-center">
        {$t(selectedProject.description)}
      </p>
      <p class="text-3xl xl:text-5xl mb-4">
        <strong>Tech Stack:</strong>
        {selectedProject.techStack}
      </p>
      <a
        href={selectedProject.url}
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
