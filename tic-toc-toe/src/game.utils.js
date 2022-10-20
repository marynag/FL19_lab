import {WIN_LINES} from './constants'

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export function calculateWinner(squares) {  
  const winLine = WIN_LINES.find(line => {
    const [a, b, c] = line;   
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
 });

 if(!winLine) return winLine;

 const winLineIndex = winLine[0]; 
 return squares[winLineIndex];
}


export function splitGameSquares(squaresValue) {
  const size = squaresValue.length**(1/2);

  const indeces = squaresValue.map((current, index) => index);

  const groupedIndeces = []

  while (indeces.length) {
    const group = indeces.splice(0, size);
    groupedIndeces.push(group);
  }

  return groupedIndeces
}

export function getTitle(move){
  return move ?
  'Go to move #' + move :
  'Go to game start';
}