<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
  import Skill from "./components/Skill.svelte";
  import { skills } from "./model/model";
  import { t } from "svelte-i18n";
</script>

<section class="title-section">
  <HeroImg imgSrc="assets/heroAbout.webp" title={$t("about.title")} />
</section>

<div class="flex flex-wrap items-start">
  <section class="content-section">
    <h2
      class="self-start text-2xl xl:text-4xl font-secondary md:mb-4 text-underline"
    >
    {$t("about.resume")} 📝
    </h2>
    <p
      class="text-lg xl:text-xl 2xl:text-2xl pt-2 pl-2 font-light m-0 whitespace-pre-line"
    >
      {$t("about.description")}
    </p>
  </section>

  <section class="content-section">
    <h2
      class="self-start text-2xl xl:text-4xl font-secondary mb-4 text-underline"
    >
      {$t("about.skills.title")} 🛠️
    </h2>
    <ul class="w-full px-2 xl:px-5">
      {#each skills as skill}
        <Skill {skill} />
      {/each}
    </ul>
  </section>
</div>
