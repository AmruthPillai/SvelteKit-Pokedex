<script lang="ts">
	import { fade } from 'svelte/transition';
	import type Pokemon from '../types/Pokemon';

	export let pokemon: Pokemon;
</script>

<a
	transition:fade
	href={`/pokemon/${pokemon.id}`}
	class="p-6 bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-inherit text-center rounded shadow hover:shadow-md flex flex-col items-center justify-center hover:scale-125 transition-all duration-200"
>
	<img src={pokemon.image} alt={pokemon.name} class="w-32 h-32" />
	<h2>{pokemon.id}. <span class="capitalize">{pokemon.name}</span></h2>
</a>
