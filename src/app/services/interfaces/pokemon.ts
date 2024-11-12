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
