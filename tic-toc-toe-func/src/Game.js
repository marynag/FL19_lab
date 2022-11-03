import React, {useRef, useState} from 'react';
import './index.css';
import {Timer} from './timer.js'
import { getGameStatus } from './game.utils';
import {Board} from './Board';
import { calculateWinner, getTitle } from './game.utils';
import {PLAYER_X, MAX_HISTORY_LENGTH, PLAYER_ORDER, SQUARES_AMOUNT, PLAYER_O} from './constants'

export const Game = () =>{
  const [game, setGame] = useState({ move: 0, player: PLAYER_X});

  const historyStorage = useRef([Array(SQUARES_AMOUNT).fill(undefined)])

  const current = historyStorage.current[game.move];

  const winner = calculateWinner(current);   

  const isGameEnded = winner || historyStorage.current.length===MAX_HISTORY_LENGTH;  
  const displayStatus = getGameStatus(isGameEnded, winner, game.player)
  
  const handleBoardClick = (squareIndex) =>{
    const history = historyStorage.current;
    const lastRecord = history[game.move];

    const generatedRecord = [...lastRecord];
    generatedRecord[squareIndex] = game.player

    historyStorage.current= [...history, generatedRecord];

    const move = game.move+1;
    const player = PLAYER_ORDER[game.move % 2];

    setGame({ move, player });
  } 

  const handleHistoryClick = (step)=> {
    const move = step;
    const player = ((step % 2) ? PLAYER_O : PLAYER_X);
    setGame({ move, player });

    historyStorage.current=historyStorage.current.slice(0,step+1)
  }
  
  return(
    <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={(squareIndex) => winner ? null : handleBoardClick(squareIndex) }
          />
        </div>
        <div className="game-info">
          <div>{displayStatus}</div>
          <div>
            {historyStorage.current.map((step, move) => (
              <button key={move} onClick={() => handleHistoryClick(move)}>
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


