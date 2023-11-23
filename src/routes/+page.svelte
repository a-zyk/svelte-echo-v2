<script>
  import policies from "$lib/policy.js";
  import PolicyInput from "$lib/PolicyInput.svelte";
  import Description from "$lib/Description.svelte";
  import NormalValueSelect from "$lib/NormalValueSelect.svelte";
</script>

<div>
  <NormalValueSelect />
  <Description {policies} />

  {#each policies as item}
    <PolicyInput {item} />
  {/each}
</div>
