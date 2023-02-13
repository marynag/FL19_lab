import styles from './photoInfo.module.scss'
import {SearchImg} from "../searchImg";
import React from "react";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {BREEDS_PATH} from "../constants/path.constants";
import { Link } from "react-router-dom";

export const PhotoInfo = () => {
    const location = useLocation();
    const {url, breedName, photoData} = location.state
    const id = photoData.map(item => {
        if(item.url===url){
            return item.id
        }
     })

    const AllbreedsInfo = useSelector(state => state.breeds)
    const selectedBreedInfo = AllbreedsInfo.find(item => {
        if(item.name==breedName){
            return item
        }
    })

    const {temperament, origin, weight, life_span, description} = selectedBreedInfo
    const weigthMetric = weight.metric

    return (
        <div className={styles.photoInfoWrapper}>
            <SearchImg/>
            <div className={styles.wraperImgBlokSearchImages}>
                <div className={styles.wraperImgBlokSearch}>
                    <div className={styles.headerBreeds}>
                        <Link to={BREEDS_PATH}>
                            <p className={styles.next} >&lt;</p>
                        </Link>
                        <p className={styles.vote}>BREEDS</p>
                        <p className={styles.vote}>{id}</p>
                    </div>

                    <img className ={styles.catPhoto} src={url} alt="cat"/>
                    <div className={styles.photoInfo}>
                        <div className={styles.photoInfoHeader}>
                            <h2>{breedName}</h2>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.details}>
                            <div>
                                <p>Temperament:</p>
                                <p className={styles.description}>{temperament}</p>
                            </div>
                            <div>
                                <p>Origin: <p className={[`${styles.description}, ${styles.dataDetails}`]}>{origin}</p></p>
                                <p>Weight: <p className={[`${styles.description}, ${styles.dataDetails}`]}>{weigthMetric} kgs</p></p>
                                <p>Life span: <p className={[`${styles.description}, ${styles.dataDetails}`]}>{life_span}  years</p></p>
                            </div>
                        </div>

                    </div>

                </div>
                </div>
        </div>
    )
}