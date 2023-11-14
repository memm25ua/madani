<script lang="ts">
  import axios from "axios"; // Ensure you have axios installed
  import HeroImg from "$lib/components/HeroImg.svelte";
  import SocialIcons from "$lib/components/SocialIcons.svelte";
  import { t } from "svelte-i18n";

  let name = "";
  let email = "";
  let message = "";
  let errors: { [key: string]: string } = {};
  let loading = false;
  let showSuccess = false;
  let showError = false;

  const handleSubmit = async (event: Event) => {
    if (loading) return;
    loading = true;
    window.fbq("track", "Contact"); // Facebook Pixel
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
        showSuccessMessage();
      } catch (error) {
        console.error(error);
        showErrorMessage();
      }

      loading = false;
    }
  };

  const showSuccessMessage = () => {
    showSuccess = true;
  };

  const showErrorMessage = () => {
    showError = true;
    setTimeout(() => {
      showError = false;
    }, 6000);
  };
</script>

<section class="w-full flex items-center justify-center mt-3 sm:mt-0">
  <HeroImg
    imgSrc="assets/heroContact.webp"
    title={$t("contact.title")}
    textOnRight={false}
  />
</section>

<div class="flex flex-col w-full items-center justify-center gap-4 pt-4">
  <SocialIcons />

  <section class="w-full xl:w-1/2 flex items-center justify-center">
    <form
      on:submit={handleSubmit}
      class="w-full grow relative bg-pampas-100 dark:bg-codgray-900 p-4 rounded-xl shadow-md transition-colors"
    >
      {#if showSuccess}
        <div
          class=" absolute top-0 left-0 z-20 w-full h-full bg-transparent text-2xl flex flex-col items-center justify-center"
        >
          <span class="material-symbols-sharp text-green-700 text-9xl"
            >check_circle</span
          >
          <p class="px-8 py-3 whitespace-pre-line text-center">
            {$t("contact.success")}
          </p>
        </div>
      {:else if showError}
        <div
          class=" absolute top-0 left-0 z-20 w-full h-full bg-transparent text-2xl flex flex-col items-center justify-center"
        >
          <span class="material-symbols-sharp z-20 text-red-700 text-9xl"
            >error</span
          >
          <p class="px-10 py-3 whitespace-pre-line text-center">
            {$t("contact.error")}
          </p>
        </div>
      {/if}
      <div class="{showSuccess || showError ? 'blur-md' : ''} flex flex-col">
        <div class="mb-4">
          <label
            for="name"
            class="block text-2xl font-light text-codgray-700 dark:text-pampas-200"
            >{$t("contact.name")}:</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="bg-transparent h-8 mb-1 w-full pt-2 border-b border-b-codgray-700 dark:border-b-pampas-200 focus:outline-none dark:focus:outline-none focus:border-b-perano-700 dark:focus:border-b-perano-700 focus:border-2 dark:focus:border-2 dark:focus:border-l-0 dark:focus:border-r-0 dark:focus:border-t-0"
            placeholder={$t("contact.yourName")}
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
            >{$t("contact.email")}:</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="bg-transparent h-8 mb-1 w-full pt-2 border-b border-b-codgray-700 dark:border-b-pampas-200 focus:outline-none dark:focus:outline-none focus:border-b-perano-700 dark:focus:border-b-perano-700 focus:border-2 dark:focus:border-2 dark:focus:border-l-0 dark:focus:border-r-0 dark:focus:border-t-0"
            placeholder={$t("contact.yourEmail")}
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
            >{$t("contact.message")}:</label
          >
          <textarea
            id="message"
            name="message"
            class="bg-transparent mb-1 w-full pt-2 border-b border-b-codgray-700 dark:border-b-pampas-200 focus:outline-none dark:focus:outline-none focus:border-b-perano-700 dark:focus:border-b-perano-700 focus:border-2 dark:focus:border-2 dark:focus:border-l-0 dark:focus:border-r-0 dark:focus:border-t-0"
            rows="4"
            placeholder={$t("contact.yourMessage")}
            bind:value={message}
          ></textarea>
          {#if errors.message}
            <div class="text-red-600 text-sm">{errors.message}</div>
          {/if}
        </div>

        <button
          type="submit"
          class="flex items-center justify-center relative border-perano-700 dark:border-perano-300 border-2 self-center w-20 hover:w-16 transition-all rounded-lg hover:bg-perano-700 text-perano-700 dark:hover:bg-perano-300 dark:text-perano-300 before:absolute before:bottom-2 before:h-0.5 hover:before:bottom-3 hover:text-pampas-100 hover:before:bg-pampas-100 before:transition-all dark:before:bg-perano-300 before:bg-perano-700 before:w-8 before:text-center p-2 hover:bg-perano-dark {loading
            ? 'cursor-not-allowed before:hidden'
            : ''}"
        >
          {#if loading}
            <span class="material-symbols-sharp animate-spin text-2xl"
              >autorenew</span
            >
          {:else}
            {$t("contact.send")}
          {/if}
        </button>
      </div>
    </form>
  </section>
</div>
