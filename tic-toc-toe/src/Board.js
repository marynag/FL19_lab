import React from 'react';
import Square from './game.utils';
import {splitGameSquares} from './game.utils'


class Board extends React.PureComponent {
      
    render() {
      const squaresValue=this.props.squares 

      const groupedSquares=splitGameSquares(squaresValue)
      
      return (    
        <div>

          { groupedSquares.map((row, groupIndex) => (            
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