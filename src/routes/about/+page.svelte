<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
  import { t } from "svelte-i18n";
  enum BG {
    Blue = "bg-perano-200 dark:bg-perano-800",
    Yellow = "bg-yellow-300 dark:bg-yellow-800",
    Gray = "bg-codgray-300 dark:bg-codgray-800",
    Red = "bg-red-300 dark:bg-red-800",
    Purple = "bg-purple-300 dark:bg-purple-800",
  }

  interface category {
    name: string;
    color: BG;
  }

  interface skill {
    name: string;
    level: number;
    categories: category[];
  }

  let skills: skill[] = [
    {
      name: "Angular/TS/HTML/CSS",
      level: 95,
      categories: [{ name: "about.skills.front", color: BG.Blue }],
    },
    {
      name: "React/Next.js",
      level: 80,
      categories: [{ name: "about.skills.front", color: BG.Blue }],
    },
    {
      name: "Java/SpringBoot",
      level: 75,
      categories: [{ name: "about.skills.back", color: BG.Purple }],
    },
    {
      name: "Node.js",
      level: 75,
      categories: [{ name: "about.skills.back", color: BG.Purple }],
    },
    {
      name: "AWS",
      level: 65,
      categories: [{ name: "about.skills.cloud", color: BG.Red }],
    },
    {
      name: "Golang - Python - SwiftUI",
      level: 60,
      categories: [
        { name: "about.skills.mobile", color: BG.Yellow },
        { name: "about.skills.back", color: BG.Purple },
        { name: "about.skills.other", color: BG.Gray },
      ],
    },
  ];
  let tOnRight: boolean = Math.random() < 0.5;
</script>

<main
  class="main-section"
>
  <section class="w-full flex items-center justify-center mt-3 sm:mt-0">
    <HeroImg imgSrc="assets/heroAbout.webp" title={$t("about.title")} />
  </section>
  <div class="flex w-full flex-wrap">
    <section class="container-col ">
      <h2
        class="self-start text-2xl xl:text-4xl font-secondary md:mb-4 text-underline"
      >
        {$t("about.resume")}
      </h2>
      <p class="text-lg xl:text-xl 2xl:text-2xl pt-2 pl-2 font-light m-0 whitespace-pre-line">
        {$t("about.description")}
      </p>
    </section>

    <section class="container-col pt-6">
      <h2
        class="self-start text-2xl xl:text-4xl font-secondary mb-4 text-underline"
      >
        {$t("about.skills.title")}
      </h2>
      <ul class="w-full px-2 xl:px-5">
        {#each skills as skill}
          <li class="text-lg 2xl:text-2xl mb-1 font-normal">
            <div class="flex justify-between">
              {skill.name}

              <div class="flex items-center gap-2">
                {#each skill.categories as category}
                  <span
                    class="rounded-md shadow-inner pt-1 text-lg font-light {category.color}"
                  >
                    &nbsp;{$t(category.name)}&nbsp;
                  </span>
                {/each}
              </div>
            </div>
            <progress class="w-full rounded-lg" value={skill.level} max="100"
            ></progress>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</main>
