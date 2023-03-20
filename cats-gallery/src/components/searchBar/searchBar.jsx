import styles from './searchBar.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../../store/selectors';
import { ReactionBar } from '../reactionBar';
import { IconSearch } from '../../svg/icons';

export const SearchBar = ({ onChange }) => {
	const inputRef = React.createRef();
	const breedNamesIds = useSelector(breedsNamesSelector);

	const handleClick = () => {
		const search = inputRef.current.value.toLowerCase();

		if (!search) {
			onChange(undefined);
			return;
		}

		const matchedBreedId = Object.entries(breedNamesIds).find((item) => {
			const name = item[1];
			return name.toLowerCase().includes(search);
		});

		onChange(matchedBreedId?.[0]);
	};

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
