<script>
  import normalValuesSelect from '$lib/stores/normalValuesSelect'
</script>

<button
  on:click={() => ($normalValuesSelect = !$normalValuesSelect)}
  class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
  >{#if $normalValuesSelect}
    Normalios reikšmės rodomos
  {:else}
    Pažymėti normalias reikšmes
  {/if}</button
>
