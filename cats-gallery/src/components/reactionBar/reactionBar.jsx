import styles from './reaction.module.scss';
import React from 'react';
import { REACTIONS } from './reactionBar.constants';

export const ReactionBar = () => {
	return (
		<div className={styles.reaction}>
			{REACTIONS.map((current) => (
				<>
					{React.createElement(current, {
						searchBar: 'searchBar',
						className: 'reaction',
					})}
				</>
			))}
		</div>
	);
};
