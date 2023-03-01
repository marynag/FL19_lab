import React, {useEffect, useState} from 'react';
import styles from './photoGrid.module.scss';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {getBreedNames} from "../../store/selectors";
import {getId, getUrlAndOverlay, getUrls} from "./photoGrid.utils";
import {Spinner} from "../spinner/spinner";
import {fetchPhotos} from "../requests/requests.utils";

export const PhotoGrid = ({breedId, limit, overlay}) =>{
    const breedNames = useSelector(getBreedNames)
    const [isLoading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([]);

    const matchedBreed =breedId ?  breedNames.find((breed) => {
        return breed.id === breedId
    }) : null

    useEffect(() => {
        setLoading(true);
        fetchPhotos(breedId, limit)
            .then((response) => response.json())
            .then(res  => {
                const url = getUrls(res)
                const result= getUrlAndOverlay(url, overlay)
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
                        <Link to={`/photo/${getId(current.url)}`}>
                            <img
                                className={`${styles.catImgBreeds} `}
                                src={current.url}
                                alt="cat"
                            />
                            {<p className={styles.breedName}>{current.overlay}</p>}
                        </Link>

                    </div>
                ))}
            </div>)}
        </div>
    )
}
