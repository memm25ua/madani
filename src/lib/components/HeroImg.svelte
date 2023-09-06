<script lang="ts">
  export let imgSrc: string = "";
  export let title: string = "";
  export let textOnRight: boolean = true;

  let containerClass = textOnRight ? "flex-row-reverse" : "flex-row";
</script>

<div class={`py-4 rounded-lg ${containerClass} flex items-center gap-4`}>
  {#if title}
    <div class="flex-shrink-0 whitespace-nowrap">
      <h1 class="text-4xl sm:text-5xl mb-1 truncate">{title}</h1>
    </div>
  {/if}
  <div class={`${title ? "flex-grow" : "flex-1 w-full"}`}>
    <img
      class="object-contain max-w-full max-h-full rounded-full bg-pampas-300"
      src={imgSrc}
      alt="Hero"
      style="view-transition-name: heroImg;"
    />
  </div>
</div>

<style>
  /* Add your styles here */
</style>
