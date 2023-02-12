import React, {useState} from 'react';
import styles from "./gallery.module.scss";
import { LoadPhotoByBreed } from "../loadPhotoByBreed/loadPhotoByBreed";
import {GRID_PHOTO_CLASSES} from "./gallery.utils";
import {SearchImg} from "../searchImg";

export const Gallery = () => {
    const [inputBreed, setInputBreed] = useState('');
    return(
        <div className={styles.voting}>
            <SearchImg onChange={setInputBreed}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                </div>

                <div className={styles.catImgBreedsWrapper}>
                    {GRID_PHOTO_CLASSES.map(current => <LoadPhotoByBreed className={current} key={current} imgId={inputBreed} /> )}
                </div>

            </div>
        </div>
    )
}
