<script>
  import PolicyInput from "$lib/PolicyInput.svelte";
  import policies from "$lib/policy.js";
  import Description from "$lib/Description.svelte";
  import NormalValueSelect from "$lib/NormalValueSelect.svelte";

  let checkedOrgans = [];

  const matchOrgans = (items, organs) => {
    return items.filter((item) => organs.includes(item.name));
  };

  $: matchedPolicies = matchOrgans(policies, checkedOrgans);
</script>

<NormalValueSelect />

<Description policies={matchedPolicies} />

<div>Pasirinkti tirtus organus:</div>
<div class="flex flex-col gap-2">
  {#each policies as policy}
    <div>
      <input
        type="checkbox"
        id={policy.name}
        value={policy.name}
        bind:group={checkedOrgans}
      />
      <label for={policy.name}>{policy.title}</label>
    </div>
  {/each}

  <button>Kitas</button>
</div>
{#each matchedPolicies as item}
  <PolicyInput {item} />
{/each}
