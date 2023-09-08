<script lang="ts">
  import HeroImg from "$lib/components/HeroImg.svelte";
  enum BG {
    Perano = "bg-perano-200 dark:bg-perano-800",
    Green = "bg-green-300 dark:bg-green-800",
    Yellow = "bg-yellow-300 dark:bg-yellow-800",
    Red = "bg-red-300 dark:bg-red-800",
    Purple = "bg-purple-300 dark:bg-purple-800",
  }

  let skills = [
    {
      name: "Angular.ts/HTML/CSS",
      level: 95,
      category: "Front-end",
      color: BG.Perano,
    },
    {
      name: "Swift/SwiftUI",
      level: 75,
      category: "Mobile",
      color: BG.Yellow,
    },
    { name: "Git Flow", level: 75, category: "DevOps", color: BG.Red },
    {
      name: "AWS",
      level: 60,
      category: "DevOps",
      color: BG.Red,
    },
    {
      name: "Node.js/Express",
      level: 60,
      category: "Back-end",
      color: BG.Purple
    },
    {
      name: "Java/SpringBoot",
      level: 75,
      category: "Back-end",
      color: BG.Purple,
    },
    {
      name: "Python/Tensorflow",
      level: 50,
      category: "MLearning",
      color: BG.Yellow,
    },
  ];
  let tOnRight: boolean = Math.random() < 0.5;
</script>

<main
  class="min-h-full w-full flex flex-wrap font-primary flex-grow items-center justify-center"
>
  <section class="container-col">
    <HeroImg
      imgSrc="assets/heroAbout.png"
      title="ABOUT ME"
      textOnRight={tOnRight}
    />
  </section>

  <section class="container-col">
    <h2 class="self-start text-2xl font-title mb-4">ResUme</h2>
    <p class="text-lg pt-2 pl-2 font-light m-0">
      Enthusiastic Software Developer with a passion for learning and applying
      new technologies to drive innovative solutions. I specialize in designing
      and developing user interfaces, particularly in Angular for CRM platforms.
      I have experience working in cross-functional teams and delivering
      scalable solutions.
    </p>
  </section>

  <section class="container-col">
    <h2 class="self-start text-2xl font-title mb-4">Skills</h2>
    <ul class="w-full px-3 pt-1">
      {#each skills as skill}
        <li class="text-lg mb-1 font-normal">
          <div class="flex justify-between">
            <span class="font-black">
              {skill.name}
              <span class="rounded-md shadow-inner pt-1 text-sm font-light {skill.color}">
                &nbsp;{skill.category}&nbsp;
              </span>
            </span>
            <span class="font-thin text-sm flex items-end">{skill.level}%</span>
          </div>
          <progress class="w-full rounded-lg" value={skill.level} max="100"></progress>
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  progress::-webkit-progress-bar {
    background-color: #ece7e1;
    border-radius: 20px;
    height: 8px;
  }
  progress::-webkit-progress-value {
    background-color: #29447f;
    border-radius: 20px; 
  }
</style>
