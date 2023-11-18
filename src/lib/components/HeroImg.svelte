<script lang="ts">
  export let imgSrc: string = "";
  export let title: string = "";
  export let textOnRight: boolean = true;

  let containerClass = textOnRight ? "flex-row-reverse" : "flex-row";
  let imgClass = title ? "max-h-40" : "";
</script>

<div
  class={`rounded-2xl ${containerClass} flex items-center bg-pampas-100 transition-colors dark:bg-codgray-900 shadow-sm p-4 gap-4 max-w-3xl mx-1`}
>
  {#if title}
    <div class="flex-shrink-0 whitespace-nowrap">
      <h1
        class="text-3xl !leading-[1.3] md:text-7xl mb-1 font-secondary truncate text-underline"
      >
        {title}
      </h1>
    </div>
  {/if}
  <div>
    <img
      class={`object-contain w-full max-w-md rounded-full bg-pampas-200 transition-colors shadow-inner dark:bg-codgray-950 ${imgClass} `}
      src={imgSrc}
      alt="Hero"
      style="view-transition-name: heroImg;"
    />
  </div>
</div>
