import styles from './searchBar.module.scss';
import React from 'react';
import { ReactionBar } from '../reactionBar';
import { IconSearch } from '../../svg';

export const SearchBar = ({ onChange }) => {
	const inputRef = React.createRef();

	return (
		<div className={styles.searchingLine}>
			<div className={styles.search}>
				<input
					type='text'
					placeholder='Search for breeds by name'
					className={styles.searchInput}
					ref={inputRef}
				/>
				<IconSearch onChange={onChange} input={inputRef} />
			</div>
			<ReactionBar />
		</div>
	);
};
