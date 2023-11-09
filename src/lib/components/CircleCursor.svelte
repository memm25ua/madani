<script lang="ts">
  import { circleState } from "$lib/stores/circleStore";
  import { onMount, onDestroy } from "svelte";

  let x = 0;
  let y = 0;
  let show = false;
  let moving = false;
  let touchable = false;

  $: circleStyles = `left: ${x - 20}px; top: ${y - 20}px;`;
  $: circleClass = $circleState.hover ? "hovered-circle" : "";

  function handleMouseMove(event: MouseEvent) {
    if (moving) return;
    moving = true;
    setTimeout(() => {
      x = event.clientX;
      y = event.clientY;
      if (!touchable) {
        show = true;
      }
      moving = false;
    }, 20);
  }

  function handleTouchStart() {
    touchable = true;
    window.removeEventListener("mousemove", handleMouseMove);
  }

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  });
</script>

{#if show}
  <div class="circle {circleClass}" style={circleStyles}></div>
{/if}

<style>
  .circle {
    animation: fade 0.5s ease-in-out;
    transition:
      top 0.2s ease-out,
      left 0.2s ease-out,
      transform 0.8s ease-in-out,
      opacity 0.8s ease-out;
    pointer-events: none;
    position: absolute;
    z-index: 50;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #9ccaf2;
  }

  .hovered-circle {
    opacity: 0;
    transform: scale(7);
  }

  .hovering-text {
    background-color: transparent;
  }

</style>
