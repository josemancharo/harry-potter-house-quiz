<script>
  export let type;
  $: type ??= 0
  const hufflepuff = 2;
  const muggle = 1;
  const squib = 0;
</script>

<h3>
  Congrats! You are a
  {#if type === muggle}
    muggle!
  {:else if type === squib}
    squib!
  {:else}
    Hufflepuff!
  {/if}
</h3>

{#if type === muggle}
  <img src="/assets/dudley.jpg" alt="dudley" />
{:else if type === squib}
  <img src="/assets/filch.jpg" alt="filch" />
{:else}
  <img src="/assets/collin.jpg" alt="collin" />
{/if}

<style>
  img {
    width: 50%;
  }
</style>
