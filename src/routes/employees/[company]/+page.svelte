<script>
  import {api, company, employees} from '$lib/stores'

  export let data

  $: name = data.company
  $: emps = $employees[name] || []
  $: sorted = [...emps].sort(([,{name: name0}], [,{name: name1}])=> {
    const a = name0.split(' ')
    const b = name1.split(' ')
    return a[a.length - 1].localeCompare(b[b.length - 1])
  })
</script>

<div class="container mx-auto p-8">
  <div class='prose py-16'>
    <h1>{name}</h1>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each sorted as [, emp]}
      <div class='p-4 border prose'>
        <h2>{emp.name}</h2>
        <ul>
          <li><strong>Phone:</strong> {emp.phone}</li>
          <li><strong>Website:</strong> {emp.website}</li>
        </ul>
      </div>
    {/each}
  </div>
</div>
