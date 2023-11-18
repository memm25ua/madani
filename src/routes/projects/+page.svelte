<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
  import { t } from "svelte-i18n";
  import { projects } from "./model/model";
  import Project from "./components/Project.svelte";
</script>

<section class="title-section mb-5 lg:mb-10">
  <HeroImg imgSrc="assets/heroProjects.webp" title={$t("projects.title")} />
</section>

<section class="flex max-w-7xl flex-wrap w-full px-4 mb-20">
  {#each projects as project}
    <Project {project} />
  {/each}
</section>
