<script>
  export let input;
  export let prefix;
  import { formInputs } from "./stores/formInputs";
  import normalValuesSelect from "$lib/stores/normalValuesSelect";
  const { name, normalValue } = input;

  let previousValue;

  $formInputs[prefix] = $formInputs[prefix] || {};

  if (normalValue) {
    normalValuesSelect.subscribe((value) => {
      if (value) {
        previousValue = $formInputs[prefix][name];
        $formInputs[prefix][name] = normalValue;
      } else {
        $formInputs[prefix][name] = previousValue;
      }
    });
  }
</script>

<div>
  {#if input.type == "number"}
    <input
      bind:value={$formInputs[prefix][name]}
      class="input input-bordered  mb-4 py-2 h-max rounded-lg text-sm"
      min="0"
      {name}
      type="number"
    />
  {:else if input.type == "text"}
    <textarea
      bind:value={$formInputs[prefix][name]}
      class="textarea textarea-bordered mb-4 py-3 px-4 border-2 rounded-lg text-sm"
      {name}
    />
  {:else if input.type == "radio"}
    <div class="flex gap-2 mb-4">
      {#each input.options as option}


        <label class="flex items-center justify-center gap-2 mb-2">
          <input
            class=" radio radio-sm"
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
