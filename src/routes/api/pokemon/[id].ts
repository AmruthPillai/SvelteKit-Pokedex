import type { RequestHandler } from '@sveltejs/kit';
import type PokemonDetail from '../../../types/PokemonDetail';

export const get: RequestHandler<PokemonDetail> = async ({ params }) => {
	const { id } = params;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon: PokemonDetail = await res.json();

	return {
		status: 200,
		body: pokemon
	};
};
