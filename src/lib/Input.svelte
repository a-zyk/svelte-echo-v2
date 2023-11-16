<script>
  export let input;

  const name = input.name
</script>

{#if input.type == "number"}
  <input min="0" {name} type="number" />
{:else if input.type == "text"}
  <textarea {name} />
{:else if input.type == "radio"}
  {#each input.options as option}
    <label>
      <input {name} type="radio" value={option} />
      {option}
    </label>
  {/each}
{:else}
  <div>unknown type {input.type}</div>
{/if}
