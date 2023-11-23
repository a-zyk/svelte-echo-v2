<script>
    import policies from "$lib/policy.js";
    import PolicyInput from "$lib/PolicyInput.svelte";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import { formInputs } from "$lib/stores/formInputs";
  
    const normalValues = writable();
    let isNormalValuesShown = false;
    const markNormalValues = () => {
      isNormalValuesShown = true;
      $normalValues = true;
    };
    setContext("normalValues", normalValues);
  
    let description = "";
  
    const generateDescription = (policy, inputs, group) => {
      if (!inputs) return "";
  
      return policy.generate(inputs, group);
    };
  
    $: {
      description = "";
  
      description = policies
        .map((policy) => {
          if (policy.groups) {
            return policy.groups
              .map((group) => {
                return generateDescription(policy, $formInputs[group.name], group);
              })
              .join("\n");
          } else {
            return generateDescription(policy, $formInputs[policy.name]);
          }
        })
        .join("\n");
    }
  </script>
  
  <div>
    <button
      on:click={markNormalValues}
      class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >{#if isNormalValuesShown}
        Normalios reikšmės rodomos
      {:else}
        Pažymėti normalias reikšmes
      {/if}</button
    >
  
    {description}
  
    {#each policies as item}
      <PolicyInput {item} />
    {/each}
  </div>
  