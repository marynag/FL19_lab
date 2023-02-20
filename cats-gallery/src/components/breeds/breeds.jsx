import React, {useEffect, useState} from 'react';
import ImgSort1 from '../../img/ba.png'
import ImgSort2 from '../../img/ab.png'
import { LIMITS } from './breed.constants'
import styles from './breeds.module.scss'
import { SearchingBar }  from '../searchBar';
import { useSelector } from 'react-redux';
import {getBreedNameId} from "../../store/selectors";
import {PhotoGrid} from "../photoGrid/photoGrid";
import {fetchImages, fetchImagesByBreedId} from "../requests/request.utils";
import {getUtls} from "../photoGrid/photoGrid.utils";
import {Spinner} from "../spinner/spinner";

export const Breeds = () => {
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [limit, setLimit] = useState(LIMITS[0])
    const [isLoading, setLoading] = useState(true)
    const [photos, setPhotos] = useState([]);

    const breedNameId = useSelector(getBreedNameId)

    const handleBreedIdChange = (event) => {
        setSelectedBreedId(event.target.value)
    }

    const handleLimitChange = (event) => {
        setLimit(event.target.value)
    }

    useEffect(() => {
        setLoading(true);
        const request = selectedBreedId ? fetchImagesByBreedId(selectedBreedId, limit) : fetchImages(limit)
        request
            .then((response) => response.json())
            .then(res  => {
                const result= getUtls(res)
                setPhotos(result)
                setLoading(false)
            })
            .catch((error) =>{
                selectedBreedId ?
                console.error(`Failed to get photos by breedsId ${selectedBreedId} `, error)
                    :
                console.error(`Failed to get photos `, error)
            })
    }, [selectedBreedId, limit]);

    return(
        <div className={styles.breeds}>
            <SearchingBar onChange={setSelectedBreedId}/>
        <div className={styles.wraperImgBlokSearchImages}>
        <div className={styles.wraperImgBlokSearch}>
                <div className={styles.headerBreeds}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                    <select className={`${styles.vote} ${styles.breedSelect}`} onChange={handleBreedIdChange}>
                        {breedNameId.map(current => <option key={current.id} value={current.id}>{current.name}</option> )}
                    </select>
                    <select className={`${styles.vote} ${styles.breedsLimit}`} onChange={handleLimitChange} >
                        {LIMITS.map(current => <option key={current} value={current}>Limit: {current}</option> )}
                    </select>
                    <div className={styles.sortImg}><img className={styles.sort} src={ImgSort1} alt="sort" /></div>
                    <div className={styles.sortImg}><img className={`${styles.sort} ${styles.sort1}`} src={ImgSort2} alt="sort" /></div>
                </div>
            </div>
            <div>
                {isLoading ? <Spinner /> :
                    <PhotoGrid photos={photos} breedId={selectedBreedId}/> }
            </div>
        </div>           
    </div>
    )
}

