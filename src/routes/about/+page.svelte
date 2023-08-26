<script>
  // Your JavaScript logic here
  let skills = ['JavaScript', 'Svelte', 'Tailwind CSS'];
</script>

<style>
  /* Add any custom styles if needed */
</style>

<main class=" min-h-screen p-4">
  <section class="  p-6">
    <h1 class="text-3xl font-bold mb-4">About Me</h1>
    <p class="text-lg mb-4">
      Placeholder for your bio.
    </p>
  </section>

  <section class="  p-6 mt-6">
    <h2 class="text-2xl font-bold mb-4">Skills</h2>
    <ul>
      {#each skills as skill}
        <li class="text-lg mb-2">{skill}</li>
      {/each}
    </ul>
  </section>

  <section class="  p-6 mt-6">
    <h2 class="text-2xl font-bold mb-4">Contact</h2>
    <p class="text-lg">
      Email: <a href="mailto:example@example.com" class="text-blue-500">example@example.com</a>
    </p>
  </section>
</main>
