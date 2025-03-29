export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: Array<{ base_stat: number; stat: { name: string } }>;
    abilities: Array<{ ability: { name: string, url : string }, is_hidden: boolean }>;
    types: Array<{ type: { name: string } }>;
    sprites: { other: { dream_world: { front_default: string } } };
    moves: Moves[];
    base_experience: number;
  }

export interface Ability {
    id: number;
    name: string;
    effect_entries: Array<        {
        effect: string;
        language: {
            name: string,

        },
        short_effect: string
    }>
    flavor_text_entries: Array<{
        flavor_text: string;
        language: {
            name: string,
        },
    }>
}

export interface PokemonSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface Form {
    form_name: string;
    form_names: string[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: string[];
    order: number;
    pokemon: {
        name: string;
        url: string;
    };
    sprites: PokemonSprites;
    version_group: {
        name: string;
        url: string;
    };
}
export interface Moves {
    move : {
        name : string;
    }
}