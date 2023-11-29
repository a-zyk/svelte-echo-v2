<script>
  import { formInputs } from "$lib/stores/formInputs";
  import { animalInfo } from "$lib/stores/animalInfo";

  export let policies = [];

  let description = "";

  const generateDescription = (policy, inputs, group) => {
    if (!inputs) return "";

    return policy.generate(inputs, group);
  };

  const generatePolicyDescription = (policy) => {
    if (policy.groups) {
      return policy.groups
        .map((group) => {
          return generateDescription(policy, $formInputs[group.name], group, $animalInfo);
        })
        .join("\n");
    } else {
      return generateDescription(policy, $formInputs[policy.name], $animalInfo);
    }
  };

  $: {
    $formInputs; // Need to watch for this to change
    $animalInfo;
    description = policies
      .map((policy) => generatePolicyDescription(policy))
      .join("\n");
  }
</script>

{description}
