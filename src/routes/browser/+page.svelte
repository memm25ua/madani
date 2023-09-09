<script>
    import { onMount } from "svelte";

    let browser = "";
  
    // This function will be run when the component is initialized
    onMount(() => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.indexOf("Chrome") > -1) {
        browser = "Google Chrome";
      } else if (userAgent.indexOf("Safari") > -1) {
        browser = "Apple Safari";
      } else if (userAgent.indexOf("Firefox") > -1) {
        browser = "Mozilla Firefox";
      } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browser = "Microsoft Internet Explorer";
      } else {
        browser = "Unknown browser";
      }
    });
  </script>
  
  <p>Your browser is: {browser}</p>
  