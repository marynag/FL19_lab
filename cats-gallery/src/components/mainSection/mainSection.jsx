import './mainSection.module.scss';
import girlDog from '../../svg/girl-and-pet.svg';
import styles from './mainSection.module.scss';

export const MainSection = () => {
	return (
		<div className={styles.girlDog}>
			<img className={styles.imgGirlDog} src={girlDog} alt='girl and pet' />
		</div>
	);
};
