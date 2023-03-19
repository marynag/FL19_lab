import LOGO from '../../svg/logo.svg';
import ICON_VOTE from '../../svg/vote-table.svg';
import ICON_BREEDS from '../../svg/pet-breeds.svg';
import ICON_GALLERY from '../../svg/images-search.svg';
import { NavigationBlocks } from '../navigationBlock';
import styles from './staticSection.module.scss';
import { PATHS } from '../constants/path.constants';

export const StaticSection = () => {
	return (
		<div className={styles.header_sticky}>
			<img className={styles.logo} src={LOGO} alt='logo' />
			<h1>Hi intern!</h1>
			<p className={styles.greeting}>Welcome to MI 2022 Front-end test</p>
			<p className={styles.start}>Lets start using The Cat API</p>
			<div className={styles.descriptionImg}>
				<NavigationBlocks
					imgname={ICON_BREEDS}
					className='benefitBox2'
					text='BREEDS'
					path={PATHS.breeds}
				/>
				<NavigationBlocks
					imgname={ICON_GALLERY}
					className='benefitBox3'
					text='GALLERY'
					path={PATHS.gallery}
				/>
				<NavigationBlocks
					imgname={ICON_VOTE}
					className='benefitBox1'
					text='VOTING'
					path={PATHS.voting}
				/>
			</div>
		</div>
	);
};
