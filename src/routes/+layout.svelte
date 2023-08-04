<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
</script>

<div class="bg-codgray-950 text-pampas-100 h-screen">
  <Navbar />
  <slot />
</div>
