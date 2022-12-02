import React from 'react';
import vector5 from '../../img/ba.png';
import vector6 from '../../img/ab.png';
import { BREED_OPTIONS, LIMITS, CLASSES_FOR_DIVS } from './breed.constants';
import styles from './breeds.module.scss';
import { SearchImg } from '../searchImg';
import { PhotoLoader } from '../photoLoader';

export const Breeds = () => {
	return (
		<div className={styles.breeds}>
			<SearchImg />
			<div className={styles.wraperImgBlokSearchImages}>
				<div className={styles.wraperImgBlokSearch}>
					<div className={styles.headerBreeds}>
						<p className={styles.next}>&lt;</p>
						<p className={styles.vote}>BREEDS</p>
						<select className={`${styles.vote} ${styles.breedSelect}`}>
							{BREED_OPTIONS.map((current) => (
								<option key={current}>{current}</option>
							))}
						</select>
						<select className={`${styles.vote} ${styles.breedsLimit}`}>
							{LIMITS.map((current) => (
								<option key={current}>Limit: {current}</option>
							))}
						</select>
						<div className={styles.sortImg}>
							<img className={styles.sort} src={vector5} alt='sort' />
						</div>
						<div className={styles.sortImg}>
							<img
								className={`${styles.sort} ${styles.sort1}`}
								src={vector6}
								alt='sort'
							/>
						</div>
					</div>
				</div>
				<div className={styles.catImgBreedsWrapper}>
					{CLASSES_FOR_DIVS.map((current) => (
						<PhotoLoader addClass={current} />
					))}
				</div>
			</div>
		</div>
	);
};
