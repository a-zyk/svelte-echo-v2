<script>
  import { Tooltip as TooltipIcon } from "$lib/icons";
  import { Tooltip } from "@svelte-plugins/tooltips";
  export let tooltip;
  export let prefix;

  let tooltipText = "";

  if (typeof tooltip == "string") {
    tooltipText = tooltip;
  } else if (typeof tooltip == "object") {
    tooltipText = tooltip[prefix];
  }
</script>



  <Tooltip content={tooltipText} position="right" >
    <TooltipIcon />
  </Tooltip>

