<script>
    // Your JavaScript logic here
    let projects = [
      { name: 'Project 1', description: 'Description for Project 1', link: '#'},
      { name: 'Project 2', description: 'Description for Project 2', link: '#'},
      { name: 'Project 3', description: 'Description for Project 3', link: '#'}
    ];
  </script>
  
  <style>
    /* Add any custom styles if needed */
  </style>
  
  <main class=" min-h-fullª p-4">
    <section class="rounded-lg shadow-lg p-6">
      <h1 class="text-3xl font-bold mb-4">My Projects</h1>
    </section>
  
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {#each projects as project}
        <div class="rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-bold mb-4">{project.name}</h2>
          <p class="text-lg mb-4">
            {project.description}
          </p>
          <a href={project.link} class="text-blue-500">Learn More</a>
        </div>
      {/each}
    </section>
  </main>
  