import React from 'react';
import Vector5 from '../img/ba.png'
import Vector6 from '../img/ab.png'
import {BREED_OPTIONS, LIMITS, CLASSES_FOR_DIVS} from './breed.constants'
import styles from './breeds.module.scss'
import Loader from '../Loader/Loader';
import SearchImg from '../searchImg/SearchImg.js'
import classNames from 'classnames';


function Breeds(){
    return(
        <div className={styles.breeds}>
            <SearchImg/>
        <div className={styles.wraperImgBlokSearchImages}>
        <div className={styles.wraperImgBlokSearch}>
                <div className={styles.headerBreeds}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`}>
                        {BREED_OPTIONS.map(current => <option key={current}>{current}</option> )}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`}>
                        {LIMITS.map(current => <option key={current}>Limit: {current}</option> )} 
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={Vector5} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={Vector6} alt="sort" /></div>
                </div>
            </div>
            <div className={styles.catImgBreedsWrapper}>
                {CLASSES_FOR_DIVS.map(current => <Loader addClass={current}/> )}               
            </div>
        </div>           
    </div>
    )
}


export default Breeds
