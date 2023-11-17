<script lang="ts">
  import { t } from "svelte-i18n";
  import type { Skill } from "../model/model";

  export let skill: Skill;
</script>

<li class="text-lg 2xl:text-2xl mb-1 font-normal">
  <div class="flex justify-between">
    {skill.name}

    <div class="flex items-center gap-2">
      {#each skill.categories as category}
        <span
          class="rounded-md shadow-inner text-sm leading-4 pt-1 font-light {category.color}"
        >
          &nbsp;{$t(category.name)}&nbsp;
        </span>
      {/each}
    </div>
  </div>
  <progress class="w-full rounded-lg" value={skill.level} max="100"></progress>
</li>
