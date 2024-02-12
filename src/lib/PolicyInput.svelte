<script>
  import Inputs from "./Inputs.svelte";
  export let item;
</script>

<div class="flex flex-col card card-compact bg-base-100 shadow-xl m-4">
  <div  class="card-body collapse collapse-arrow">
    <input type="checkbox" class="peer" checked />
    <div class="self-center mb-4 card-title collapse-title">{item.title}</div>
    {#if item.groups}
    <div class="collapse-content">

      {#each item.groups as group}
        <form >
          <div class="flex flex-col gap-4">
            <div class="self-center ">{group.title}</div>
            <Inputs prefix={group.name} inputs={item.inputs} />
          </div>
        </form>
      {/each}
    </div>
    {:else}
      <form class="collapse-content">
        <Inputs inputs={item.inputs} prefix={item.name} />
      </form>
    {/if}
  </div>
</div>

