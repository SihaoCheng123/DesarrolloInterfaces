export interface Pokemon {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export interface PokemonApi {
  name: string;
  url: string;
}

export interface Abilities{
  name: string;
}

export interface PokemonDetail{
  name: string|null;
  img: string;
  abilities: string[];
  base_experience: number;
  height: number;
}
