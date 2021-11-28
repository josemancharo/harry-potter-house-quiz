<script>
  export let type = 0;

  const muggle = 1;
  const squib = 0;
</script>

<h3>
  {#if type === muggle}
    Congrats! You are a muggle!
  {:else if type === squib}
    Congrats! You are a squib!
  {:else}
    We didn't know where to put you. How about Hufflepuff?
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
    width: 50%;;
  }
</style>
