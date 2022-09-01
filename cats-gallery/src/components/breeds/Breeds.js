import React from 'react';

import Vector5 from '../img/ba.png'
import Vector6 from '../img/ab.png'
import {BREED_OPTIONS, LIMITS, CLASSES_FOR_DIVS} from './breed.utils.js'
import './breeds.css'
import LoadImg from '../loadImg/loadImg';
import SearchImg from '../searchImg/SearchImg.js'


function Breeds(){
    return(
        <div className="breeds">
            <SearchImg/>
        <div className='wraperImgBlokSearchImages'>
        <div className="wraperImgBlokSearch">
                <div className="headerBreeds">
                    <p className="next">&lt;</p>
                    <p className="vote">BREEDS</p>
                    <select className="vote breedSelect">
                        {BREED_OPTIONS.map(current => <option key={current}>{current}</option> )}
                    </select>
                    <select className="vote breedsLimit">
                        {LIMITS.map(current => <option key={current}>Limit: {current}</option> )} 
                    </select>
                    <div className="sortImg"><img className="sort" src={Vector5} alt="sort" /></div>
                    <div className="sortImg"><img className="sort sort1" src={Vector6} alt="sort" /></div>
                </div>
            </div>
            <div className='catImgBreedsWrapper'>
                {CLASSES_FOR_DIVS.map(current => <LoadImg addClass={current}/> )}               
            </div>
        </div>           
    </div>
    )
}


export default Breeds
