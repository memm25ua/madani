<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
</script>

<div class="bg-codgray-950 text-pampas-50 h-screen flex flex-col font-primary">
  <Navbar />
  <slot />
</div>
