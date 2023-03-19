import styles from '../voting/voting.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const VoteReactionRecord = (props) => {
	const { history } = props;
	const { time } = props;
	const { ICON_CURRENT_SAD, ICON_CURRENT_LIKE, ICON_CURRENT_SMILE } =
		props.icon;
	const iconLink = ICON_CURRENT_SAD ?? ICON_CURRENT_LIKE ?? ICON_CURRENT_SMILE;
	return (
		<div className={styles.reactionDescription}>
			<p>{time}</p>
			<p>
				Image ID: <b>{history[history.length - 1]}</b> was added to {props.text}
			</p>
			<img className={styles.reactionImg} src={iconLink} alt='reaction' />
		</div>
	);
};

VoteReactionRecord.propTypes = {
	history: PropTypes.array,
	icon: PropTypes.object,
	text: PropTypes.string,
};
