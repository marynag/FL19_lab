import React, { useState } from 'react';
import ImgSort1 from '../../img/ba.png'
import ImgSort2 from '../../img/ab.png'
import { LIMITS } from './breed.constants'
import styles from './breeds.module.scss'
import { SearchingBar }  from '../searchingBar';
import { BreedsPhotoLoader } from '../breedsPhotoLoader/breedsPhotoLoader';
import { useSelector } from 'react-redux';

export const Breeds = () => {
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [breedName, setBreedName] = useState('');
    const [limit, setLimit] = useState(LIMITS[0])
    const [inputId, setInputId] = useState();

    const breedInfo = useSelector(state => state.breeds)

    const breed = breedInfo.reduce((acc, item) =>{
        acc[item.name]=item.id
        return acc
    }, {})

    const breeds = Object.keys(breed)
    const breedNameId = breed

    const handleBreedChange = (event) => {
        const selectedBreed=event.target.value
        setSelectedBreedId(breedNameId[selectedBreed])
        setBreedName(selectedBreed)
    }

    const handleLimitChange = (event) => {
        setLimit(event.target.value)
    }

    return(
        <div className={styles.breeds}>
            <SearchingBar onChange={setInputId}/>
        <div className={styles.wraperImgBlokSearchImages}>
        <div className={styles.wraperImgBlokSearch}>
                <div className={styles.headerBreeds}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`} onChange={handleBreedChange}>
                        {breeds ? breeds.map(current => <option key={current}>{current}</option> ): null}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`} onChange={handleLimitChange} >
                        {LIMITS.map(current => <option key={current} value={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={ImgSort1} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={ImgSort2} alt="sort" /></div>
                </div>
            </div>
            <div className={styles.catImgBreedsWrapper}>
                <BreedsPhotoLoader breedId={selectedBreedId} breedName={breedName} imgId={inputId} limit={limit}/>
            </div>
        </div>           
    </div>
    )
}

