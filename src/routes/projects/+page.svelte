<script>
  import HeroImg from "$lib/components/HeroImg.svelte";

  let projects = [
    {
      name: "Crmble Trello Powerup",
      description:
        "Front-End Angular Developer at App Square S.L. Specialized in designing and developing user interfaces for a CRM platform.",
      link: "#",
      techStack: "Angular.js, HTML, CSS",
    },
    {
      name: "iOS App with Firebase Backend",
      description:
        "Freelance iOS App developer. Initiated and executed a start-up focused iOS application development project.",
      link: "#",
      techStack: "Swift, SwiftUI",
    },
    {
      name: "Real-time Game",
      description:
        "Personal project focused on real-time game development. Utilized Apache Kafka for synchronization.",
      link: "#",
      techStack: "Python, Apache Kafka",
    },
  ];
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
>
  <section class="container-col p-6">
    <HeroImg imgSrc="assets/heroProjects.png" title="Projects" />
  </section>

  <section class="container-col">
    {#each projects as project}
      <div class="rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-2">{project.name}</h2>
        <p class="text-lg mb-2">
          {project.description}
        </p>
        <p class="text-sm mb-4">
          <strong>Tech Stack:</strong>
          {project.techStack}
        </p>
        <a href={project.link} class="text-blue-500">Learn More</a>
      </div>
    {/each}
  </section>
</main>

<style>
  /* Add any custom styles if needed */
</style>
