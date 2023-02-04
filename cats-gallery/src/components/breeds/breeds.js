import React, {useEffect, useState} from 'react';
import vector5 from '../../img/ba.png'
import vector6 from '../../img/ab.png'
import { LIMITS, CLASSES_FOR_DIVS} from './breed.constants'
import styles from './breeds.module.scss'
import {SearchImg}  from '../searchImg';
import {PhotoLoader}  from '../photoLoader';
import { IMG_INFO} from "../constants/constants";
import { LoadPhotoByBreed } from "../gallery/loadPhotoByBreed";


export const Breeds = () => {
    const [breedInfo, setBereedInfo] = useState()
    const [breedList, setBereedList] = useState()
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [breedNameId, setBreedNameId] = useState();
    const [imgAmount, setImgAmount] = useState(CLASSES_FOR_DIVS.slice(0,5))


    useEffect(() =>{
        const result = fetch(IMG_INFO)
            .then(response => response.json())
            .then(response =>setBereedInfo(response))
    }, [])

    useEffect(()=>{
        if(breedInfo){
            const breed = breedInfo.reduce((acc, item) =>{
                acc[item.name]=item.id
                return acc
            }, {})

            const breedName = Object.keys(breed)

            setBereedList(breedName)
            setBreedNameId(breed)
        }

    },[breedInfo])

    const handleBreedChange = (event) => {
        const selectedBreed=event.target.value
        setSelectedBreedId(breedNameId[selectedBreed])
    }

    const handleLimitChange = (event) => {
        const selectedLimit = event.target.value;
        const imgLength = CLASSES_FOR_DIVS.slice(0,selectedLimit)
        setImgAmount(imgLength)
    }

    return(
        <div className={styles.breeds}>
            <SearchImg/>
        <div className={styles.wraperImgBlokSearchImages}>
        <div className={styles.wraperImgBlokSearch}>
                <div className={styles.headerBreeds}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`} onChange={handleBreedChange}>
                        {breedList ? breedList.map(current => <option key={current}>{current}</option> ): null}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`} onChange={handleLimitChange} >
                        {LIMITS.map(current => <option key={current} value={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={vector5} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={vector6} alt="sort" /></div>
                </div>
            </div>
            <div className={styles.catImgBreedsWrapper}>
                {imgAmount.map(current => <LoadPhotoByBreed breed={selectedBreedId} className={current} key={current}/>)}
            </div>
        </div>           
    </div>
    )
}

