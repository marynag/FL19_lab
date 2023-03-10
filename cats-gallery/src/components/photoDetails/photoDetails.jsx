import styles from './photoDetails.module.scss'
import {SearchBar} from "../searchBar";
import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
import {PATHS} from "../constants/path.constants";
import { Link } from "react-router-dom";
import {fetchPhotoById} from "../requests/requests.utils";
import {Spinner} from "../spinner/spinner";


export const PhotoDetails = () => {
    //add location
    const [isLoading, setLoading] = useState(false)
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        setLoading(true);
            fetchPhotoById(id)
            .then(res  => {
                const breed = res.breeds[0];
                const { name, origin, description, temperament} = breed;
                setDetails({
                    url: res.url,
                    name,
                    origin,
                    description,
                    temperament,
                    lifeSpan: breed.life_span,
                    weight: breed.weight.metric
                })

                setLoading(false)
            })
            .catch((error) =>{
                console.error(`Failed to get photo by id ${id} `, error)
            })
    }, [id]);


    return (
        <div className={styles.photoInfoWrapper}>
            <SearchBar/>
            <div className={styles.wraperImgBlokSearchImages}>
                    <div className={styles.headerBreeds}>
                        <Link to={PATHS.breeds}>
                            <p className={styles.next} >&lt;</p>
                        </Link>
                        <p className={styles.vote}>BREEDS</p>
                        <p className={styles.vote}>{id}</p>
                    </div>

                    {isLoading ? <Spinner /> : <img className={styles.catPhoto} src={details.url} alt="cat"/>}
                        <div className={styles.photoInfo}>
                        <div className={styles.photoInfoHeader}>
                            <h2>{details.name}</h2>
                            <p className={styles.description}>{details.description}</p>
                        </div>
                        <div className={styles.details}>
                            <div>
                                <p>Temperament:</p>
                                <p className={styles.description}>{details.temperament}</p>
                            </div>
                            <div>
                                <p>Origin: <p className={[`${styles.description}, ${styles.dataDetails}`]}>{details.origin}</p>
                                </p>
                                <p>Weight: <p
                                    className={[`${styles.description}, ${styles.dataDetails}`]}>{details.weight} kgs</p>
                                </p>
                                <p>Life span: <p
                                    className={[`${styles.description}, ${styles.dataDetails}`]}>{details.lifeSpan} years</p>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}