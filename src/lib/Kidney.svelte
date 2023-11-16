<script>
  let length;
  let width;
  let otherChanges;
  let pelvis;
  let pelvisWidth;
  let data;
  const createDescription = () => {
    data = {
      length: length,
      width: width,
      otherChanges: otherChanges,
    };
  };
</script>

<form
  on:submit|preventDefault={createDescription}
  class="w-[500px] flex flex-col gap-5 justify-center"
>
  <h2>Kairys inkstas</h2>
  <div>
    <label for="length">Ilgis</label>
    <input
      bind:value={length}
      name="length"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
      id="length"
      type="number"
    />
  </div>
  <div>
    <label for="width">Ilgis</label>
    <input
      bind:value={width}
      name="width"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
      id="width"
      type="number"
    />
  </div>
  <div>
    <label for="width">Geldelė:</label>
    <input
      bind:value={pelvisWidth}
      name="pelvisWidth"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
      id="pelvisWidth"
      type="number"
    />
  </div>
  <div>
    <label for="width">Geldelės plotis skersiniame pjūvyje</label>
    <input
      bind:value={pelvisWidth}
      name="pelvisWidth"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
      id="pelvisWidth"
      type="number"
    />
  </div>
  <div>
    <label for="otherChanges">Kiti pakitimai</label>
    <textarea
      bind:value={otherChanges}
      name="otherChanges"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
      id="otherChanges"
    />
  </div>
  <button type="submit">Pateikti</button>
</form>

{#if data}
  <div>
    Inksto ilgis ir plotis {data.length} x {data.width} cm. {data.otherChanges}
  </div>
{/if}
