"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Ability, Form, Pokemon } from "@/types";
import { useParams, useRouter } from "next/navigation";
import PokemonForms from "@/components/pokemon-details/pokemon-forms";
import PokemonAbility from "@/components/pokemon-details/pokemon-abilities";
import PokemonMoves from "@/components/pokemon-details/pokemon-moves";

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [forms, setForms] = useState<Form | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${params.id}`
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemon();
  }, [params.id]);

  useEffect(() => {
    if (pokemon) {
      const fetchAbility = async () => {
        try {
          for (const ability of pokemon.abilities) {
            const response = await fetch(ability.ability.url);
            const data = await response.json();
            console.log(data);
            setAbilities((prevAbilities) => [...prevAbilities, data]);
          }
        } catch (error) {
          console.error("Error fetching pokemon:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchAbility();
    }
  }, [pokemon, params.id]);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${params.id}`
        );
        const data = await response.json();
        setForms(data);
      } catch (error) {
        console.error("Error fetching pokemon forms", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchForm();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-purple-100 py-8 px-4">
        <div className="w-full min-h-screen md:max-w-7xl flex items-center justify-center mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  if (!pokemon) {
    return <div className="text-center text-2xl mt-10">Pokemon not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-100 py-8 px-4">
      <div className="w-full md:max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-br from-purple-300 to-pink-300 p-8">
          <button
            onClick={() => router.back()}
            className="hidden md:flex cursor-pointer px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <Image
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-center capitalize mb-6 text-purple-800">
            {pokemon.name}
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              {/* Base Stats */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-purple-800">
                  Base Stats
                </h2>
                {pokemon.stats.map((stat, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{stat.stat.name}</span>
                      <span>{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 rounded-full h-2"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <PokemonForms forms={forms} />

              <PokemonMoves moves={pokemon.moves} />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {/* Details */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-purple-800">
                  Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Height</p>
                    <p>{pokemon.height / 10} m</p>
                  </div>
                  <div>
                    <p className="font-semibold">Weight</p>
                    <p>{pokemon.weight / 10} kg</p>
                  </div>
                  <div>
                    <p className="font-semibold">Base Experience</p>
                    <p>{pokemon.base_experience}</p>
                  </div>
                </div>
              </div>

              <PokemonAbility abilities={abilities} pokemon={pokemon} />

              {/* Types */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-purple-800">
                  Types
                </h2>
                <div className="flex gap-3">
                  {pokemon.types.map((type, index) => {
                    const typeColor =
                      {
                        normal: "bg-gray-400 text-white",
                        fire: "bg-red-500 text-white",
                        water: "bg-blue-500 text-white",
                        electric: "bg-yellow-400 text-white",
                        grass: "bg-green-500 text-white",
                        ice: "bg-cyan-300 text-white",
                        fighting: "bg-red-700 text-white",
                        poison: "bg-purple-500 text-white",
                        ground: "bg-yellow-700 text-white",
                        flying: "bg-indigo-400 text-white",
                        psychic: "bg-pink-500 text-white",
                        bug: "bg-lime-500 text-white",
                        rock: "bg-yellow-800 text-white",
                        ghost: "bg-purple-700 text-white",
                        dragon: "bg-indigo-600 text-white",
                        dark: "bg-gray-700 text-white",
                        steel: "bg-gray-500 text-white",
                        fairy: "bg-pink-300 text-white",
                      }[type.type.name] || "bg-gray-400 text-white";

                    return (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-lg ${typeColor} font-medium capitalize flex items-center gap-2 shadow-sm`}
                      >
                        <span className="text-lg">{type.type.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
