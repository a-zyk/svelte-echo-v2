<script>
  import Input from "./Input.svelte";
  import Tooltip from "./Tooltip.svelte"
  export let prefix;

  export let inputs;
</script>

{#each inputs as input}
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <div>{input.title}</div>
      {#if input.tooltip}
     <Tooltip {prefix} tooltip={input.tooltip}/>
      {/if}
    </div>

    <Input {prefix} {input} />
  </div>
{/each}
