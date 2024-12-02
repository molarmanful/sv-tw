<script>
  import {api, company, employees} from '$lib/stores'
</script>

<div class="container mx-auto p-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each $company as [, v]}
      <div on:click={()=>{location.href = '/employees/' + v.name}} class='p-4 border prose'>
        <h2>{v.name}</h2>
        <p>{v.catchPhrase}</p>
        <p>{$employees[v.name]?.size}</p>
      </div>
    {/each}
  </div>
</div>
