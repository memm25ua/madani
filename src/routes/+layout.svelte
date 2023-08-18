<script>
  import "../app.css";
  import TopBar from "../components/TopBar.svelte";
</script>

<div
  class="bg-codgray-950 text-pampas-50 h-screen w-screen flex flex-col font-primary"
>
  <TopBar />
  <slot />
</div>
