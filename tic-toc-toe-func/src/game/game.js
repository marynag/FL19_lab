import React, {useState} from 'react';
import styles from './game.module.scss';
import {Timer} from '../timer'
import { getGameStatus } from './game.utils';
import {Board} from '../board';
import { calculateWinner, getTitle } from './game.utils';
import {PLAYER_X, MAX_HISTORY_LENGTH, PLAYER_ORDER, PLAYER_O} from '../constants'
import {useHistory} from "./useHistory";

export const Game = () =>{
  const [game, setGame] = useState({ move: 0, player: PLAYER_ORDER[0]});

  const history = useHistory();

  const current = history.lastRecord

  const winner = calculateWinner(current);

  const isGameEnded = winner || history.size ===MAX_HISTORY_LENGTH;
  const displayStatus = getGameStatus(isGameEnded, winner, game.player)

  
  const handleBoardClick = (squareIndex) =>{
    const generatedRecord = [...history.lastRecord];

    generatedRecord[squareIndex] = game.player

    history.addMove(generatedRecord)

    const move = game.move+1;

    const player = ((move % PLAYER_ORDER.length) ? PLAYER_O : PLAYER_X);

    setGame({ move, player });
  } 

  const handleHistoryClick = (move)=> {
    const player = PLAYER_ORDER[move % PLAYER_ORDER.length]
    console.log((move % PLAYER_ORDER.length) ? PLAYER_O : PLAYER_X)
    console.log(PLAYER_ORDER[move % PLAYER_ORDER.length])

    history.backTo(move)

    setGame({ move, player });
  }
  
  return(
    <div className={styles.game}>
      <div>
          <Board
            squares={current}
            onClick={(squareIndex) => winner ? null : handleBoardClick(squareIndex) }
          />
        </div>
        <div className={styles.game_info}>
          <div>{displayStatus}</div>
          <div>
            {history.records.map((step, move) => (
              <button key={move} onClick={() => handleHistoryClick(move)}>
              {getTitle(move)}
        </button>
      ))}
          </div>
        </div>

      <Timer isGameFinished={isGameEnded}/>
    </div>
  )
}


