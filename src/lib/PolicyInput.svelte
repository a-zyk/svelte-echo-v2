<script>
  import Inputs from "./Inputs.svelte";
  export let item;

  let description = "";

  const changed = () => {
    const data = new FormData(form);
    description = item.generate(Object.fromEntries(data));
console.log(description)
  };

  const groupChanged = () => {
    description = ""
    item.groups.forEach(group => {
      const data = new FormData(groupForms[group.name]);
      description += item.generate(Object.fromEntries(data), group);
    })
  };
  
  let form;
  let groupForms = {};
</script>

{description}

<div>{item.title}</div>
{#if item.groups}
  {#each item.groups as group}
    <form
      bind:this={groupForms[group.name]}
      on:change={groupChanged}
      on:keyup={groupChanged}
    >
      <div>{group.title}</div>
      <Inputs inputs={item.inputs} />
    </form>
  {/each}
{:else}
  <form bind:this={form} on:change={changed} on:keyup={changed}>
    <Inputs inputs={item.inputs} />
  </form>
{/if}
