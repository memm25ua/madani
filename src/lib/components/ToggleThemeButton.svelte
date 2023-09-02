<script lang="ts">
  import { onMount } from "svelte";
  import { ThemeEnum as Theme } from "../stores/themeStore";
  import theme from "../stores/themeStore";

  let lottie: any;
  let lottieInited = false;

  onMount(() => {
    theme.subscribe(() => {
      if (!lottieInited) {
        initLottie();
        lottieInited = true;
      }
      playLottie();
    });
  });

  const initLottie = () => {
    const dir = $theme === Theme.DARK ? 1 : -1;
    lottie = document.getElementById("lottie-theme");
    lottie?.setDirection(dir);
    if (dir === -1) {
      const lastFrame = lottie?.getLottie().totalFrames;
      lottie?.seek(lastFrame);
    }
  };

  const toggleTheme = () => {
    theme.update((value) => (value === Theme.DARK ? Theme.LIGHT : Theme.DARK));
    //playLottie();
  };

  function playLottie() {
    lottie?.setDirection($theme === Theme.DARK ? -1 : 1);
    lottie?.play();
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
      class="dark:invert mb-2 {$theme === Theme.DARK
        ? 'small-lottie'
        : 'big-lottie'}"
      direction={$theme === Theme.DARK ? -1 : 1}
      mode="normal"
    ></lottie-player>
  </button>
</div>

<style>
  .big-lottie {
    width: 40px;
    height: 40px;
    margin-right: 0px;
    transition: all 1s ease-in-out;
  }
  .small-lottie {
    width: 26px;
    height: 26px;
    margin-right: 8px;
    transition: all 1s ease-in-out;
  }
</style>
