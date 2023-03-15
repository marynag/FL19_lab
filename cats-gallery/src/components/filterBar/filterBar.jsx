import React, { useState } from 'react';
import styles from './filterBar.module.scss';
import { LIMITS, ORDER, TYPE } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../../store/selectors';
import IMG_UPDATE from '../../img/update.png';

export const FilterBar = ({ setState }) => {
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

	const order = ['None', ...ORDER];

	const type = ['None', ...TYPE];

	const handleOrder = (e) => setSelectedOrder(e.target.value);

	const handleType = (e) => setSelectedType(e.target.value);

	const handleBreed = (e) => setSelectedBreedId(e.target.value);

	const handleLimit = (e) => setSelectedLimit(e.target.value);

	const handleClick = () => {
		setState({
			limit: selectedLimit,
			order: selectedOrder,
			breedId: selectedBreedId,
			type: selectedType,
		});
	};

	return (
		<div className={styles.filterBar}>
			<div className={styles.filteredItem}>
				<p className={styles.filterLabel}>ORDER</p>
				<select className={styles.vote} onChange={(e) => handleOrder(e)}>
					{order.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>

			<div className={styles.filteredItem}>
				<p className={styles.filterLabel}>TYPE</p>
				<select className={styles.vote} onChange={(e) => handleType(e)}>
					{type.map((item) => (
						<option key={item} value={item}>
							{item}
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
					<img
						src={IMG_UPDATE}
						className={styles.reload}
						onClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
};
