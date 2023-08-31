<script>
  // Your JavaScript logic here
  let skills = ['Angular.js', 'HTML/CSS', 'Swift/SwiftUI', 'Git Flow', 'Java/SpringBoot', 'PHP/Laravel', 'Python/Tensorflow'];
</script>

<style>
  /* Add any custom styles if needed */
</style>

<main class="min-h-full p-4">
  <section class="p-6">
    <h1 class="text-3xl font-bold mb-4">About Me</h1>
    <p class="text-lg mb-4">
      Enthusiastic Software Developer with a passion for learning and applying new technologies to drive innovative solutions. I specialize in designing and developing user interfaces, particularly in Angular for CRM platforms. I have experience working in cross-functional teams and delivering scalable solutions.
    </p>
  </section>

  <section class="p-6 mt-6">
    <h2 class="text-2xl font-bold mb-4">Skills</h2>
    <ul>
      {#each skills as skill}
        <li class="text-lg mb-2">{skill}</li>
      {/each}
    </ul>
  </section>

  <section class="p-6 mt-6">
    <h2 class="text-2xl font-bold mb-4">Contact</h2>
    <p class="text-lg">
      Email: <a href="mailto:madani.devel@gmail.com" class="text-blue-500">madani.devel@gmail.com</a>
    </p>
  </section>
</main>
