import React from 'react';
import Square, {splitGameSquares} from './board.utils'
import styles from './board.module.scss'

export const Board = (props) =>{
  const { squares } = props;
  const groupedIndeсes=splitGameSquares(squares)
  return (    
    <div>

      { groupedIndeсes.map((row, groupIndex) => (
      <div key={groupIndex} className = {styles.board-row} >
          {row.map((square) => (
          <Square key={square} 
          value={props.squares[square]} 
          onClick={() => props.onClick?.(square)}/>))}
      </div> 

        ))}
      </div>
  );
}