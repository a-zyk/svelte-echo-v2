<script>
  import PolicySelect from "$lib/policySelect.svelte";
  import PolicyInput from "$lib/PolicyInput.svelte";
  import policies from "$lib/policy.js";
  import Description from "$lib/Description.svelte";
  import AnimalInfo from "$lib/AnimalInfo.svelte";
  import { policiesSelect } from "$lib/stores/policiesSelect";

  const matchOrgans = (items, organs) => {
    return items.filter((item) => organs.includes(item.name));
  };
  $: matchedPolicies = matchOrgans(policies, $policiesSelect);
</script>

<div class="flex">
  <div>
    <div class="flex w-50%">
      <PolicySelect {policies} />
    </div>
    {#each matchedPolicies as item}
      <PolicyInput {item} />
    {/each}
  </div>
  <div>
    <Description policies={matchedPolicies} />
    <AnimalInfo />
  </div>
</div>
