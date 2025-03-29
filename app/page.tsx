"use client";

import { useState, useEffect } from "react";
import { Pokemon } from "@/types";
import PokemonCard from "@/components/pokemon-card";
import Pagination from "@/components/pagination";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/search";
import PokemonCardSkeleton from "@/components/pokemon-card-skeleton";

export default function Page() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const pokemonsPerPage = 21;

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      const startIndex = (parseInt(page) - 1) * pokemonsPerPage + 1;

      try {
        const pokemonList = await Promise.all(
          Array.from({ length: pokemonsPerPage }, (_, i) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${startIndex + i}`)
              .then((res) => res.json())
          )
        );
        setPokemons(pokemonList);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, [page]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-purple-100 min-h-screen py-4 px-4 lg:px-6">
      <div className="text-center mb-4 md:mb-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-3">
          Pokemon Explorer
        </h1>
        <p className="text-xl text-purple-600">
          Gotta Catch &apos;Em All: Your Ultimate Pokemon Guide
        </p>
      </div>

      <SearchBar />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-8">
          {[...Array(6)].map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      ) : !filteredPokemons.length ? (
        <p className="text-center text-purple-800">No pokemons found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-8">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </div>
      )}

      <Pagination currentPage={parseInt(page)} />
    </div>
  );
}