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

<div class="flex w-full justify-center">
  <div class="flex md:w-[600px] lg:w-[900px]">
    <div class="w-50%">
      <div class="flex">
        <PolicySelect {policies} />
      </div>
      {#each matchedPolicies as item}
        <PolicyInput {item} />
      {/each}
    </div>
    <div class="w-50%">
      <Description policies={matchedPolicies} />
      <AnimalInfo />
    </div>
  </div>
</div>
