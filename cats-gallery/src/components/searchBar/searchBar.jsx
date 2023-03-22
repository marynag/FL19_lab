import styles from './searchBar.module.scss';
import React from 'react';
import { ReactionBar } from '../reactionBar';
import { IconSearch, SEARCH } from '../../svg';
import { IconButton } from '../iconButton/iconButton';

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
				{/*<IconSearch onChange={onChange} input={inputRef} />*/}
				<IconButton name={SEARCH} />
			</div>
			<ReactionBar />
		</div>
	);
};
