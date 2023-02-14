import React, {useState} from 'react';
import styles from "./gallery.module.scss";
import { BreedsPhotoLoader } from "../breedsPhotoLoader/breedsPhotoLoader";
import { SearchingBar } from "../searchingBar";;

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

                <div className={styles.catImgBreedsWrapper}>
                    <BreedsPhotoLoader imgId={inputBreed} limit='25'/>
                </div>

            </div>
        </div>
    )
}
