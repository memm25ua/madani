<script lang="ts">
  export let imgSrc: string = "";
  export let title: string = "";
  export let textOnRight: boolean = true;

  let containerClass = textOnRight ? "flex-row-reverse" : "flex-row";
</script>

<div class={`rounded-2xl ${containerClass} flex items-center bg-pampas-100 dark:bg-codgray-900 shadow-sm p-4 gap-4 max-w-xl`}>
  {#if title}
    <div class="flex-shrink-0 whitespace-nowrap">
      <h1 class="text-4xl sm:text-5xl mb-1 font-thin truncate text-underline">{title}</h1>
    </div>
  {/if}
  <div class={`${title ? "flex-grow" : "flex-1 w-full"}`}>
    <img
      class="object-contain max-w-full max-h-full rounded-full bg-pampas-200 shadow-inner dark:bg-codgray-950"
      src={imgSrc}
      alt="Hero"
      style="view-transition-name: heroImg;"
    />
  </div>
</div>
