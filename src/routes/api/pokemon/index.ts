import type { RequestHandler } from '@sveltejs/kit';
import type Pokemon from '../../../types/Pokemon';

export const get: RequestHandler<Pokemon[]> = async () => {
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

	return {
		status: 200,
		body: pokemon
	};
};
