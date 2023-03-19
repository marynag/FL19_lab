import styles from './reaction.module.scss';
import React from 'react';
import { IconButton } from '../iconButton/iconButton';
import { REACTIONS } from '../constants/constants';

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
