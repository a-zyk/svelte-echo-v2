<script>
  import Input from "./Input.svelte";

  export let inputs;
</script>

{#each inputs as input}
  <div>{input.title}</div>
  {#if input.tooltip}
    <span>{input.tooltip}</span>
  {/if}
  <Input {input} />
{/each}
