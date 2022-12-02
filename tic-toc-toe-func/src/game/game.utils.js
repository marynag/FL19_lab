import { WIN_LINES, NEXT_PLAYER } from '../constants';

export function calculateWinner(squares) {
	const winLine = WIN_LINES.find((line) => {
		const [a, b, c] = line;
		return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
	});

	if (!winLine) return winLine;

	const winLineIndex = winLine[0];
	return squares[winLineIndex];
}

export function getTitle(move) {
	return move ? 'Go to move #' + move : 'Go to game start';
}

export function getGameStatus(isGameEnded, winner, currentPlayer) {
	if (isGameEnded) {
		return winner ? `Winner: ${winner}` : 'Draw';
	}

	const nextPlayer = NEXT_PLAYER[currentPlayer];
	return `Next player: ${nextPlayer}`;
}
