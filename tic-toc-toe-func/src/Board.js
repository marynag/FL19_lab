import React from 'react';
import Square from './game.utils';
import {splitGameSquares} from './game.utils'

export const Board = (props) =>{
  const squaresValue=props.squares 
  const groupedIndex=splitGameSquares(squaresValue)
  return (    
    <div>

      { groupedIndex.map((row, groupIndex) => (            
      <div key={groupIndex} className = "board-row" >
          {row.map((square) => (
          <Square key={square} 
          value={props.squares[square]} 
          onClick={() => props.onClick?.(square)}/>))}
      </div> 

        ))}
      </div>
  );
}