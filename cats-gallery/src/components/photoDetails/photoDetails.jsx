import styles from './photoDetails.module.scss'
import {SearchBar} from "../searchBar";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {PATHS} from "../constants/path.constants";
import { Link } from "react-router-dom";
import {fetchPhotoById} from "../requests/requests.utils";
import {Spinner} from "../spinner/spinner";


export const PhotoDetails = () => {
    const [isLoading, setLoading] = useState(false)
    const [photo, setPhoto]=useState()
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        setLoading(true);
            fetchPhotoById(id)
            .then((response) => response.json())
            .then(res  => {
                setPhoto(res.url)
                setDetails({
                    name: res.breeds[0].name,
                    origin: res.breeds[0].origin,
                    lifeSpan: res.breeds[0].life_span,
                    weight: res.breeds[0].weight.metric,
                    description: res.breeds[0].description,
                    temperament: res.breeds[0].temperament
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

                    {isLoading ? <Spinner /> : <img className={styles.catPhoto} src={photo} alt="cat"/>}
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