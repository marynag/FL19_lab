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
import IMG_UPLOAD from '../../img/upload.png';
import IMG_UPLOAD_HOVER from '../../img/upload-white.png';

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
					<div className={styles.uploadPhoto}>
						<img src={IMG_UPLOAD} alt='upload' />
						<img src={IMG_UPLOAD_HOVER} alt='upload' />
						<p>UPLOAD</p>
					</div>
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
