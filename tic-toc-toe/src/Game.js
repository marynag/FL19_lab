import React from 'react';
import './index.css';
import Timer from './timer.js'
import { getGameStatus } from './timer.util';
import Board from './Board';
import { calculateWinner } from './game.utils';
import { x, o } from './constants'
import { MAX_HISTORY_LENGTH } from './constants';
 

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill()
        }
      ],
      isStepNumber: 0,
      xIsNext: true,
      stepNumber: 1,
      currentPlayer: x
    };
  }
  

  shouldComponentUpdate(nextState) {
    return (this.state.isStepNumber !== nextState.isStepNumber && this.state.xIsNext !== nextState.xIsNext);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.isStepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext ? x : o;
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      isStepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      isStepNumber: step,
      xIsNext: !(step % 2)
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
        <div key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </div>
      );
    });

    const isGameEnded = winner || history.length===MAX_HISTORY_LENGTH;  
    const displayStatus = getGameStatus(isGameEnded, winner, this.state.xIsNext)

    return ( 
      <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={event => winner ? null : this.handleClick(event) }
          />
        </div>
        <div className="game-info">
          <div>{displayStatus}</div>
          <ol>{moves}</ol>
        </div>
      </div>
      <Timer isGameFinished={isGameEnded}/>
      </>
    );
  }
}





