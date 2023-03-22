import styles from '../voting/voting.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '../iconButton/iconButton';

export const VoteReactionRecord = (props) => {
	const { history } = props;
	const { time } = props;

	return (
		<div className={styles.reactionDescription}>
			<p>{time}</p>
			<p>
				Image ID: <b>{history[history.length - 1]}</b> was added to {props.text}
			</p>
			<IconButton name={props.icon} />
		</div>
	);
};

VoteReactionRecord.propTypes = {
	history: PropTypes.array,
	icon: PropTypes.object,
	text: PropTypes.string,
};
