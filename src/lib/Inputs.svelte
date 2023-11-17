<script>
  import Input from "./Input.svelte";
  import { Tooltip } from "$lib/icons";
  import SvelteTooltip from "svelte-tooltip";
  export let inputs;
</script>

{#each inputs as input}
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <div>{input.title}</div>
      {#if input.tooltip}
        <SvelteTooltip tip={input.tooltip} right color="#7393B3" bottom>
          <Tooltip />
        </SvelteTooltip>
      {/if}
    </div>

      <Input {input} />

  </div>
{/each}
