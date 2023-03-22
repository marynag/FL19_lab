import React, { useState } from 'react';
import { LIMITS, ORDER } from '../../constants/constants';
import styles from './breeds.module.scss';
import { SearchBar } from '../searchBar';
import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../../store/selectors';
import { Link } from 'react-router-dom';
import { PATHS } from '../constants/path.constants';
import { usePhotos } from '../../customHooks';
import { Spinner } from '../spinner';
import { BreedOverlay, PhotoGrid } from '../photoGrid';
import { NEXT, SORT_ASC, SORT_DESC } from '../icons';
import { IconButton } from '../iconButton/iconButton';

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
	return (
		<div className={styles.breeds}>
			<SearchBar onChange={setSelectedBreedId} />
			<div className={styles.wraperImgBlokSearchImages}>
				<div className={styles.headerBreeds}>
					<Link to={PATHS.home}>
						<IconButton name={NEXT} />
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

					<IconButton name={SORT_ASC} setData={setOrder} data={ORDER[2]} />
					<IconButton name={SORT_DESC} setData={setOrder} data={ORDER[1]} />
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
