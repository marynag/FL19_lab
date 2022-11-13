import React from 'react';
import './index.css';
import Timer from './timer.js'
import { getGameStatus } from './game.utils';
import Board from './Board';
import { calculateWinner, getTitle } from './game.utils';
import { MAX_HISTORY_LENGTH, PLAYER_ORDER, SQUARES_AMOUNT, PLAYERS} from './constants'


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0,
      currentPlayer:PLAYER_ORDER[0]
    };
    this.history=[Array(SQUARES_AMOUNT).fill(undefined)]
    this.handleClick=this.handleClick.bind(this)
  }
  

  shouldComponentUpdate(nextState) {
    return (this.state.stepNumber !== nextState.stepNumber && this.state.currentPlayer !== nextState.currentPlayer);
  }

  handleClick(squareIndex) {
    const {currentPlayer, stepNumber} = this.state;

    const history = this.history;
    const lastRecord = history[stepNumber];

    const generatedRecord = [...lastRecord];
    generatedRecord[squareIndex] = currentPlayer;

    this.history= [...history, generatedRecord];

    this.setState({
      stepNumber: stepNumber+1,
      currentPlayer: PLAYER_ORDER[Math.abs((stepNumber % PLAYERS)-1)]
    });
    
  }

  handleHistoryClick(step) {
    this.setState({
      stepNumber: step,
      currentPlayer: PLAYER_ORDER[step % PLAYERS]
    });
    this.history=this.history.splice(0,step+1)
  }

  render() {   
    const current = this.history[this.state.stepNumber];
    const winner = calculateWinner(current);   

    const isGameEnded = winner || this.history.length===MAX_HISTORY_LENGTH;  
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
            {this.history.map((step, move) => (
              <button key={move} onClick={() => this.handleHistoryClick(move)}>
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





