import React, { useState } from 'react';
import ImgSort1 from '../../img/ba.png'
import ImgSort2 from '../../img/ab.png'
import { LIMITS, GRID_PHOTO_CLASSES} from './breed.constants'
import styles from './breeds.module.scss'
import { SearchImg }  from '../searchImg';
import { LoadPhotoByBreed } from '../loadPhotoByBreed/loadPhotoByBreed';
import { useSelector } from 'react-redux';


export const Breeds = () => {
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [breedName, setBreedName] = useState('');
    const [imgAmount, setImgAmount] = useState(GRID_PHOTO_CLASSES.slice(0,5))
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
        const selectedLimit = event.target.value;
        const imgLength = GRID_PHOTO_CLASSES.slice(0,selectedLimit)
        setImgAmount(imgLength)
    }

    return(
        <div className={styles.breeds}>
            <SearchImg onChange={setInputId}/>
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
                {imgAmount.map(current => <LoadPhotoByBreed breedId={selectedBreedId} className={current} breedName={breedName} key={current} imgId={inputId} />)}
            </div>
        </div>           
    </div>
    )
}

