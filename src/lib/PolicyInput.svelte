<script>
  import Input from "./Input.svelte";
  import Inputs from "./Inputs.svelte";
  export let item;

  let description = "";

  const changed = () => {
    const data = new FormData(form);
    description = item.generate(Object.fromEntries(data));
    console.log(description);
  };

  const groupChanged = () => {
    description = "";
    item.groups.forEach((group) => {
      const data = new FormData(groupForms[group.name]);
      description += item.generate(Object.fromEntries(data), group);
    });
  };

  let form;
  let groupForms = {};
</script>

{description}

<div class="flex flex-col">
  <div class="self-center mb-4">{item.title}</div>
  {#if item.groups}
    {#each item.groups as group}
      <form
        bind:this={groupForms[group.name]}
        on:change={groupChanged}
        on:keyup={groupChanged}
      >
        <div class="flex flex-col gap-4">
          <div class="self-center">{group.title}</div>
          <Inputs inputs={item.inputs} />
        </div>
      </form>
    {/each}
  {:else}
    <form bind:this={form} on:change={changed} on:keyup={changed}>
      <Inputs inputs={item.inputs} />
    </form>
  {/if}
  
</div>
