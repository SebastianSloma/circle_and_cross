import React, { useState } from 'react'

function Board ()  {
  const [squares, setSquares] =useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() *1) === 1 ? "X" : "O"
  )
  const [winner, setWinner] = useState(null)

  return (
    <div>
      <p>Hey {currentPlayer}, it's your turn</p>
    </div>
  )
}

export default Board