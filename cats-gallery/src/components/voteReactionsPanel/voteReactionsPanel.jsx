import styles from '../voting/voting.module.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import REACTIONS, { reactionsMap } from './voteReactionsPanel.constants';
import { VoteReactionRecord } from '../voteReactionRecord';
import { getTime } from '../voting/voting.utils';

export const VoteReactionsPanel = (props) => {
	const history = props.history;

	const [reactions, setReactions] = useState({});

	const handleReactionClick = (text) => {
		setReactions((prevState) => ({ ...prevState, [text]: getTime() }));
	};
	return (
		<div>
			<div className={styles.currentReactionBlock}>
				<div className={styles.currentReactionBlockWrapper}>
					{REACTIONS.map((reaction) => (
						<div
							key={reaction.text}
							className={`${styles.currentReaction} ${reaction.className}`}
							onClick={() => handleReactionClick(reaction.text)}
						>
							{React.createElement(reaction.component, {
								className: reaction.text,
							})}
						</div>
					))}
				</div>
			</div>
			{Object.entries(reactions).map((current) => (
				<>
					<VoteReactionRecord
						time={current[1]}
						text={current[0]}
						key={current[0]}
						icon={reactionsMap[current[0]]}
						history={history}
					/>
				</>
			))}
		</div>
	);
};

VoteReactionsPanel.propTypes = {
	history: PropTypes.array,
};
