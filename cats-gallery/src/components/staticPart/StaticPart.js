import logo from '../img/Logo.png';
import voteTable from '../img/vote-table.png';
import petBreeds from '../img/pet-breeds.png';
import imageSearch from '../img/images-search.png';
import AddNavigationBlocks from '../addNvagationBlock/AddNavigationBlocks.js';
import styles from './staticPart.module.scss';

function StaticPart() {
  return (
    <div className={styles.header_sticky}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h1>Hi intern!</h1>
            <p className={styles.greeting}>Welcome to MI 2022 Front-end test</p>
            <p className={styles.start}>Lets start using The Cat API</p>
            <div className={styles.descriptionImg}>
              <AddNavigationBlocks imgname={voteTable} className='benefitBox1' text='VOTING' btn='/voting'/>
              <AddNavigationBlocks imgname={petBreeds} className='benefitBox2' text='BREEDS'  btn='breeds/'/>
              <AddNavigationBlocks imgname={imageSearch} className='benefitBox3' text='GALLERY'  btn='/gallery'/>            

            </div>
        </div>
  );
}

export default StaticPart;
