export interface PokemonRepsonse {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonResponseItem[]
}

export interface PokemonResponseItem {
    name: string;
    url: string
}