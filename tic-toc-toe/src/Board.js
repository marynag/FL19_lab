import React from 'react';
import Square from './game.utils';
import {splitGameSquares} from './game.utils'


class Board extends React.PureComponent {
      
    render() {
      const squaresArray=this.props.squares     
      let squares =[]
        for(let i=0;i<squaresArray.length;i++){         
          squares.push(i)          
        }      

      const groupedSquares=splitGameSquares(squares, squaresArray.length**(1/2))

      return (    
        <div>

          { groupedSquares.map((row, index) => (            
          <div key={index} className = "board-row" >
              {row.map(square => 
              <Square key={square} value={this.props.squares[square]} onClick={() => this.props.onClick?.(square)}/>)}
          </div> 

))}


</div>
      );
    }
  }


export default Board