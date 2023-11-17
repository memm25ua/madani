<script>
  import { t } from "svelte-i18n";
  import NavLink from "./NavLink.svelte";
</script>

<div class="md:pt-12 pl-1 md:pl-0 w-full sm:w-auto capitalize">
  <NavLink link="/about" label={$t("topbar.about")} />
  <NavLink link="/projects" label={$t("topbar.projects")}/>
  <NavLink link="/contact" label={$t("topbar.contact")} />
</div>
