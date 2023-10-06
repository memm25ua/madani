<script lang="ts">
  // Define an array of social media platforms with their respective FontAwesome classes and URLs
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/",
      class:
        "hover:bg-perano-700 hover:text-pampas-100 transition-all duration-500",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/studiomadani/",
      class:
        " hover:text-pampas-100 hover:bg-gradient-to-br hover:from-orange-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-200",
    },
    {
      name: "Twitter",
      icon: "fa-brands fa-x-twitter",
      url: "https://twitter.com/",
      class:
        "hover:bg-codgray-900 hover:text-pampas-100 transition-all duration-500",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "httos",
      class:
        "hover:bg-codgray-900 hover:text-pampas-100 transition-all duration-500",
    }
  ];

  function openLink(url: string) {
    window.open(url, "_blank");
  }
</script>

<div class="flex space-x-2 bg-pampas-100 w-full rounded-xl p-3">
  {#each socialLinks as link}
    <button
      class="grow w-12 h-12 text-3xl bg-pampas-200 rounded-full flex items-center justify-center focus:outline-none {link.class}"
      on:click={() => openLink(link.url)}
      title={link.name}
    >
      <i class={link.icon}></i>
    </button>
  {/each}
</div>
