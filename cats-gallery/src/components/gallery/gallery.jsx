import React, {useState} from 'react';
import styles from "./gallery.module.scss";
import { SearchingBar } from "../searchingBar";
import {GridPhotoLoader} from "../photoLoaders/gridPhotoLoader/gridPhotoLoader";
import {PhotoLoaderByBreed} from "../photoLoaders/photoLoaderByBreed/photoLoaderByBreed";

export const Gallery = () => {
    const [inputBreed, setInputBreed] = useState('');
    return(
        <div className={styles.voting}>
            <SearchingBar onChange={setInputBreed}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>GALLERY</p>
                </div>
                {inputBreed ?
                    <PhotoLoaderByBreed breedId={inputBreed} limit='25'/> :
                    <GridPhotoLoader limit='25'/> }
            </div>
        </div>
    )
}
