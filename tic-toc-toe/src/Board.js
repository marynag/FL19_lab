import React from 'react';
import Square from './game.utils';
import {splitGameSquares} from './game.utils'


class Board extends React.PureComponent {
      
    render() {
      const squaresValue=this.props.squares 

      const groupedIndex=splitGameSquares(squaresValue)
      
      return (    
        <div>

          { groupedIndex.map((row, groupIndex) => (            
          <div key={groupIndex} className = "board-row" >
              {row.map((square) => (
              <Square key={square} 
              value={this.props.squares[square]} 
              onClick={() => this.props.onClick?.(square)}/>))}
          </div> 

))}


</div>
      );
    }
  }


export default Board