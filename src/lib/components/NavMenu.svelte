<!--
    This is the navigation menu component. It is used to display the navigation menu. It is used in the App.svelte component.
-->
<script>
  import { t } from "svelte-i18n";

</script>


<div class="md:pt-12 xl:pr-20 w-full sm:w-auto capitalize">
  <div class="nav-link">
    <a href="/about"> {$t('topbar.about')} </a>
  </div>
  <div class="nav-link pb-2 md:pb-4">
    <a href="/projects"> {$t('topbar.projects')} </a>
  </div>
  <div class="nav-link">
    <a href="/contact"> {$t('topbar.contact')} </a>
  </div>
</div>
