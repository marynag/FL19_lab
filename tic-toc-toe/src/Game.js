import React from 'react';
import './index.css';
import Timer from './timer.js'
import { getGameStatus } from './game.utils';
import Board from './Board';
import { calculateWinner, getTitle } from './game.utils';
import { PLAYER_X, MAX_HISTORY_LENGTH, PLAYER_ORDER} from './constants'


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0,
      currentPlayer:PLAYER_X    
    };
    this.history=[Array(9).fill(undefined)]
    this.handleClick=this.handleClick.bind(this)
  }
  

  shouldComponentUpdate(nextState) {
    return (this.state.stepNumber !== nextState.stepNumber && this.state.currentPlayer !== nextState.currentPlayer);
  }

  handleClick(index) {
    const {currentPlayer, stepNumber} = this.state;

    const history = this.history.slice(0, stepNumber + 1);   

    const current = history[history.length - 1];
    const squares = [...current]
    squares[index] = currentPlayer
    this.history=history.concat([squares])

    this.setState({
      stepNumber: history.length,
      currentPlayer: PLAYER_ORDER[stepNumber % 2]
    });
    
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      currentPlayer: (step % 2) ? 'O' : 'X'
    });
    this.history=this.history.slice(0,step+1)
  }

  render() {   
    const history = this.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current);   

    const isGameEnded = winner || history.length===MAX_HISTORY_LENGTH;  
    const displayStatus = getGameStatus(isGameEnded, winner, this.state.currentPlayer)

    return ( 
      <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={winner ? null : this.handleClick}
          />
        </div>
        <div className="game-info">
          <div>{displayStatus}</div>
          <div>
            {history.map((step, move) => (
              <button key={move} onClick={() => this.jumpTo(move)}>
              {getTitle(move)}
        </button>
      ))}
          </div>
        </div>
      </div>
      <Timer isGameFinished={isGameEnded}/>
      </>
    );
  }
}





