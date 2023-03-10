import React, { useState } from 'react';
import ImgSort1 from '../../img/ba.png'
import ImgSort2 from '../../img/ab.png'
import { LIMITS } from './breed.constants'
import styles from './breeds.module.scss'
import { SearchBar }  from '../searchBar';
import { useSelector } from 'react-redux';
import {breedsNamesSelector} from "../../store/selectors";
import {PhotoGrid} from "../photoGrid/photoGrid";
import {Link} from "react-router-dom";
import {PATHS} from "../constants/path.constants";
import {usePhotos} from "../../customHooks/usePhotos";
import {Spinner} from "../spinner/spinner";
import {BreedOverlay} from "../photoGrid/overlays/breedOverlay";

export const Breeds = () => {
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [limit, setLimit] = useState(LIMITS[0])

    const breedNamesIdsSelected = useSelector(breedsNamesSelector)
    const breedNamesIds = Object.assign({'': 'All breeds'}, breedNamesIdsSelected);

    const {photos, isLoading} = usePhotos(selectedBreedId, limit)

    const handleBreedIdChange = event => setSelectedBreedId(event.target.value);

    const handleLimitChange = event => setLimit(event.target.value);

    return(
        <div className={styles.breeds}>
            <SearchBar onChange={setSelectedBreedId}/>
            <div className={styles.wraperImgBlokSearchImages}>
                <div className={styles.headerBreeds}>
                    <Link to={PATHS.home}>
                        <p className={styles.next} >&lt;</p>
                    </Link>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`} onChange={handleBreedIdChange}>
                        {Object.entries(breedNamesIds).map(([id, name]) => <option key={id} value={id}>{name}</option> )}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`} onChange={handleLimitChange} >
                        {LIMITS.map(current => <option key={current} value={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={ImgSort1} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={ImgSort2} alt="sort" /></div>
                </div>
                {isLoading ? <Spinner /> : <PhotoGrid photos={photos}  Overlay={BreedOverlay}/>}
            </div>
        </div>
    )
}

