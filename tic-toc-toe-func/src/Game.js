import React, {useRef, useState} from 'react';
import './index.css';
import {Timer} from './timer.js'
import { getGameStatus } from './game.utils';
import {Board} from './Board';
import { calculateWinner, getTitle } from './game.utils';
import { PLAYER_X, MAX_HISTORY_LENGTH, PLAYER_ORDER} from './constants'

export const Game = () =>{
  
  const [stepNumber, setStepNumber] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X)

  const historyStorage = useRef([Array(9).fill(undefined)])
  
  const current = historyStorage.current[stepNumber];

  const winner = calculateWinner(current);   

  const isGameEnded = winner || historyStorage.current.length===MAX_HISTORY_LENGTH;  
  const displayStatus = getGameStatus(isGameEnded, winner, currentPlayer)
  
  const handle = (index) =>{
    const historyTemp = historyStorage.current.slice(0, stepNumber + 1); 

    const current = historyStorage.current[historyStorage.current.length - 1];

    const squares = [...current]
    squares[index] = currentPlayer


    historyStorage.current= historyTemp.concat([squares])

    setCurrentPlayer( PLAYER_ORDER[stepNumber % 2])
    setStepNumber(historyStorage.current.length-1)
  } 

  const jumpTo = (step)=> {    
    setStepNumber(step)
    setCurrentPlayer((step % 2) ? 'O' : 'X')

    historyStorage.current=historyStorage.current.slice(0,step+1)
  }
  
  return(
    <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={(index) => winner ? null : handle(index) }
          />
        </div>
        <div className="game-info">
          <div>{displayStatus}</div>
          <div>
            {historyStorage.current.map((step, move) => (
              <button key={move} onClick={() => jumpTo(move)}>
              {getTitle(move)}
        </button>
      ))}
          </div>
        </div>
      </div>
      <Timer isGameFinished={isGameEnded}/>
      </>
  )
}


