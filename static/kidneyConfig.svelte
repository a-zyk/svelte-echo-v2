<script>
    export let kidneyValues
</script>

{#if $kidneyValues.echogenicity}
<span> Inksto žievė blužniai yra {$kidneyValues.echogenicity}.</span>
{/if}

{#if $kidneyValues.length && $kidneyValues.width}
<span>Inksto ilgis ir plotis {$kidneyValues.length}x{$kidneyValues.width}cm.</span>
{:else if $kidneyValues.length}
<span>Inksto ilgis {$kidneyValues.length}cm.</span>
{:else if $kidneyValues.width}
<span>Inksto plotis {$kidneyValues.width}cm.</span>
{/if}

{#if $kidneyValues.pelvis}
<span>Geldelė {$kidneyValues.pelvis}.</span>
{/if}

{#if $kidneyValues.pelvisWidth}
<span>Geldelės plotis skersiniame pjūvyje {$kidneyValues.pelvisWidth}cm.</span>
{/if}

{#if $kidneyValues.otherChanges}
<span>{$kidneyValues.otherChanges}.</span>
{/if}