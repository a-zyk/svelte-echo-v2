<script>
  export let description;
  
  let showTooltip = false;
  const copy = () => {
    navigator.clipboard.writeText(description.replaceAll('<br><br>', '\n'));
    showTooltip = true;
    setTimeout(() => {
      showTooltip = false;
    }, 1000);
  };
</script>

<div class="flex jusify-start items-center gap-2">
  <button on:click={copy} class="btn">Kopijuoti tekstą</button>
  {#if showTooltip}
    <div
      class="tooltip tooltip-right font-medium tooltip-open"
      data-tip="nukopijuota"
    />
  {/if}
</div>
