<script>
  import "../app.css";
  import TopBar from "../components/topBar.svelte";
</script>

<div
  class="bg-pampas-200 dark:bg-codgray-950 dark:text-pampas-200 text-codgray-800 min-h-screen w-screen flex flex-col font-primary"
>
  <TopBar />
  <slot />
</div>
