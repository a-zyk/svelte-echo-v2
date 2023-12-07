<script>
  import NormalValueSelect from "$lib/NormalValueSelect.svelte";
  import { policiesSelect } from "./stores/policiesSelect"
  export let policies;
</script>

<div class="card">
  <div class="flex flex-col gap-2 card-body">
    <div class="card-title">Pasirinkti tirtus organus:</div>
    {#each policies as policy}
      <div class="flex gap-2">
        <input
          class="checkbox checkbox-sm"
          type="checkbox"
          id={policy.name}
          value={policy.name}
          bind:group={$policiesSelect}
        />
        <label class="cursor-pointer" for={policy.name}>{policy.title}</label>
      </div>
    {/each}
    <div>
      <NormalValueSelect />
    </div>
  </div>
</div>
 