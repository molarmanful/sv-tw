import { derived, writable } from "svelte/store"

export const api = writable([])

export const company = derived(api, ($api) =>
  new Map($api.map(({ company }) => [company.name, company])))

export const employees = derived(api, ($api) => {
  const res = {}
  for (const emp of $api) {
    const { id, company: { name } } = emp
    if (!(name in employees)) res[name] = new Map()
    res[name].set(id, emp)
  }
  return res
})
