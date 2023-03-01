import React, { useState} from 'react';
import ImgSort1 from '../../img/ba.png'
import ImgSort2 from '../../img/ab.png'
import { LIMITS } from './breed.constants'
import styles from './breeds.module.scss'
import { SearchBar }  from '../searchBar';
import { useSelector } from 'react-redux';
import {getBreedNames} from "../../store/selectors";
import {PhotoGrid} from "../photoGrid/photoGrid";
import {Link} from "react-router-dom";
import {PATHS} from "../constants/path.constants";

export const Breeds = () => {
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [limit, setLimit] = useState(LIMITS[0])

    const breedNamesIds = useSelector(getBreedNames)

    const handleBreedIdChange = (event) => {
        setSelectedBreedId(event.target.value)
    }

    const handleLimitChange = (event) => {
        setLimit(event.target.value)
    }

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
                        {breedNamesIds.map(current => <option key={current.id} value={current.id}>{current.name}</option> )}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`} onChange={handleLimitChange} >
                        {LIMITS.map(current => <option key={current} value={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={ImgSort1} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={ImgSort2} alt="sort" /></div>
                </div>
                <PhotoGrid breedId={selectedBreedId} limit={limit}/>
            </div>
        </div>
    )
}

