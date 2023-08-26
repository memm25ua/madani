<script lang="ts">
  import { onMount } from "svelte";
  import { ThemeEnum } from "../stores/themeStore";
  import theme from "../stores/themeStore";

  const enum Direction {
    FORWARD = 1,
    BACKWARD = -1,
  }

  const enum Size {
    SMALL = 26,
    BIG = 40,
  }

  let dir: number = 0;
  let w: number = 0;
  let lottie: any;

  onMount(() => {
    initVariables($theme);
      initLottie();
  });

  function initVariables(theme: string) {
    if (theme === ThemeEnum.DARK) {
      dir = Direction.FORWARD;
      w = Size.SMALL;
    } else {
      dir = Direction.BACKWARD;
      w = Size.BIG;
    }
  }

  const initLottie = () => {
    lottie = document.getElementById("lottie-theme");
    lottie?.setSpeed(0.35);
    lottie?.setDirection(dir);
    if (dir === Direction.BACKWARD) {
      const lastFrame = lottie?.getLottie().totalFrames;
      lottie?.seek(lastFrame);
    }
  }

  const toggleTheme = () => {
    theme.update((value) => (value === "dark" ? "light" : "dark"));
    playAnimation(dir);
    if (dir === Direction.FORWARD) {
      dir = Direction.BACKWARD;
      w = Size.BIG;
    } else {
      dir = Direction.FORWARD;
      w = Size.SMALL;
    }
  };

  function playAnimation(direction: Direction) {
    changeWidthFilter(direction);
    lottie?.setDirection(direction);
    lottie?.play();
  }

  function changeWidthFilter(direction: Direction) {
    if (direction === Direction.FORWARD) {
      lottie?.animate(
        [
          { width: Size.SMALL + "px", height: Size.SMALL + "px"},
          { width: Size.BIG + "px", height: Size.BIG + "px"},
        ],
        {
          duration: 1000,
          fill: "forwards",
        },
      );
    } else {
      lottie?.animate(
        [
          { width: Size.BIG + "px", height: Size.BIG + "px"},
          { width: Size.SMALL + "px", height: Size.SMALL + "px"},
        ],
        {
          duration: 1000,
          fill: "forwards",
        },
      );
    }
  }
</script>

<div class="h-12 flex items-center flex-grow">
  <button
    on:click={toggleTheme}
    class="color-white text-white w-full h-full flex items-center justify-center animate-fade-in"
    ><lottie-player
      id="lottie-theme"
      src="https://lottie.host/b81108f5-0cf7-4152-951e-1aef5bafd9f9/Nrn4ELrdcy.json"
      background="Transparent"
      speed=".5"
      class="dark:invert"
      style:width="{w}px"
      style:height="{w}px"
      direction={dir}
      mode="normal"
    ></lottie-player>
  </button>
</div>
