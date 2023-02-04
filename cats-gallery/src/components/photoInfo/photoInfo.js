import styles from './photoInfo.module.scss'
import {SearchImg} from "../searchImg";
import React from "react";
import {useLocation} from "react-router";

export const PhotoInfo = (props) => {
    const location = useLocation();
    const photoUrl= location.state.url
    const infoArr = location.state.photoData
     const id = infoArr.map(item => {
         if(item.url===photoUrl){
            return item.id
         }
     })

    return (
        <div className={styles.photoInfoWrapper}>
            <SearchImg/>
            <div className={styles.wraperImgBlokSearchImages}>
                <div className={styles.wraperImgBlokSearch}>
                    <div className={styles.headerBreeds}>
                        <p className={styles.next}>&lt;</p>
                        <p className={styles.vote}>BREEDS</p>
                        <p className={styles.vote}>{id}</p>
                    </div>

                    <img className ={styles.catPhoto} src={photoUrl} alt="cat"/>
                </div>
                </div>
        </div>
    )
}