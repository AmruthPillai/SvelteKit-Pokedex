<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type Pokemon from '../types/Pokemon';

	export const load: Load = async () => {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=200`;
		const res = await fetch(url);
		const data = await res.json();

		const pokemon: Pokemon[] = data.results.map((item: Pokemon, index: number) => ({
			id: index + 1,
			name: item.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		}));

		return { props: { pokemon } };
	};
</script>

<script lang="ts">
	import Fuse from 'fuse.js';
	import PokemonCard from '../components/PokemonCard.svelte';

	export let pokemon: Pokemon[];

	let searchTerm = '';
	let filteredPokemon: Pokemon[] = [];

	$: {
		if (searchTerm) {
			const fuse = new Fuse(pokemon, { keys: ['name'] });
			filteredPokemon = fuse.search(searchTerm).map((x) => x.item);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>SvelteKit Pokédex</title>
</svelte:head>

<h1 class="text-2xl text-center mb-8">SvelteKit Pokedex</h1>

<input
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
	class="w-full border-2 rounded text-lg mb-8 py-2 px-4 dark:bg-stone-800 dark:text-stone-50 dark:border-stone-700 placeholder:text-stone-50/10 focus:outline-none focus:border-red-500"
/>

<div class="grid gap-4 grid-cols-2 md:grid-cols-4">
	{#each filteredPokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
