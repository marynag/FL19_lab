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
	const [searchBreedId, setSearchBreedId] = useState();
	const [selectedAttributes, setSelectedAttributes] = useState({
		limit: LIMITS[0],
	});

	const { photos, isLoading } = usePhotos(
		searchBreedId,
		selectedAttributes.limit,
		selectedAttributes.order,
		selectedAttributes.type
	);

	const display = photos.length ? (
		<PhotoGrid photos={photos} Overlay={HeartOverlay} />
	) : (
		<p className={styles.notFound}>No item found</p>
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

				<FilterBar
					setState={setSelectedAttributes}
					setBreed={setSearchBreedId}
				/>

				{isLoading ? <Spinner /> : display}
			</div>
		</div>
	);
};
