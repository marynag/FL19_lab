import { MAX_HISTORY_LENGTH } from './constants';


export default function convertTime(duration){
    const MINUTE_SECONDS = 60;
    const HOUR_SECONDS  = MINUTE_SECONDS * 60;    

    const hours = Math.floor(duration / HOUR_SECONDS );

    const minutesInSeconds  = duration % HOUR_SECONDS ;

    const minutes = Math.floor(minutesInSeconds  / MINUTE_SECONDS);
    const seconds=duration% MINUTE_SECONDS;

    return {hours, minutes, seconds}
};

export function getGameStatus(history, winner, xIsNext){
    let displayStatus;
    let isGameEnded=false;

    if (winner || history.length===MAX_HISTORY_LENGTH) {
        const defineWinner= winner ?? 'Draw'
        displayStatus= winner ? "Winner:"+defineWinner: defineWinner
        isGameEnded=true
      } else {        
          displayStatus = "Next player: " + (xIsNext ? "X" : "O")          
      }
    return {isGameEnded, displayStatus}
}
