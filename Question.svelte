<script>
  export let title;
  export let options;
  export let onNext;
  export let image;
  let value = -1;

  function handleSelect(i) {
    value = i;
  }
</script>

<style>
  ol,
  #next {
    text-align: left;
    padding-left: 10%;
  }
</style>

<h2>{title}</h2>

{#if image}
  <img src={image} alt = {image} width = 50% />
{/if}

{#key value}
  <ol type="A">
  {#each options as option, i}
  <li>
    <input 
      type="radio"
      id="radio-{i}" 
      name="drone"
      value={i}
      on:change={() => handleSelect(i)}
      >
    <label for="radio-{i}">{option}</label>
  </li>
  {/each}
  </ol>
{/key}

<div id="next">
  <button 
    disabled={value === -1}
    on:click={() => onNext(value)}
    >Next</button>
</div>