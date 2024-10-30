import { useDebounceFn } from "@vueuse/core";

export function useDebounceSearch(endpoint: string) {
  const search = ref("");
  const debounce = useDebounceFn(async () => {
    const { data } = await useFetch(`/api/${endpoint}?search=${search.value}`);
    console.log(data);
  }, 1000);

  return {
    search,
    debounce,
  };
}
