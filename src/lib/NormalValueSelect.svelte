<script>
  import normalValuesSelect from '$lib/stores/normalValuesSelect'
</script>

<button
  on:click={() => ($normalValuesSelect = !$normalValuesSelect)}
  class="btn"
  >{#if $normalValuesSelect}
    Normalios reikšmės rodomos
  {:else}
    Pažymėti normalias reikšmes
  {/if}</button
>
