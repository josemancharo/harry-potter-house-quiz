<script>
export let type = 0;
</script>

<h3>
Congrats! You are a
  {#if type == 0}
muggle!
  {:else if type == 1}
squib!
  {:else}
Hufflepuff!
  {/if}
</h3>


{#if type == 1}
  <img src="/assets/filch.jpg" alt="filch"/>
{:else if type == 2}
  <img src="/assets/collin.jpg" alt="collin"/>
{:else}
  <img src="/assets/dudley.jpg" alt="dudley"/>
{/if}

<style>
  img {
    width: 50%;
  }
</style>