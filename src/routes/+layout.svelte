<script lang='ts'>
  import { onMount } from "svelte"
  import {api} from '$lib/stores'
  import '../app.css'

  onMount(async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/users")
    api.set(await req.json())
  })
</script>

<slot></slot>
