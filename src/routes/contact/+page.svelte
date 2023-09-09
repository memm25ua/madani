<script>
  import HeroImg from "$lib/components/HeroImg.svelte";
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center bg-pampas dark:bg-codgray"
>
  <section class="container-col">
    <HeroImg
      imgSrc="assets/heroContact.png"
      title="Contact Me"
      textOnRight={false}
    />
  </section>
  <section class="container-col">
    <form
      class="w-full max-w-lg bg-pampas-100 dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col"
    >
      <div class="mb-4">
        <label
          for="name"
          class="block text-2xl font-light text-codgray-700 dark:text-pampas"
          >Name:</label
        >
        <input
          type="text"
          id="name"
          name="name"
          class="bg-transparent w-full p-2 border rounded border-codgray dark:border-pampas"
          placeholder="Your Name"
        />
      </div>

      <div class="mb-4">
        <label
          for="email"
          class="block text-2xl font-light text-codgray-700 dark:text-pampas"
          >Email:</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="bg-transparent w-full p-2 border rounded border-codgray dark:border-pampas"
          placeholder="Your Email"
        />
      </div>

      <div class="mb-4">
        <label
          for="message"
          class="block text-2xl font-light text-codgray-700 dark:text-pampas"
          >Message:</label
        >
        <textarea
          id="message"
          name="message"
          class="bg-transparent w-full p-2 border rounded border-codgray dark:border-pampas"
          rows="4"
          placeholder="Your Message"
        ></textarea>
      </div>

      <button
        type="submit"
        class="relative border-perano-700 border-2 self-center w-20 hover:w-16 transition-all rounded-lg hover:bg-perano-700 text-perano-700 before:absolute before:bottom-2 before:h-0.5 hover:before:bottom-3 hover:text-pampas-100 hover:before:bg-pampas-100 before:transition-all  before:bg-perano-700 before:w-8 p-2 hover:bg-perano-dark"
      >
        Send
      </button>
    </form>
  </section>
</main>
