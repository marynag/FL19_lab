import React from 'react';
import Square, {splitGameSquares} from './board.utils'


class Board extends React.PureComponent {
      
    render() {
      const squaresValue=this.props.squares 

      const groupedIndex=splitGameSquares(squaresValue)
      
      return (    
        <>
          { groupedIndex.map((row, groupIndex) => (            
          <div key={groupIndex} className = "board-row" >
              {row.map((square) => (
              <Square key={square} 
              value={this.props.squares[square]} 
              onClick={() => this.props.onClick?.(square)}/>))}
          </div>
            ))}
        </>
      );
    }
  }


export default Board