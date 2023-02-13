import React, {useState} from 'react';
import styles from "./gallery.module.scss";
import { LoadPhotoByBreed } from "../loadPhotoByBreed/loadPhotoByBreed";
import { SearchImg } from "../searchImg";;

export const Gallery = () => {
    const [inputBreed, setInputBreed] = useState('');
    return(
        <div className={styles.voting}>
            <SearchImg onChange={setInputBreed}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>GALLERY</p>
                </div>

                <div className={styles.catImgBreedsWrapper}>
                    <LoadPhotoByBreed imgId={inputBreed} limit='25'/>
                </div>

            </div>
        </div>
    )
}
