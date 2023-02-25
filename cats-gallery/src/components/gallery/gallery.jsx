import React, { useState} from 'react';
import styles from "./gallery.module.scss";
import { SearchBar } from "../searchBar";
import {PhotoGrid} from "../photoGrid/photoGrid";

export const Gallery = () => {
    const [inputBreedId, setInputBreedId] = useState('');
    const limit = 25;

    return(
        <div className={styles.voting}>
            <SearchBar onChange={setInputBreedId}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>GALLERY</p>
                </div>
                <PhotoGrid limit={limit} breedId={inputBreedId}/>
            </div>
        </div>
    )
}
