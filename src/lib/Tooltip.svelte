<script>
  import { Tooltip as TooltipIcon } from "$lib/icons";
  // import { Tooltip } from "@svelte-plugins/tooltips";
  export let tooltip;
  export let prefix;

  let tooltipText = "";

  if (typeof tooltip == "string") {
    tooltipText = tooltip;
  } else if (typeof tooltip == "object") {
    tooltipText = tooltip[prefix];
  }
</script>

<div class="tooltip tooltip-right font-medium" data-tip={tooltipText}>
  <TooltipIcon />
</div>

<style>
  .tooltip::before {
    padding: 10px;
  }
</style>