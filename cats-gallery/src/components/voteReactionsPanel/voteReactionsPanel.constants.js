import styles from '../voting/voting.module.scss';
import currentReactionSmile from '../../img/Vector(Stroke123).png';
import currentReactionLike from '../../img/Vector 348 (Stroke)1.png';
import currentReactionSad from '../../img/Vectorfvf (Stroke).png';
import smile from '../../img/Vector (Stroke) (1242).png';
import heart from '../../img/VectorStroke1232.png';
import sad from '../../img/Vector (Stroke) (122).png';

export const reactionsMap = {
	smile: { currentReactionSmile },
	like: { currentReactionLike },
	sad: { currentReactionSad },
};

const REACTIONS = [
	{ className: styles.smile, text: 'smile', img: `${smile}` },
	{ className: styles.like, text: 'like', img: `${heart}` },
	{ className: styles.sad, text: 'sad', img: `${sad}` },
];

export default REACTIONS;
