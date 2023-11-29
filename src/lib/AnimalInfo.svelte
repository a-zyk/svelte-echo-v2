<script>
  import { animalInfo } from "./stores/animalInfo.js";
</script>


<div>
  <div>Pasirinkite rūšį</div>
  <label>
    <input
      class="mb-4"
      name="dog"
      bind:group={$animalInfo.species}
      type="radio"
      value="dog"
    />
    Šuo
  </label>

  <label>
    <input
      class="mb-4"
      name="cat"
      bind:group={$animalInfo.species}
      type="radio"
      value="cat"
    />
    Katė
  </label>
</div>
<div>
  <label for="animalWeight"> Gyvūno svoris</label>
  <input bind:value={$animalInfo.weight} id="animalWeight" type="number" />
</div>
