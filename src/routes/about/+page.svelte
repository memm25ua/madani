<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
  import { t } from "svelte-i18n";
  enum BG {
    Perano = "bg-perano-200 dark:bg-perano-800",
    Yellow = "bg-yellow-300 dark:bg-yellow-800",
    Gray = "bg-codgray-300 dark:bg-codgray-800",
    Red = "bg-red-300 dark:bg-red-800",
    Purple = "bg-purple-300 dark:bg-purple-800",
  }

  let skills = [
    {
      name: "Angular.ts/HTML/CSS",
      level: 90,
      category: "about.skills.front",
      color: BG.Perano,
    },
    {
      name: "Java/SpringBoot",
      level: 75,
      category: "about.skills.back",
      color: BG.Purple,
    },
    {
      name: "Swift/SwiftUI",
      level: 70,
      category: "about.skills.mobile",
      color: BG.Yellow,
    },
    {
      name: "AWS",
      level: 65,
      category: "about.skills.devops",
      color: BG.Red,
    },
    {
      name: "Python",
      level: 60,
      category: "about.skills.other",
      color: BG.Gray,
    },
  ];
  let tOnRight: boolean = Math.random() < 0.5;
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
>
  <section class="container-col">
    <HeroImg
      imgSrc="assets/heroAbout.webp"
      title={$t("about.title")}
      textOnRight={tOnRight}
    />
  </section>

  <section class="container-col">
    <h2 class="self-start text-2xl xl:text-4xl font-title mb-4">
      {$t("about.resume")}
    </h2>
    <p class="text-lg xl:text-xl 2xl:text-2xl pt-2 pl-2 font-light m-0">
      {$t("about.description")}
    </p>
  </section>

  <section class="container-col">
    <h2 class="self-start text-2xl xl:text-4xl font-title mb-4">
      {$t("about.skills.title")}
    </h2>
    <ul class="w-full px-3 pt-1">
      {#each skills as skill}
        <li class="text-lg 2xl:text-xl mb-1 font-normal">
          <div class="flex justify-between">
            <span class="font-black">
              {skill.name}
              <span
                class="rounded-md shadow-inner pt-1 text-sm font-light {skill.color}"
              >
                &nbsp;{$t(skill.category)}&nbsp;
              </span>
            </span>
          </div>
          <progress class="w-full rounded-lg" value={skill.level} max="100"
          ></progress>
        </li>
      {/each}
    </ul>
  </section>
</main>
