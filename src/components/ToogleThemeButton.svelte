<script lang="ts">
  import theme from "../stores/themeStore";

  let dir: number = -1;
  let w: number = 10;

  const toggleTheme = () => {
    //theme.update((value) => (value === "dark" ? "light" : "dark"));
    dir = dir === 1 ? -1 : 1;
    softlyChangeWidth();
    playAnimation();
  };

  function playAnimation() {
    const lottie = document.querySelector(".lottie-anim") as any;
    lottie?.setDirection(dir);
    lottie?.play();
  }

  function softlyChangeWidth() {
    if (w === 10) {
      const interval = setInterval(() => {
        w++;
        if (w === 14) {
          clearInterval(interval);
        }
      }, 50);
    } else {
      const interval = setInterval(() => {
        w--;
        if (w === 10) {
          clearInterval(interval);
        }
      }, 50);
    }
  }
</script>

<div class="block relative h-12 w-12 items-center">
  <button
    on:click={toggleTheme}
    class="color-white text-white w-{w} absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    ><lottie-player
      src="https://lottie.host/b81108f5-0cf7-4152-951e-1aef5bafd9f9/Nrn4ELrdcy.json"
      background="Transparent"
      speed=".5"
      class="lottie-anim"
      direction={dir}
      mode="normal"
    ></lottie-player>
  </button>
</div>

<style>
  .lottie-anim {
    filter: invert(1);
  }
</style>
