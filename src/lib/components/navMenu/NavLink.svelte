<script lang="ts">
  export let link = "";
  export let label = "";
  import { setHover } from "$lib/stores/circleStore";
</script>

<div
  class="nav-link circle-link"
  role="button"
  tabindex="0"
  on:mouseenter={() => setHover(true)}
  on:mouseleave={() => setHover(false)}
>
  <a href={link} on:click={() => setHover(false)}> {label} </a>
</div>
