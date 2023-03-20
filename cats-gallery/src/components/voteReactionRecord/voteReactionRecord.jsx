import styles from '../voting/voting.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const VoteReactionRecord = (props) => {
	const { history } = props;
	const { time } = props;
	const { IconDislikeSmall, IconFavouriteSmall, IconLikeSmall } = props.icon;

	const iconLink = IconDislikeSmall ?? IconFavouriteSmall ?? IconLikeSmall;
	return (
		<div className={styles.reactionDescription}>
			<p>{time}</p>
			<p>
				Image ID: <b>{history[history.length - 1]}</b> was added to {props.text}
			</p>
			{React.createElement(iconLink)}
		</div>
	);
};

VoteReactionRecord.propTypes = {
	history: PropTypes.array,
	icon: PropTypes.object,
	text: PropTypes.string,
};
