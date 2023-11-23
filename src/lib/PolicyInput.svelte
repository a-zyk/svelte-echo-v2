<script>
  import Inputs from "./Inputs.svelte";
  export let item;
</script>

<div class="flex flex-col">
  <div class="self-center mb-4">{item.title}</div>
  {#if item.groups}
    {#each item.groups as group}
      <form>
        <div class="flex flex-col gap-4">
          <div class="self-center">{group.title}</div>
          <Inputs prefix={group.name} inputs={item.inputs} />
        </div>
      </form>
    {/each}
  {:else}
    <form>
      <Inputs inputs={item.inputs} prefix={item.name} />
    </form>
  {/if}
</div>
