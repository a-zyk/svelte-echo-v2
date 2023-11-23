<script>
  export let input;
  export let prefix;
  import { formInputs } from "./stores/formInputs";
  import { getContext } from "svelte";
  const { name } = input;
  const normalValues = getContext("normalValues");

  $formInputs[prefix] = $formInputs[prefix] || {};
</script>

<div class="">
  {#if input.type == "number"}
    <input
      bind:value={$formInputs[prefix][name]}
      class="mb-4 py-3 px-4 border-2 border-blue-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
      min="0"
      {name}
      type="number"
    />
  {:else if input.type == "text"}
    <textarea
      bind:value={$formInputs[prefix][name]}
      class=" mb-4 py-3 px-4 border-2 border-blue-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
      {name}
    />
  {:else if input.type == "radio"}
    <div class="flex gap-2 mb-4">
      {#each input.options as option}
        <label>
          <input
            class="mb-4"
            {name}
            bind:group={$formInputs[prefix][name]}
            type="radio"
            checked=""
            value={option}
          />
          {option}
        </label>
      {/each}
    </div>
  {:else}
    <div>unknown type {input.type}</div>
  {/if}
</div>
