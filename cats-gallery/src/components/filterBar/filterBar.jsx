import React, { useState } from 'react';
import styles from './filterBar.module.scss';
import { LIMITS, ORDER, TYPE, TYPE_NAME } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../../store/selectors';
import IMG_UPDATE from '../../img/update.png';
import IMG_UPDATE_HOVER from '../../img/update-white.png';

export const FilterBar = ({ setState, setBreed }) => {
	const [selectedOrder, setSelectedOrder] = useState();
	const [selectedType, setSelectedType] = useState();
	const [selectedBreedId, setSelectedBreedId] = useState();
	const [selectedLimit, setSelectedLimit] = useState(LIMITS[0]);

	const limit = LIMITS.map((item) => {
		return {
			limit: item,
			text: item + ' items per page',
		};
	});

	const breedNamesIdsSelected = useSelector(breedsNamesSelector);
	const breedNamesIds = Object.assign({ '': 'None' }, breedNamesIdsSelected);

	const typeStart = {
		type: '',
		text: 'All',
	};

	const typeDefault = TYPE.map((item, index) => {
		return {
			type: item,
			text: TYPE_NAME[index],
		};
	});

	const type = [typeStart, ...typeDefault];

	const handleOrder = (e) => setSelectedOrder(e.target.value);

	const handleType = (e) => setSelectedType(e.target.value);

	const handleBreed = (e) => setSelectedBreedId(e.target.value);

	const handleLimit = (e) => setSelectedLimit(e.target.value);

	const handleClick = () => {
		setState({
			limit: selectedLimit,
			order: selectedOrder,
			type: selectedType,
		});
		setBreed(selectedBreedId);
	};

	return (
		<div className={styles.filterBar}>
			<div className={styles.filteredItem}>
				<p className={styles.filterLabel}>ORDER</p>
				<select className={styles.vote} onChange={(e) => handleOrder(e)}>
					{ORDER.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>

			<div className={styles.filteredItem}>
				<p className={styles.filterLabel}>TYPE</p>
				<select className={styles.vote} onChange={(e) => handleType(e)}>
					{type.map(({ type, text }) => (
						<option key={type} value={type}>
							{text}
						</option>
					))}
				</select>
			</div>

			<div className={styles.filteredItem}>
				<p className={styles.filterLabel}>BREED</p>
				<select className={styles.vote} onChange={(e) => handleBreed(e)}>
					{Object.entries(breedNamesIds).map(([id, name]) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</select>
			</div>

			<div className={styles.filteredItem}>
				<p className={styles.filterLabel}>LIMIT</p>
				<div className={styles.selectionReload}>
					<select className={styles.vote} onChange={(e) => handleLimit(e)}>
						{limit.map(({ limit, text }) => (
							<option key={limit} value={limit}>
								{text}
							</option>
						))}
					</select>
					<div className={styles.uploadContainer}>
						<img src={IMG_UPDATE} onClick={handleClick} alt='update' />
						<img src={IMG_UPDATE_HOVER} onClick={handleClick} alt='update' />
					</div>
				</div>
			</div>
		</div>
	);
};
