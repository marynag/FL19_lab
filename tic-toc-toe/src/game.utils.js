import {WIN_LINES} from './constants'

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export function calculateWinner(squares) {  

  console.log({squares})
  const winLine = WIN_LINES.find(line => {
    const [a, b, c] = line;   
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
 });

 if(!winLine) return winLine;

 const winLineIndex = winLine[0]; 
 return squares[winLineIndex];
}


export function splitGameSquares(items) {  
  const size=items.length**(1/2)
  const groupedSquares = []

  while (items.length) {
    groupedSquares.push(
      items.splice(0, size)
    )
  }

  return groupedSquares
}