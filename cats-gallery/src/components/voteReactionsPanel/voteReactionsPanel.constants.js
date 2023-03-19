import styles from '../voting/voting.module.scss';
import ICON_CURRENT_SMILE from '../../svg/like-color-20.svg';
import ICON_CURRENT_LIKE from '../../svg/fav-20.svg';
import ICON_CURRENT_SAD from '../../svg/dislike-color-20.svg';
import ICON_SAD from '../../svg/dislike-white-30.svg';
import ICON_SMILE from '../../svg/like-white-30.svg';
import ICON_LIKE from '../../svg/fav-white-30.svg';

export const reactionsMap = {
	smile: { ICON_CURRENT_SMILE },
	like: { ICON_CURRENT_LIKE },
	sad: { ICON_CURRENT_SAD },
};

const REACTIONS = [
	{ className: styles.smile, text: 'smile', img: `${ICON_SMILE}` },
	{ className: styles.like, text: 'like', img: `${ICON_LIKE}` },
	{ className: styles.sad, text: 'sad', img: `${ICON_SAD}` },
];

export default REACTIONS;
