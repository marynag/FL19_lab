import React, { useState } from 'react';
import styles from './gallery.module.scss';
import { SearchBar } from '../searchBar';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants/path.constants';
import { usePhotos } from '../../customHooks';
import { Spinner } from '../spinner';
import { HeartOverlay, PhotoGrid } from '../photoGrid';
import { LIMITS } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../../store/selectors';
import { FilterBar } from '../filterBar/filterBar';

export const Gallery = () => {
	const [searchBreedId, setSearchBreedId] = useState();
	//TODO add selector
	const limit = LIMITS.map((item) => {
		return {
			length: item,
			text: item + ' items per page',
		};
	});

	const breedNamesIdsSelected = useSelector(breedsNamesSelector);
	const breedNamesIds = Object.assign({ '': 'None' }, breedNamesIdsSelected);

	const order = 'RAND';

	const { photos, isLoading } = usePhotos(
		searchBreedId,
		limit[3].length,
		order
	);
	return (
		<div className={styles.voting}>
			<SearchBar onChange={setSearchBreedId} />
			<div className={styles.votingWraper}>
				<div className={styles.votingBlockName}>
					<Link to={PATHS.home}>
						<p className={styles.next}>&lt;</p>
					</Link>
					<p className={styles.vote}>GALLERY</p>
					<p className={styles.uploadPhoto}>UPLOAD</p>
				</div>

				<FilterBar />

				{isLoading ? (
					<Spinner />
				) : (
					<PhotoGrid photos={photos} Overlay={HeartOverlay} />
				)}
			</div>
		</div>
	);
};
