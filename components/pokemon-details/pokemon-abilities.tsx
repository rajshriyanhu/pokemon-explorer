import { Ability, Pokemon } from '@/types'
import React from 'react'

export default function PokemonAbility({
    pokemon,
    abilities,
} : {
    pokemon: Pokemon,
    abilities: Ability[]
}) {
  return (
    <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3 text-purple-800">
                  Abilities
                </h2>
                <div className="flex flex-col gap-3">
                  {pokemon.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg capitalize font-medium text-purple-800">
                            {ability.ability.name}
                          </span>
                          {ability.is_hidden && (
                            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                              Hidden Ability
                            </span>
                          )}
                        </div>
                      </div>

                      {abilities[index] && (
                        <div className="mt-2 space-y-3">
                          <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">
                              Effect
                            </h3>
                            <p className="text-sm text-gray-600">
                              {abilities[index].effect_entries.find(
                                (entry) => entry.language.name === "en"
                              )?.effect || "No effect description available"}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">
                              Short Effect
                            </h3>
                            <p className="text-sm text-gray-600">
                              {abilities[index].effect_entries.find(
                                (entry) => entry.language.name === "en"
                              )?.short_effect || "No short effect available"}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">
                              Flavor Text
                            </h3>
                            <p className="text-sm text-gray-600 italic">
                              {abilities[index].flavor_text_entries.find(
                                (entry) => entry.language.name === "en"
                              )?.flavor_text || "No flavor text available"}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
  )
}
