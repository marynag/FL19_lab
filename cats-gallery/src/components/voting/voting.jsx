import React, { useRef } from 'react';
import styles from './voting.module.scss';
import { VotePhoto } from '../votePhoto';
import { SearchBar } from '../searchBar';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants/path.constants';
import { IconButton } from '../iconButton/iconButton';
import { VoteReactionsPanel } from '../voteReactionsPanel/voteReactionsPanel';
import { NEXT } from '../iconButton/iconButton.constants';

export const Voting = () => {
	const historyStorage = useRef([]);

	return (
		<div className={styles.voting}>
			<SearchBar />
			<div className={styles.votingWraper}>
				<div className={styles.votingBlockName}>
					<Link to={PATHS.home}>
						<IconButton iconName={NEXT} />
					</Link>
					<p className={styles.vote}>BREEDS</p>
				</div>

				<VotePhoto history={historyStorage.current} />

				<VoteReactionsPanel history={historyStorage.current} />
			</div>
		</div>
	);
};
