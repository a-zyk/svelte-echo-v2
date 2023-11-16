<script>
  import policy from "$lib/policy.js";
  import PolicyInput from "$lib/PolicyInput.svelte";
</script>

<div>
  {#each policy as item}
    <PolicyInput {item} />
  {/each}
</div>
