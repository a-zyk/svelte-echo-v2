<script>
  import policy from "$lib/policy.js";
  import PolicyInput from "$lib/PolicyInput.svelte";

  let isNormalValuesShown = false;
  const markNormalValues = () => {
    isNormalValuesShown = !isNormalValuesShown;
  };
</script>

<div>
  <button
    on:click={markNormalValues}
    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >{#if isNormalValuesShown}
      Nerodyti normalių reikšmių
    {:else}
      Pažymėti normalias reikšmes
    {/if}</button
  >
  {#each policy as item}
    <PolicyInput {item} />
  {/each}
</div>
