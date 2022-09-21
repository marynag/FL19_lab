import LINES from './constants'

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export function calculateWinner(squares) {  
  let result=''
    LINES.find((element, index)=>{
    const [a, b, c] = LINES[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      result=squares[a]
      return true;
    }
    return false;
   })
   return result

}
