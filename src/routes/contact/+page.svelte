<script lang="ts">
  import axios from "axios"; // Ensure you have axios installed
  import HeroImg from "$lib/components/HeroImg.svelte";
  import SocialIcons from "$lib/components/SocialIcons.svelte";
  let name = "";
  let email = "";
  let message = "";
  let errors: { [key: string]: string } = {};

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    errors = {}; // Reset errors

    // Validation logic
    if (!name) errors.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email))
      errors.email = "Valid email is required";
    if (!message) errors.message = "Message is required";

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post(
          "https://esyq98abo4.execute-api.us-east-1.amazonaws.com/send-email",
          {
            name,
            email,
            message,
          },
        );
        // Handle success (e.g., show success message)
        alert("Message sent successfully!");
      } catch (error) {
        console.error(error);
        // Handle error (e.g., show error message)
        alert("An error occurred while sending the message.");
      }
    }
  };
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center bg-pampas dark:bg-codgray"
>
  <section class="container-col">
    <HeroImg
      imgSrc="assets/heroContact.webp"
      title="Contact Me"
      textOnRight={false}
    />
  </section>
  <section class="container-col xl:grow-0">
    <SocialIcons />
  </section>
  <section class="container-col">
    <form
      on:submit={handleSubmit}
      class="w-full max-w-lg bg-pampas-100 dark:bg-codgray-900 p-4 rounded-xl shadow-md flex flex-col transition-colors"
    >
      <div class="mb-4">
        <label
          for="name"
          class="block text-2xl font-light text-codgray-700 dark:text-pampas-200"
          >Name:</label
        >
        <input
          type="text"
          id="name"
          name="name"
          class="bg-transparent h-8 mb-1 w-full pt-2 border-b border-b-codgray-700 dark:border-b-pampas-200 focus:outline-none dark:focus:outline-none focus:border-b-perano-700 dark:focus:border-b-perano-700 focus:border-2 dark:focus:border-2 dark:focus:border-l-0 dark:focus:border-r-0 dark:focus:border-t-0"
          placeholder="Your Name"
          bind:value={name}
        />

        {#if errors.name}
          <div class="text-red-600 text-sm">{errors.name}</div>
        {/if}
      </div>

      <div class="mb-4">
        <label
          for="email"
          class="block text-2xl font-light text-codgray-700 dark:text-pampas-200"
          >Email:</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="bg-transparent h-8 mb-1 w-full pt-2 border-b border-b-codgray-700 dark:border-b-pampas-200 focus:outline-none dark:focus:outline-none focus:border-b-perano-700 dark:focus:border-b-perano-700 focus:border-2 dark:focus:border-2 dark:focus:border-l-0 dark:focus:border-r-0 dark:focus:border-t-0"
          placeholder="Your Email"
          bind:value={email}
        />
        {#if errors.email}
          <div class="text-red-600 text-sm">{errors.email}</div>
        {/if}
      </div>

      <div class="mb-4">
        <label
          for="message"
          class="block text-2xl font-light text-codgray-700 dark:text-pampas-200"
          >Message:</label
        >
        <textarea
          id="message"
          name="message"
          class="bg-transparent mb-1 w-full pt-2 border-b border-b-codgray-700 dark:border-b-pampas-200 focus:outline-none dark:focus:outline-none focus:border-b-perano-700 dark:focus:border-b-perano-700 focus:border-2 dark:focus:border-2 dark:focus:border-l-0 dark:focus:border-r-0 dark:focus:border-t-0"
          rows="4"
          placeholder="Your Message"
          bind:value={message}
        ></textarea>
        {#if errors.message}
          <div class="text-red-600 text-sm">{errors.message}</div>
        {/if}
      </div>

      <button
        type="submit"
        class=" relative border-perano-700 dark:border-perano-300 border-2 self-center w-20 hover:w-16 transition-all rounded-lg hover:bg-perano-700 text-perano-700 dark:hover:bg-perano-300 dark:text-perano-300 before:absolute before:bottom-2 before:h-0.5 hover:before:bottom-3 hover:text-pampas-100 hover:before:bg-pampas-100 before:transition-all dark:before:bg-perano-300 before:bg-perano-700 before:w-8 p-2 hover:bg-perano-dark"
      >
        Send
      </button>
    </form>
  </section>
</main>
