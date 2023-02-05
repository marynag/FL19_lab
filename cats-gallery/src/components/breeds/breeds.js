import React, {useEffect, useState} from 'react';
import vector5 from '../../img/ba.png'
import vector6 from '../../img/ab.png'
import { LIMITS, CLASSES_FOR_DIVS} from './breed.constants'
import styles from './breeds.module.scss'
import { SearchImg }  from '../searchImg';
import { LoadPhotoByBreed } from '../LoadPhotoByBreed/loadPhotoByBreed';
import { useSelector } from 'react-redux';


export const Breeds = () => {
    const [breedList, setBereedList] = useState()
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [breedNameId, setBreedNameId] = useState();
    const [breedName, setBreedName] = useState('Bengal');
    const [imgAmount, setImgAmount] = useState(CLASSES_FOR_DIVS.slice(0,5))
    const [inputId, setInputId] = useState();

    const breedInfo = useSelector(state => state.breeds)

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
        setBreedName(selectedBreed)
    }

    const handleLimitChange = (event) => {
        const selectedLimit = event.target.value;
        const imgLength = CLASSES_FOR_DIVS.slice(0,selectedLimit)
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
                {imgAmount.map(current => <LoadPhotoByBreed breedId={selectedBreedId} className={current} breedName={breedName} key={current} imgId={inputId} />)}
            </div>
        </div>           
    </div>
    )
}

