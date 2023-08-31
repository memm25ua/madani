<script>
  let projects = [
    {
      name: 'Crmble Trello Powerup',
      description: 'Front-End Angular Developer at App Square S.L. Specialized in designing and developing user interfaces for a CRM platform.',
      link: '#',
      techStack: 'Angular.js, HTML, CSS'
    },
    {
      name: 'iOS App with Firebase Backend',
      description: 'Freelance iOS App developer. Initiated and executed a start-up focused iOS application development project.',
      link: '#',
      techStack: 'Swift, SwiftUI'
    },
    {
      name: 'Real-time Game',
      description: 'Personal project focused on real-time game development. Utilized Apache Kafka for synchronization.',
      link: '#',
      techStack: 'Python, Apache Kafka'
    }
  ];
</script>

<style>
  /* Add any custom styles if needed */
</style>

<main class="min-h-full p-4">
  <section class="rounded-lg shadow-lg p-6">
    <h1 class="text-3xl font-bold mb-4">My Projects</h1>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {#each projects as project}
      <div class="rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-2">{project.name}</h2>
        <p class="text-lg mb-2">
          {project.description}
        </p>
        <p class="text-sm mb-4">
          <strong>Tech Stack:</strong> {project.techStack}
        </p>
        <a href={project.link} class="text-blue-500">Learn More</a>
      </div>
    {/each}
  </section>
</main>
