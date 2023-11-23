<script>
  import { Tooltip as TooltipIcon } from "$lib/icons";
  import SvelteTooltip from "svelte-tooltip";
  export let tooltip;
  export let prefix;

  let tooltipText = "";

  if (typeof tooltip == "string") {
    tooltipText = tooltip;
  } else if (typeof tooltip == "object") {
    tooltipText = tooltip[prefix];
  }
</script>

<SvelteTooltip tip={tooltipText} right color="#7393B3" bottom>
  <TooltipIcon />
</SvelteTooltip>
