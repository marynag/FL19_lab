import vector from '../../img/Vector.png';
import vector2 from '../../img/Vector (Stroke).png';
import vector3 from '../../img/Vector 348 (Stroke).png';
import vector4 from '../../img/Vector (Stroke) (1).png';
import styles from './searchImg.module.scss';

export const SearchImg = () => {
	return (
		<div className={styles.searchingLine}>
			<div className={styles.search}>
				<input
					type='text'
					column
					placeholder='Search for breeds by name'
					className={styles.searchInput}
				/>
				<div className={styles.searchItem}>
					<img src={vector} alt='girl and pet' className={styles.search_img} />
				</div>
			</div>
			<div className={styles.reaction}>
				<img src={vector2} alt='smile' />
			</div>
			<div className={styles.reaction}>
				<img src={vector3} alt='heart' />
			</div>
			<div className={styles.reaction}>
				<img src={vector4} alt='sad' />
			</div>
		</div>
	);
};
