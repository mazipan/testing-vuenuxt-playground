import { ref } from "vue";

import { getAllPokemons } from "../api/getAllPokemons";

export function usePokemons() {
  let pokemons = ref([]);
  let count = ref([]);

	const fetchData = async () => {
		const res = await getAllPokemons();
		pokemons.value = res.data.pokemons.results;
		count.value = res.data.pokemons.count;
	};

  return {
		fetchData,
    pokemons,
		count
  };
}
