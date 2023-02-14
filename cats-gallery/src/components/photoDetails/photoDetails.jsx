import styles from './photoDetails.module.scss'
import {SearchingBar} from "../searchingBar";
import React from "react";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {PATHS} from "../constants/path.constants";
import { Link } from "react-router-dom";

export const PhotoDetails = () => {
    const location = useLocation();
    const {url, photoData, breedId} = location.state
    const id = photoData.map(item => {
        if(item.url===url){
            return item.id
        }
     })

    const allbreedsInfo = useSelector(state => state.breeds)
    const selectedBreedInfo = allbreedsInfo.find(item => {
        if(item.id==breedId){
            return item
        }
    })

    const {name, temperament, origin, weight, life_span, description} = selectedBreedInfo ?? ''
    const weigthMetric = weight ? weight.metric : ''

    return (
        <div className={styles.photoInfoWrapper}>
            <SearchingBar/>
            <div className={styles.wraperImgBlokSearchImages}>
                <div className={styles.wraperImgBlokSearch}>
                    <div className={styles.headerBreeds}>
                        <Link to={PATHS.breeds}>
                            <p className={styles.next} >&lt;</p>
                        </Link>
                        <p className={styles.vote}>BREEDS</p>
                        <p className={styles.vote}>{id}</p>
                    </div>

                    <img className ={styles.catPhoto} src={url} alt="cat"/>
                    {selectedBreedInfo &&(
                        <div className={styles.photoInfo}>
                        <div className={styles.photoInfoHeader}>
                            <h2>{name}</h2>
                            <p className={styles.description}>{description}</p>
                        </div>

                        <div className={styles.details}>
                            <div>
                                <p>Temperament:</p>
                                <p className={styles.description}>{temperament}</p>
                            </div>
                            <div>
                                <p>Origin: <p className={[`${styles.description}, ${styles.dataDetails}`]}>{origin}</p>
                                </p>
                                <p>Weight: <p
                                    className={[`${styles.description}, ${styles.dataDetails}`]}>{weigthMetric} kgs</p>
                                </p>
                                <p>Life span: <p
                                    className={[`${styles.description}, ${styles.dataDetails}`]}>{life_span} years</p>
                                </p>
                            </div>

                        </div>
                    </div>
                    )}

                </div>
                </div>
        </div>
    )
}