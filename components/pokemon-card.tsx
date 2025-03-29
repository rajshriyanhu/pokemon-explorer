"use client";

import { Pokemon } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div
        onClick={() => router.push(`/pokemon/${pokemon.id}`)}
        className="bg-gradient-to-br h-30 mb-30 from-purple-300 to-pink-300 p-4 cursor-pointer"
      >
        <Image
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
          className="mx-auto h-60"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold capitalize mb-4 text-center text-purple-800">
          {pokemon.name}
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-sm">Height: {pokemon.height / 10}m</div>
          <div className="text-sm">Weight: {pokemon.weight / 10}kg</div>
          <div className="text-sm">XP: {pokemon.base_experience}</div>
          <div className="text-sm">
            Attack:{" "}
            {
              pokemon.stats.find((stat) => stat.stat.name === "attack")
                ?.base_stat
            }
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2">Abilities:</p>
          <div className="flex flex-wrap gap-2">
            {pokemon.abilities.map((ability, idx) => (
              <span
                key={idx}
                className="bg-purple-100 px-2 py-1 rounded-full text-xs"
              >
                {ability.ability.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Types:</p>
          <div className="flex gap-2">
            {pokemon.types.map((type, idx) => (
              <span
                key={idx}
                className="bg-pink-100 px-2 py-1 rounded-full text-xs"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
