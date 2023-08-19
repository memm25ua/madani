<script lang="ts">
  import theme from "../stores/themeStore";

  //let dir: number = $theme === "dark" ? 1 : -1;
  let dir: number = -1;
  let w: number = 26;

  const toggleTheme = () => {
    theme.update((value) => (value === "dark" ? "light" : "dark"));
    dir = dir === 1 ? -1 : 1;
    playAnimation();
  };

  function playAnimation() {
    const lottie = document.querySelector(".lottie-anim") as any;
    changeWidthFilter(lottie);
    lottie?.setDirection(dir);
    lottie?.play();
  }

  function changeWidthFilter(lottie: Element) {
    if (w === 26) {
      lottie?.animate(
        [
          { width: "26px", filter: "invert(1)" },
          { width: "40px", filter: "invert(0)" },
        ],
        {
          duration: 1000,
          fill: "forwards",
        },
      );
      w = 40;
    } else {
      lottie?.animate([{ width: "40px", filter: "invert(0)" }, { width: "26px", filter:"invert(1)" }], {
        duration: 1000,
        fill: "forwards",
      });
      w = 26;
    }
  }
</script>

<div class="h-12 flex items-center flex-grow">
  <button
    on:click={toggleTheme}
    class="color-white text-white w-full h-full flex items-center justify-center"
    ><lottie-player
      src="https://lottie.host/b81108f5-0cf7-4152-951e-1aef5bafd9f9/Nrn4ELrdcy.json"
      background="Transparent"
      speed=".5"
      class="lottie-anim w-[26px]"
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
