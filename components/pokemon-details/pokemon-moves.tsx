import { Moves } from '@/types'
import React from 'react'

export default function PokemonMoves({moves} : {
    moves : Moves[]
}) {
  return (
<div className="bg-purple-50 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 text-purple-800">Moves</h2>
      <div className="flex flex-wrap gap-2">
        {moves.map((move, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm capitalize hover:bg-purple-300 transition-colors"
          >
            {move.move.name.replace('-', ' ')}
          </span>
        ))}
      </div>
    </div>
  )
}
