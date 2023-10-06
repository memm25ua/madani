<script lang="ts">
  // Define an array of social media platforms with their respective FontAwesome classes and URLs
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/",
      class:
        "hover:bg-perano-700 dark:hover:bg-perano-700 hover:text-pampas-100",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/studiomadani/",
      class:
        " hover:text-pampas-100 hover:bg-gradient-to-br hover:from-orange-600 hover:via-pink-600 hover:to-blue-600",
    },
    {
      name: "Twitter",
      icon: "fa-brands fa-x-twitter",
      url: "https://twitter.com/",
      class:
        "hover:bg-codgray-900 dark:hover:bg-pampas-200 hover:text-pampas-100 dark:hover:text-codgray-950",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/memm25ua",
      class:
        "hover:bg-codgray-900 dark:hover:bg-pampas-200 hover:text-pampas-100 dark:hover:text-codgray-950",
    },
  ];

  function openLink(url: string) {
    window.open(url, "_blank");
  }
</script>

<h1 class="text-4xl hidden pb-2 xl:flex font-secondary text-codgray-700 dark:text-pampas-200">
  My Links
</h1>
<div
  class="flex xl:flex-col items-center xl:space-x-0 xl:space-y-2 space-x-2 bg-pampas-100 dark:bg-codgray-900 w-full rounded-xl p-3 transition-all duration-500"
>
  {#each socialLinks as link}
    <button
      class="grow w-12 h-12 text-3xl xl:w-2/3 bg-pampas-200 dark:bg-codgray-950 rounded-full flex transition-all duration-500 items-center justify-center focus:outline-none {link.class}"
      on:click={() => openLink(link.url)}
      title={link.name}
    >
      <i class={link.icon}></i>
    </button>
  {/each}
</div>
