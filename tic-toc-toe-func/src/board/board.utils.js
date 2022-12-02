import styles from './board.module.scss';

export function splitGameSquares(squaresValue) {
	const size = squaresValue.length ** (1 / 2);

	const indeces = squaresValue.map((current, index) => index);

	const groupedIndeces = [];

	while (indeces.length) {
		const group = indeces.splice(0, size);
		groupedIndeces.push(group);
	}

	return groupedIndeces;
}

export default function Square(props) {
	return (
		<button className={styles.square} onClick={props.onClick}>
			{props.value}
		</button>
	);
}
