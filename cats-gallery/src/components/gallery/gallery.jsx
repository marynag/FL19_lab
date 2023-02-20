import React, {useEffect, useState} from 'react';
import styles from "./gallery.module.scss";
import { SearchingBar } from "../searchBar";
import {PhotoGrid} from "../photoGrid/photoGrid";
import {fetchImages, fetchImagesByBreedId} from "../requests/request.utils";
import {getUtls} from "../photoGrid/photoGrid.utils";
import {Spinner} from "../spinner/spinner";

export const Gallery = () => {
    const [inputBreed, setInputBreed] = useState('');
    const [isLoading, setLoading]=useState(false);
    const [photos, setPhotos]=useState([])
    const limit = 25;

    useEffect(() => {
        setLoading(true);
        const request = inputBreed ? fetchImagesByBreedId(inputBreed, limit) : fetchImages(limit)
        request
            .then((response) => response.json())
            .then(res  => {
                const result= getUtls(res)
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                inputBreed ?
                    console.error(`Failed to get photos by breedsId ${inputBreed} `, error)
                    :
                    console.error(`Failed to get photos `, error)
            })
    }, [inputBreed]);

    return(
        <div className={styles.voting}>
            <SearchingBar onChange={setInputBreed}/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>GALLERY</p>
                </div>
                {isLoading ? <Spinner /> :
                    <PhotoGrid photos={photos} /> }
            </div>
        </div>
    )
}
