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
    const [name, setName]=useState('')
    const [temperament, setTemperament]=useState('')
    const [description, setDescription]=useState('')
    const [origin, setOrigin]=useState('')
    const [weight, setWeight]=useState('')
    const [lifeSpan, setLifeSpan]=useState('')
     const { id } = useParams()

    useEffect(() => {
        setLoading(true);
            fetchPhotoById(id)
            .then((response) => response.json())
            .then(res  => {
                setPhoto(res.url)
                setName(res.breeds[0].name)
                setOrigin(res.breeds[0].origin)
                setLifeSpan(res.breeds[0].life_span)
                setWeight(res.breeds[0].weight.metric)
                setDescription(res.breeds[0].description)
                setTemperament(res.breeds[0].temperament)
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
                <div className={styles.wraperImgBlokSearch}>
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
                                    className={[`${styles.description}, ${styles.dataDetails}`]}>{weight} kgs</p>
                                </p>
                                <p>Life span: <p
                                    className={[`${styles.description}, ${styles.dataDetails}`]}>{lifeSpan} years</p>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}