<script>
  import "../app.css";
  import TopBar from "../components/topBar.svelte";
</script>

<div
  class="bg-pampas-100 dark:bg-codgray-950 dark:text-pampas-50 text-codgray-800 h-screen w-screen flex flex-col font-primary"
>
  <TopBar />
  <slot />
</div>
