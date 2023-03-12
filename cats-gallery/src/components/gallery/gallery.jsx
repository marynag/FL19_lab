import React, { useState} from 'react';
import styles from "./gallery.module.scss";
import { SearchBar } from "../searchBar";
import {PhotoGrid} from "../photoGrid/photoGrid";
import {Link} from "react-router-dom";
import {PATHS} from "../constants/path.constants";
import {usePhotos} from "../../customHooks/usePhotos";
import {Spinner} from "../spinner/spinner";
import {HeartOverlay} from "../photoGrid/overlays/heartOverlay";

export const Gallery = () => {
    const [searchBreedId, setSearchBreedId] = useState();
    //TODO add selector
    const limit = 25;

    const {photos, isLoading}  = usePhotos(searchBreedId, limit)
    return(
        <div className={styles.voting}>
            <SearchBar onChange={setSearchBreedId}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <Link to={PATHS.home}>
                        <p className={styles.next} >&lt;</p>
                    </Link>
                    <p className={styles.vote}>GALLERY</p>
                </div>
                {isLoading ? <Spinner /> : <PhotoGrid photos={photos} Overlay={HeartOverlay} />}
            </div>
        </div>
    )
}
