import React from 'react';
import './index.css';
import Timer from './timer.js'
import { getGameStatus } from './timer.util';
import Board from './Board';
import { calculateWinner } from './game.utils';
import { PLAYER_X, NEXT_PLAYER, MAX_HISTORY_LENGTH } from './constants'


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(undefined)
        }
      ],
      isStepNumber: 0,
      currentPlayer:PLAYER_X    
    };
    this.handleClick=this.handleClick.bind(this)
  }
  

  shouldComponentUpdate(nextState) {
    return (this.state.isStepNumber !== nextState.isStepNumber && this.state.currentPlayer !== nextState.currentPlayer);
  }

  handleClick(index) {
    const history = this.state.history.slice(0, this.state.isStepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[index] = this.state.currentPlayer 
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      isStepNumber: history.length,
      currentPlayer: NEXT_PLAYER[this.state.currentPlayer]
    });
  }

  jumpTo(step) {
    this.setState({
      isStepNumber: step,
      currentPlayer: !(step % 2)
    });
  }
  render() {   

    const history = this.state.history;
    const current = history[this.state.isStepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
          <button key={move} onClick={() => this.jumpTo(move)}>{desc}</button>
      );
    });

    const isGameEnded = winner || history.length===MAX_HISTORY_LENGTH;  
    const displayStatus = getGameStatus(isGameEnded, winner, this.state.currentPlayer)

    return ( 
      <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={winner ? null : this.handleClick}
          />
        </div>
        <div className="game-info">
          <div>{displayStatus}</div>
          <div>{moves}</div>
        </div>
      </div>
      <Timer isGameFinished={isGameEnded}/>
      </>
    );
  }
}





