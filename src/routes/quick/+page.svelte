<script>
  import parts from "$lib/quick";
  import Input from "$lib/quick/Input.svelte";

  const write = "Write";
  const preview = "Preview";
  const modes = [write, preview];
  let currentMode = write;

  const INPUT_REGEX = /({{\w*}})/;

  let state = { homogenicity: "" };

  const cleanText = text => text.replace('{{', '').replace('}}','');
</script>

<div class="flex cursor-pointer">
  {#each modes as mode}
    {#if mode == currentMode}
      <div class="font-semibold">
        {mode}
      </div>
    {:else}
      <div on:click={() => (currentMode = mode)}>{mode}</div>
    {/if}
  {/each}
</div>

<div class="flex flex-col">
  {#each parts as part}
    <div>
      {part.title}
    </div>
    <div>
      {#each part.text.split(INPUT_REGEX) as text}
        {#if text.match(INPUT_REGEX)}
          {#if currentMode == write}
            <Input config={part} text={cleanText(text)} bind:value={state[cleanText(text)]} />
          {:else}
            {state[cleanText(text)]}
          {/if}
        {:else}
          {text}
        {/if}
      {/each}
    </div>
  {/each}
</div>
