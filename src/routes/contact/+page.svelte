<script>
  // Your JavaScript logic for form handling can go here
</script>

<style>
  /* Add any custom styles if needed */
</style>

<main class="min-h-full p-4">
  <section class="p-6">
    <h1 class="text-3xl font-bold mb-4">Contact Me</h1>
  </section>

  <section class="p-6 mt-6">
    <form>
      <div class="mb-4">
        <label for="name" class="block text-lg font-bold mb-2">Name:</label>
        <input type="text" id="name" name="name" class="bg-transparent w-full p-2 border rounded" placeholder="Your Name">
      </div>

      <div class="mb-4">
        <label for="email" class="block text-lg font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" class="w-full p-2 border rounded" placeholder="Your Email">
      </div>

      <div class="mb-4">
        <label for="message" class="block text-lg font-bold mb-2">Message:</label>
        <textarea id="message" name="message" class="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
      </div>

      <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Send
      </button>
    </form>
  </section>
</main>
