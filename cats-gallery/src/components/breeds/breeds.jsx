import React, { useState } from 'react';
import IMG_SORT_FORWARD from '../../img/sort-ab.png';
import IMG_SORT_BACKWARD from '../../img/sort-ba.png';
import IMG_SORT_FORWARD_HOVER from '../../img/sort-ab-hover.png';
import IMG_SORT_BACKWARD_HOVER from '../../img/sort-ba-hover.png';
import { LIMITS } from '../../constants/constants';
import styles from './breeds.module.scss';
import { SearchBar } from '../searchBar';
import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../../store/selectors';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants/path.constants';
import { usePhotos } from '../../customHooks';
import { Spinner } from '../spinner';
import { BreedOverlay, PhotoGrid } from '../photoGrid';

export const Breeds = () => {
	const [selectedBreedId, setSelectedBreedId] = useState();
	const [limit, setLimit] = useState(LIMITS[0]);
	const [order, setOrder] = useState('RAND');

	const breedNamesIdsSelected = useSelector(breedsNamesSelector);
	const breedNamesIds = Object.assign(
		{ '': 'All breeds' },
		breedNamesIdsSelected
	);

	const { photos, isLoading } = usePhotos(selectedBreedId, limit, order);

	const handleBreedIdChange = (event) => setSelectedBreedId(event.target.value);

	const handleLimitChange = (event) => setLimit(event.target.value);

	const handleSortForward = () => setOrder('ASC');

	const handleSortBackward = () => setOrder('DESC');
	return (
		<div className={styles.breeds}>
			<SearchBar onChange={setSelectedBreedId} />
			<div className={styles.wraperImgBlokSearchImages}>
				<div className={styles.headerBreeds}>
					<Link to={PATHS.home}>
						<p className={styles.next}>&lt;</p>
					</Link>
					<p className={styles.vote}>BREEDS</p>
					<select
						className={`${styles.vote} ${styles.breedSelect}`}
						onChange={handleBreedIdChange}
					>
						{Object.entries(breedNamesIds).map(([id, name]) => (
							<option key={id} value={id}>
								{name}
							</option>
						))}
					</select>
					<select
						className={`${styles.vote} ${styles.breedsLimit}`}
						onChange={handleLimitChange}
					>
						{LIMITS.map((current) => (
							<option key={current} value={current}>
								Limit: {current}
							</option>
						))}
					</select>
					<div className={styles.sortImg} onClick={handleSortForward}>
						<img className={styles.sort} src={IMG_SORT_FORWARD} alt='sort' />
						<img
							className={styles.sort}
							src={IMG_SORT_FORWARD_HOVER}
							alt='sort'
						/>
					</div>
					<div className={styles.sortImg} onClick={handleSortBackward}>
						<img className={styles.sort} src={IMG_SORT_BACKWARD} alt='sort' />
						<img
							className={styles.sort}
							src={IMG_SORT_BACKWARD_HOVER}
							alt='sort'
						/>
					</div>
				</div>
				{isLoading ? (
					<Spinner />
				) : (
					<PhotoGrid photos={photos} Overlay={BreedOverlay} />
				)}
			</div>
		</div>
	);
};
