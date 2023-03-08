import React, { useState} from 'react';
import styles from "./gallery.module.scss";
import { SearchBar } from "../searchBar";
import {PhotoGrid} from "../photoGrid/photoGrid";
import {Link} from "react-router-dom";
import {PATHS} from "../constants/path.constants";
import imgLike from "../../img/Vector 348 (Stroke).png";
import {usePhotos} from "../../customHooks/usePhotos";
import {Spinner} from "../spinner/spinner";

export const Gallery = () => {
    const [inputBreedId, setInputBreedId] = useState('');
    const limit = 25;

    const overlay = <img src={imgLike} className={styles.breedName} />

    const {photos, isLoading}  = usePhotos(inputBreedId, limit, overlay)
    return(
        <div className={styles.voting}>
            <SearchBar onChange={setInputBreedId}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <Link to={PATHS.home}>
                        <p className={styles.next} >&lt;</p>
                    </Link>
                    <p className={styles.vote}>GALLERY</p>
                </div>
                {isLoading ? <Spinner /> : <PhotoGrid photos={photos} />}
            </div>
        </div>
    )
}
