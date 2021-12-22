/* eslint-disable @typescript-eslint/no-explicit-any */
interface Ability2 {
	name: string;
	url: string;
}

interface Ability {
	ability: Ability2;
	is_hidden: boolean;
	slot: number;
}

interface Form {
	name: string;
	url: string;
}

interface Version {
	name: string;
	url: string;
}

interface GameIndice {
	game_index: number;
	version: Version;
}

interface Move2 {
	name: string;
	url: string;
}

interface MoveLearnMethod {
	name: string;
	url: string;
}

interface VersionGroup {
	name: string;
	url: string;
}

interface VersionGroupDetail {
	level_learned_at: number;
	move_learn_method: MoveLearnMethod;
	version_group: VersionGroup;
}

interface Move {
	move: Move2;
	version_group_details: VersionGroupDetail[];
}

interface Species {
	name: string;
	url: string;
}

interface DreamWorld {
	front_default: string;
	front_female?: any;
}

interface Home {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface OfficialArtwork {
	front_default: string;
}

interface Other {
	dream_world: DreamWorld;
	home: Home;
	'official-artwork': OfficialArtwork;
}

interface RedBlue {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

interface Yellow {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

interface GenerationI {
	'red-blue': RedBlue;
	yellow: Yellow;
}

interface Crystal {
	back_default: string;
	back_shiny: string;
	back_shiny_transparent: string;
	back_transparent: string;
	front_default: string;
	front_shiny: string;
	front_shiny_transparent: string;
	front_transparent: string;
}

interface Gold {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
}

interface Silver {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
}

interface GenerationIi {
	crystal: Crystal;
	gold: Gold;
	silver: Silver;
}

interface Emerald {
	front_default: string;
	front_shiny: string;
}

interface FireredLeafgreen {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

interface RubySapphire {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

interface GenerationIii {
	emerald: Emerald;
	'firered-leafgreen': FireredLeafgreen;
	'ruby-sapphire': RubySapphire;
}

interface DiamondPearl {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface HeartgoldSoulsilver {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface Platinum {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface GenerationIv {
	'diamond-pearl': DiamondPearl;
	'heartgold-soulsilver': HeartgoldSoulsilver;
	platinum: Platinum;
}

interface Animated {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface BlackWhite {
	animated: Animated;
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface GenerationV {
	'black-white': BlackWhite;
}

interface OmegarubyAlphasapphire {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface XY {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface GenerationVi {
	'omegaruby-alphasapphire': OmegarubyAlphasapphire;
	'x-y': XY;
}

interface Icons {
	front_default: string;
	front_female?: any;
}

interface UltraSunUltraMoon {
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

interface GenerationVii {
	icons: Icons;
	'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

interface Icons2 {
	front_default: string;
	front_female?: any;
}

interface GenerationViii {
	icons: Icons2;
}

interface Versions {
	'generation-i': GenerationI;
	'generation-ii': GenerationIi;
	'generation-iii': GenerationIii;
	'generation-iv': GenerationIv;
	'generation-v': GenerationV;
	'generation-vi': GenerationVi;
	'generation-vii': GenerationVii;
	'generation-viii': GenerationViii;
}

interface Sprites {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
	other: Other;
	versions: Versions;
}

interface Stat2 {
	name: string;
	url: string;
}

interface Stat {
	base_stat: number;
	effort: number;
	stat: Stat2;
}

interface Type2 {
	name: string;
	url: string;
}

interface Type {
	slot: number;
	type: Type2;
}

export default interface PokemonDetail {
	abilities: Ability[];
	base_experience: number;
	forms: Form[];
	game_indices: GameIndice[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Move[];
	name: string;
	order: number;
	past_types: any[];
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
}
