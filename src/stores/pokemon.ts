import { writable } from 'svelte/store';
import type Pokemon from '../types/Pokemon';

export const pokemon = writable<Pokemon[]>([]);

const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
	const res = await fetch(url);
	const data = await res.json();

	const loadedPokemon: Pokemon[] = data.results.map((item: Pokemon, index: number) => ({
		id: index + 1,
		name: item.name,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));

	pokemon.set(loadedPokemon);
};

fetchPokemon();
