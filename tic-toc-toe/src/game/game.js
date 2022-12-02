import React from 'react';
import '../index.css';
import Timer from '../timer/timer.js';
import { getGameStatus, calculateWinner, getTitle } from './game.utils';
import Board from '../board/board';
import {
	MAX_HISTORY_LENGTH,
	PLAYER_ORDER,
	SQUARES_AMOUNT,
	PLAYERS,
} from '../constants';

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			move: 0,
			player: PLAYER_ORDER[0],
		};
		this.history = [Array(SQUARES_AMOUNT).fill(undefined)];
		this.handleBoardClick = this.handleBoardClick.bind(this);
	}

	shouldComponentUpdate(nextState) {
		return (
			this.state.move !== nextState.move &&
			this.state.player !== nextState.player
		);
	}

	handleBoardClick(squareIndex) {
		const { player, move } = this.state;

		const history = this.history;
		const lastRecord = history[move];

		const generatedRecord = [...lastRecord];
		generatedRecord[squareIndex] = player;

		this.history = [...history, generatedRecord];

		this.setState({
			move: move + 1,
			player: PLAYER_ORDER[(move + 1) % PLAYERS],
		});
	}

	handleHistoryClick(step) {
		this.setState({
			move: step,
			player: PLAYER_ORDER[step % PLAYERS],
		});
		this.history = this.history.splice(0, step + 1);
	}

	render() {
		const current = this.history[this.state.move];
		const winner = calculateWinner(current);

		const isGameEnded = winner || this.history.length === MAX_HISTORY_LENGTH;
		const displayStatus = getGameStatus(isGameEnded, winner, this.state.player);

		return (
			<>
				<div className='game'>
					<div className='game-board'>
						<Board
							squares={current}
							onClick={winner ? null : this.handleBoardClick}
						/>
					</div>
					<div className='game-info'>
						<div>{displayStatus}</div>
						<div>
							{this.history.map((step, move) => (
								<button
									key={move}
									onClick={() => this.handleHistoryClick(move)}
								>
									{getTitle(move)}
								</button>
							))}
						</div>
					</div>
				</div>
				<Timer isGameFinished={isGameEnded} />
			</>
		);
	}
}
