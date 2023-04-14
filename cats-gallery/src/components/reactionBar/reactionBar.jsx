import styles from './reaction.module.scss';
import React from 'react';
import { REACTIONS } from './reactionBar.constants';
import { IconButton } from '../iconButton/iconButton';

export const ReactionBar = () => {
	return (
		<div className={styles.reaction}>
			{REACTIONS.map((current) => (
				<>
					<IconButton iconName={current} />
				</>
			))}
		</div>
	);
};
