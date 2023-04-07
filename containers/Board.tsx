import React, { useState } from 'react';
import Square from '@/components/Square';

function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
		Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
	);
	const [winner, setWinner] = useState(null);

	function reset(){
		setSquares(Array(9).fill(null))
		setWinner(null)
		setCurrentPlayer(Math.round(Math.random()*1) === 1? "X" : "O")
	}

	function setSquareValue(index) {
		const newData = squares.map((val, i) => {
			if (i === index) {
				return currentPlayer;
			}
			return val;
		});
	}

	return (
		<div>
			<p>Hey {currentPlayer}, its your turn</p>
			<div className='grid'>
				{Array(9)
					.fill(null)
					.map((_, i) => {
						return (
							<Square
								winner={winner}
								key={i}
								onClick={() => setSquareValue(i)}
								value={squares[i]}
							/>
						);
					})}
			</div>
			<button className='reset' onClick={reset}>RESET</button>
		</div>
	);
}

export default Board;
