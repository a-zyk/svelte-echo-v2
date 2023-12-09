<script>
  import { animalInfo } from "./stores/animalInfo.js";

  let normalValuesShown = false;
  const toggleNormalValues = () => {
    normalValuesShown = !normalValuesShown;
    $animalInfo = [];

  };
</script>

<div class="card">
  <div class="card-body flex flex-col gap-4">
    <button on:click={toggleNormalValues} class="btn"
      >{#if normalValuesShown}
        Normalių reikšmių rėžiai rodomi
      {:else if !normalValuesShown}
       Aprašyme rodyti normalių reikšmių rėžius.
      {/if}</button
    >
    {#if normalValuesShown}
      <div class="card-title">Gyvūno informacija</div>
      <div class="flex gap-4">
        <div>Pasirinkite rūšį</div>
        <label class="flex gap-2 items-center cursor-pointer">
          <input
            class="radio radio-sm"
            name="dog"
            bind:group={$animalInfo.species}
            type="radio"
            value="dog"
          />
          Šuo
        </label>

        <label class="flex gap-2 items-center cursor-pointer">
          <input
            class="radio radio-sm"
            name="cat"
            bind:group={$animalInfo.species}
            type="radio"
            value="cat"
          />
          Katė
        </label>
      </div>
      <div class="flex gap-4">
        <label for="animalWeight"> Gyvūno svoris</label>
        <input
          class="input input-bordered p-1 h-max"
          bind:value={$animalInfo.weight}
          id="animalWeight"
          type="number"
        />
      </div>
    {/if}
  </div>
</div>
