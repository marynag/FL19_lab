import React, {useState} from 'react';
import ImgSort1 from '../../img/ba.png'
import ImgSort2 from '../../img/ab.png'
import { LIMITS } from './breed.constants'
import styles from './breeds.module.scss'
import { SearchingBar }  from '../searchingBar';
import { PhotoLoaderByBreed } from '../photoLoaders/photoLoaderByBreed/photoLoaderByBreed';
import { useSelector } from 'react-redux';
import {getBreedNameId} from "../../store/selectors";
import {GridPhotoLoader} from "../photoLoaders/gridPhotoLoader/gridPhotoLoader";

export const Breeds = () => {
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [limit, setLimit] = useState(LIMITS[0])

    const breedNameId = useSelector(getBreedNameId)

    const handleBreedIdChange = (event) => {
        setSelectedBreedId(event.target.value)
    }

    const handleLimitChange = (event) => {
        setLimit(event.target.value)
    }

    return(
        <div className={styles.breeds}>
            <SearchingBar onChange={setSelectedBreedId}/>
        <div className={styles.wraperImgBlokSearchImages}>
        <div className={styles.wraperImgBlokSearch}>
                <div className={styles.headerBreeds}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`} onChange={handleBreedIdChange}>
                        {breedNameId.map(current => <option key={current.id} value={current.id}>{current.name}</option> )}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`} onChange={handleLimitChange} >
                        {LIMITS.map(current => <option key={current} value={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={ImgSort1} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={ImgSort2} alt="sort" /></div>
                </div>
            </div>
            <div>
                {selectedBreedId ? (<PhotoLoaderByBreed breedId={selectedBreedId} limit={limit} />) :
                    <GridPhotoLoader limit='5'/> }
            </div>
        </div>           
    </div>
    )
}

