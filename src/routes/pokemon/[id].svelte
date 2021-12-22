<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		const { id } = page.params;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemon = await res.json();

		return { props: { pokemon } };
	};
</script>

<script lang="ts">
	import type PokemonDetail from 'src/types/PokemonDetail';

	export let pokemon: PokemonDetail;
</script>

<img src={pokemon.sprites['front_default']} alt={pokemon.name} class="w-32 h-32 mx-auto" />

<h1 class="text-4xl text-center capitalize mb-8">{pokemon.name}</h1>

<p class="text-center mb-8">
	Type: <strong class="capitalize">{pokemon.types[0].type.name}</strong> | Height:
	<strong>{pokemon.height}</strong>
	| Weight: <strong>{pokemon.weight}</strong>
</p>
