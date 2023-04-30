import React, { useState } from 'react';
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
import { IconButton } from '../iconButton/iconButton';
import { NEXT, SORT_ASC, SORT_DESC } from '../iconButton/iconButton.constants';

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

	const handleSortAsc = () => setOrder('ASC');
	const handleSortDesc = () => setOrder('DESC');

	const handleBreedIdChange = (event) => setSelectedBreedId(event.target.value);

	const handleLimitChange = (event) => setLimit(event.target.value);
	return (
		<div className={styles.breeds}>
			<SearchBar onChange={setSelectedBreedId} />
			<div className={styles.wraperImgBlokSearchImages}>
				<div className={styles.headerBreeds}>
					<Link to={PATHS.home}>
						<IconButton iconName={NEXT} />
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
					<IconButton
						iconName={SORT_ASC}
						onClick={handleSortAsc}
						className='sort'
					/>
					<IconButton
						iconName={SORT_DESC}
						onClick={handleSortDesc}
						className='sort'
					/>
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
