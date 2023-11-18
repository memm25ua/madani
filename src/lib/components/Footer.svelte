<script>
  import { t } from "svelte-i18n";
</script>

<footer class="w-full bg-codgray-950 text-pampas-100 text-center border-t border-grey p-4 mt-20">
  <h1 class="text-sm  font-secondary py-3">
    {$t("footer.title")}
  </h1>
  <p class="text-xs text-left font-light">{$t("footer.copyright")}</p>
</footer>
