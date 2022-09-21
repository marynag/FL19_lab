import React from 'react';
import Square from './game.utils';
//import groupedSquares from './constants'

class Board extends React.PureComponent {    
      
    render() {
      const groupedSquares=[[0,1,2],
                            [3,4,5],
                            [6,7,8]]
      
      return (
        
        <div>
          <div>
          { groupedSquares.map(row => (            
          <div className = "board-row" >
              {row.map(square => 
              <Square key={square} value={this.props.squares[square]} onClick={() => this.props.onClick(square)}/>)}
          </div> 

))}
</div>

</div>
      );
    }
  }


export default Board