import styles from './reaction.module.scss';
import React from 'react';
import { REACTIONS } from './reactionBar.constants';

export const ReactionBar = () => {
	return (
		<>
			{REACTIONS.map((current) => (
				<div key={current.name} className={styles.reaction}>
					<img src={current.img} alt={current.name} />
				</div>
			))}
		</>
	);
};
