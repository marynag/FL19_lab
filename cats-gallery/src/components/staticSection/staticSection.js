import logo from '../../img/Logo.png';
import voteTable from '../../img/vote-table.png';
import petBreeds from '../../img/pet-breeds.png';
import imageSearch from '../../img/images-search.png';
import {NavigationBlocks} from '../navigationBlock';
import styles from './staticSection.module.scss';
import { BREEDS_PATH, VOTING_PATH, GALLERY_PATH } from '../constants/path.constants';


export const StaticSection = () =>{
  return (
    <div className={styles.header_sticky}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h1>Hi intern!</h1>
            <p className={styles.greeting}>Welcome to MI 2022 Front-end test</p>
            <p className={styles.start}>Lets start using The Cat API</p>
            <div className={styles.descriptionImg}>
              <NavigationBlocks imgname={petBreeds} className='benefitBox2' text='BREEDS'  path={BREEDS_PATH} />
              <NavigationBlocks imgname={imageSearch} className='benefitBox3' text='GALLERY'  path={GALLERY_PATH}/>
              <NavigationBlocks imgname={voteTable} className='benefitBox1' text='VOTING' path={VOTING_PATH}/>
            </div>
        </div>
  );
}

