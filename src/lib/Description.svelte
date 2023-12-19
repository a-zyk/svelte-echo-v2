<script>
  import { formInputs } from "$lib/stores/formInputs";
  import { animalInfo } from "$lib/stores/animalInfo";
  import CopyDescription from "./copyDescription.svelte";
  export let policies = [];

  let description = "f";

  const generateDescription = (policy, inputs, group, info) => {
    if (!inputs) return "";

    return policy.generate(inputs, group, info);
  };

  const generatePolicyDescription = (policy) => {
    if (policy.groups) {
      return policy.groups
        .map((group) => {
          return generateDescription(
            policy,
            $formInputs[group.name],
            group,
            $animalInfo
          );
        }).join('<br><br>')
    } else {
      return generateDescription(
        policy,
        $formInputs[policy.name],
        null,
        $animalInfo
      );
    }
  };

  $: {
    $formInputs; // Need to watch for this to change
    $animalInfo;
    description = policies
      .map((policy) => generatePolicyDescription(policy))
      .join("<br><br>");
  }
</script>

<div class="card card-body flex flex-col gap-10">
  <div class="card-title">Echoskopijos aprašymas</div>
  <div>
    {@html description}
  </div>
  {#if description.length}
    <CopyDescription {description} />
  {/if}
</div>
