import React, {useEffect, useState} from 'react';
import vector5 from '../../img/ba.png'
import vector6 from '../../img/ab.png'
import {BREED_OPTIONS, LIMITS, CLASSES_FOR_DIVS} from './breed.constants'
import styles from './breeds.module.scss'
import {SearchImg}  from '../searchImg';
import {PhotoLoader}  from '../photoLoader';


export const Breeds = () => {
    const [breedInfo, setBereedInfo] = useState()
    const [breedList, setBereedList] = useState()


    useEffect(() =>{
        const result = fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(response =>setBereedInfo(response))

    }, [])

    useEffect(()=>{
        if(breedInfo){
            const breeds = breedInfo.reduce((acc, item) =>{
                acc.push(item.name)
                return acc
            },[])
            setBereedList(breeds)
        }
    },[breedInfo])


    return(
        <div className={styles.breeds}>
            <SearchImg/>
        <div className={styles.wraperImgBlokSearchImages}>
        <div className={styles.wraperImgBlokSearch}>
                <div className={styles.headerBreeds}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`}>
                        {breedList ? breedList.map(current => <option key={current}>{current}</option> ): null}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`}>
                        {LIMITS.map(current => <option key={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={vector5} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={vector6} alt="sort" /></div>
                </div>
            </div>
            <div className={styles.catImgBreedsWrapper}>
                {CLASSES_FOR_DIVS.map(current => <PhotoLoader addClass={current} key={current}/> )}
            </div>
        </div>           
    </div>
    )
}

