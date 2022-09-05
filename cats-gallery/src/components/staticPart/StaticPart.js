import logo from '../img/Logo.png';
import voteTable from '../img/vote-table.png';
import petBreeds from '../img/pet-breeds.png';
import imageSearch from '../img/images-search.png';
import AddNavigationBlocks from '../addNvagationBlock/AddNavigationBlocks.js';
import './staticPart.css';

function StaticPart() {
  return (
    <div className="header_sticky">
            <img className="logo" src={logo} alt="logo" />
            <h1>Hi intern!</h1>
            <p className="greeting">Welcome to MI 2022 Front-end test</p>
            <p className="start">Lets start using The Cat API</p>
            <div className="descriptionImg">
              <AddNavigationBlocks imgname={voteTable} className='benefitBox1' text='VOTING' btn='/voting'/>
              <AddNavigationBlocks imgname={petBreeds} className='benefitBox2' text='BREEDS'  btn='breeds/'/>
              <AddNavigationBlocks imgname={imageSearch} className='benefitBox3' text='GALLERY'  btn='/gallery'/>             
            
            </div>
        </div>
  );
}

export default StaticPart;
