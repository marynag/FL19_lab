import React from 'react';
import logo from './img/Logo.png';
import voteTable from './img/vote-table.png';
import petBreeds from './img/pet-breeds.png';
import imageSearch from './img/images-search.png';


var classNames = require('classnames');
function handlerVoting(){
  console.log('VOTING')
}

function handlerBreeds(){
  console.log('BREEDS')
}

function handlerGallery(){
  console.log('GALLERY')
}


function AddNavigationBlocks(props){
  let divclasses=classNames('benefitBox', props.boxing)
  return(
    <div className='boxImgWraper'>
      <div className={divclasses}>
        <img src={props.imgname}  alt="benefit" />        
      </div>
      <button className="btn" onClick={props.btn}>{props.text}</button>
    </div>
  )
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
