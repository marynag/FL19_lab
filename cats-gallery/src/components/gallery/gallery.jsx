import React, { useState } from 'react';
import styles from './gallery.module.scss';
import { SearchBar } from '../searchBar';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants/path.constants';
import { usePhotos } from '../../customHooks';
import { Spinner } from '../spinner';
import { HeartOverlay, PhotoGrid } from '../photoGrid';
import { IconButton } from '../iconButton/iconButton';
import { NEXT, UPLOAD } from '../iconButton/iconButton.constants';

export const Gallery = () => {
	const [searchBreedId, setSearchBreedId] = useState();
	//TODO add selector
	const limit = 25;
	const order = 'RAND';

	const { photos, isLoading } = usePhotos(searchBreedId, limit, order);
	return (
		<div className={styles.voting}>
			<SearchBar onChange={setSearchBreedId} />
			<div className={styles.votingWraper}>
				<div className={styles.votingBlockName}>
					<Link to={PATHS.home}>
						<IconButton iconName={NEXT} />
					</Link>
					<p className={styles.vote}>GALLERY</p>
					<div className={styles.uploadPhoto}>
						<IconButton iconName={UPLOAD} />
						<p>UPLOAD</p>
					</div>
				</div>
				{isLoading ? (
					<Spinner />
				) : (
					<PhotoGrid photos={photos} Overlay={HeartOverlay} />
				)}
			</div>
		</div>
	);
};
