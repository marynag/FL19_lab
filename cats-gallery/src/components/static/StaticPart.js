import logo from '../img/Logo.png';
import voteTable from '../img/vote-table.png';
import petBreeds from '../img/pet-breeds.png';
import imageSearch from '../img/images-search.png';
import AddNavigationBlocks from './AddNavigationBlocks';
import './staticPart.css';

function handlerVoting(){
  console.log('VOTING')
}

function handlerBreeds(){
  console.log('BREEDS')
}

function handlerGallery(){
  console.log('GALLERY')
}


function StaticPart() {
  return (
    <div className="header_sticky">
            <img className="logo" src={logo} alt="logo" />
            <h1>Hi intern!</h1>
            <p className="greeting">Welcome to MI 2022 Front-end test</p>
            <p className="start">Lets start using The Cat API</p>
            <div className="descriptionImg">
              <AddNavigationBlocks imgname={voteTable} boxing='benefitBox1' text='VOTING' btn={handlerVoting}/>
              <AddNavigationBlocks imgname={petBreeds} boxing='benefitBox2' text='BREEDS'  btn={handlerBreeds}/>
              <AddNavigationBlocks imgname={imageSearch} boxing='benefitBox3' text='GALLERY'  btn={handlerGallery}/>              
            
            </div>
        </div>
  );
}

export default StaticPart;
