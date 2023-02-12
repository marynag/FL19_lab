import React, {useState} from 'react';
import styles from "./gallery.module.scss";
import { LoadPhotoByBreed } from "../loadPhotoByBreed/loadPhotoByBreed";
import imgSearch from "../../img/Vector.png";
import {GRID_PHOTO_CLASSES, REACTIONS} from "./gallery.utils";

export const Gallery = () => {
    const [inputBreed, setInputBreed] = useState('');
    const [enteredBreed, setEnteredBreed] = useState('')

    const handleBreedChange = (event) => {
        const breed=event.target.value
        setInputBreed(breed)
    }
    
    const handleBreed = () => {
        setEnteredBreed(inputBreed)
    }


    return(
        <div className={styles.voting}>
            <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} onChange={handleBreedChange}/>
                    <div className={styles.searchItem} onClick={handleBreed}><img src={imgSearch} alt="search" className={styles.search_img}/></div>
                </div>
                { REACTIONS.map(current => (<div key={current.name} className={styles.reaction}>
                    <img src={current.img} alt={current.name}/>
                </div>))}
            </div>


            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                </div>

                <div className={styles.catImgBreedsWrapper}>
                    {GRID_PHOTO_CLASSES.map(current => <LoadPhotoByBreed breed={enteredBreed} className={current} key={current}/> )}
                </div>

            </div>
        </div>
    )
}
