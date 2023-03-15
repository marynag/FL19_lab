import React, { useState } from 'react';
import styles from './gallery.module.scss';
import { SearchBar } from '../searchBar';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants/path.constants';
import { usePhotos } from '../../customHooks';
import { Spinner } from '../spinner';
import { HeartOverlay, PhotoGrid } from '../photoGrid';
import { FilterBar } from '../filterBar/filterBar';
import { LIMITS } from '../../constants/constants';

export const Gallery = () => {
	//TODO make common searchBreedId for FilterBar and SearchBar
	const [searchBreedId, setSearchBreedId] = useState();
	const [selectedAttributes, setSelectedAttributes] = useState({
		limit: LIMITS[0],
	});

	const { photos, isLoading } = usePhotos(
		selectedAttributes.breedId,
		selectedAttributes.limit,
		selectedAttributes.order,
		selectedAttributes.type
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

				<FilterBar setState={setSelectedAttributes} />

				{isLoading ? (
					<Spinner />
				) : (
					<PhotoGrid photos={photos} Overlay={HeartOverlay} />
				)}
			</div>
		</div>
	);
};
