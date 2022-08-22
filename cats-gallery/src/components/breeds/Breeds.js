import React from 'react';
import Vector from '../img/Vector.png'
import Vector2 from '../img/Vector (Stroke).png'
import Vector3 from '../img/Vector 348 (Stroke).png'
import Vector4 from '../img/Vector (Stroke) (1).png'
import Vector5 from '../img/ba.png'
import Vector6 from '../img/ab.png'
import {BREED_OPTIONS, LIMITS, CLASSES_FOR_DIVS} from './breed.utils.js'
import './breeds.css'
import LoadImg from '../loadImg/loadImg';


function Breeds(){
    return(
        <div className="breedsBlock ">
            <div className="searchingLine">
                <div className="search ">
                    <input type="text"  column placeholder="Search for breeds by name" className="searchInput"/>                   
                    <div className="searchItem"><img src={Vector} alt="girl and pet" className="search_img"/></div>
                </div>            
                <div className="reaction "><img src={Vector2} alt="smile"/></div>
                <div className="reaction "><img src={Vector3} alt="heart"/></div>
                <div className="reaction "><img src={Vector4} alt="sad"/></div>
            </div> 

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
