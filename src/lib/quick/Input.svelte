<script>
    export let config = {}
    export let text = ""
    export let value
    
    const input = config.inputs[text]
</script>

{#if input.type == "select"}
    <select bind:value={value}>
        <option value></option>
        {#each input.options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
{/if}