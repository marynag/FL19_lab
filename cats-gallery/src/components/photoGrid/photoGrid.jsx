import React, {useEffect, useState} from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getBreedNames} from "../../store/selectors";
import {getId, getUrls} from "./photoGrid.utils";
import {Spinner} from "../spinner/spinner";
import {fetchPhotos} from "../requests/requests.utils";

export const PhotoGrid = ({breedId, limit}) =>{
    const breedNames = useSelector(getBreedNames)
    const [isLoading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([]);

    const matchedBreed =breedId ?  breedNames.find((breed) => {
        return breed.id === breedId
    }) : null
    const breedName = breedId ? matchedBreed.name : null

    useEffect(() => {
        setLoading(true);
        fetchPhotos(breedId, limit)
            .then((response) => response.json())
            .then(res  => {
                const result= getUrls(res)
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                breedId ?
                    console.error(`Failed to get photos by breedsId ${breedId} and by limit ${limit}`, error)
                    :
                    console.error(`Failed to get photos by limit ${limit}`, error)
            })
    }, [breedId, limit]);

    return(
        <div>
            {isLoading ? <Spinner /> :(<div className={styles.catImgBreedsWrapper}>
                {photos.map((current) => (
                    <div className={`${styles.catImgBreedsDiv}`} key={current}>
                        <Link to={getId(current)}>
                            <img
                                className={`${styles.catImgBreeds} `}
                                src={current}
                                alt="cat"
                            />
                            {breedName && <p className={styles.breedName}>{breedName}</p>}
                        </Link>

                    </div>
                ))}
            </div>)}
        </div>
    )
}
