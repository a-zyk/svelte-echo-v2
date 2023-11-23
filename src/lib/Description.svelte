<script>
  import { formInputs } from "$lib/stores/formInputs";

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
          return generateDescription(policy, $formInputs[group.name], group);
        })
        .join("\n");
    } else {
      return generateDescription(policy, $formInputs[policy.name]);
    }
  };

  $: {
    $formInputs; // Need to watch for this to change
    description = policies
      .map((policy) => generatePolicyDescription(policy))
      .join("\n");
  }
</script>

{description}
