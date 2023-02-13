import React, { useEffect, useState } from 'react';
import styles from '../loadPhotoByBreed/loadPhotoByBreed.module.scss'
import {CATS_URL} from '../constants/constants';
import { Link } from 'react-router-dom';
import {getImagesByBreedsId, getImagesByBreedsMatch} from "./loadPhoto.utils";

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState();
    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        fetch(CATS_URL)
            .then((response) => response.json())
            .then(res  => {
                setData(res[0].url)
                const capyData=[...photoData]
                setPhotoData([...capyData, res[0]])
            })
            .catch((error) =>{
                console.log('Error:', error)
            })
    }, []);

    useEffect(() => {
        if(!props.breedId) return;
        getImagesByBreedsMatch(props.breedId)
        .then((response) => response.json())
        .then(res  => {
            setData(res[0].url)
            const capyData=[...photoData]
            setPhotoData([...capyData, res[0]])
        })
        .catch((error) =>{
            console.log('Error:', error)
        })
       }, [props.breedId]);

    useEffect(() => {
        if(!props.imgId) return;
        getImagesByBreedsId(props.imgId)
            .then((response) => response.json())
            .then(res  => {
                setData(res.url)
                const capyData=[...photoData]
                setPhotoData([...capyData, res])
            })
            .catch((error) =>{
                console.log('Error:', error)
            })
    }, [props.imgId]);

    return(
        <>
            <div className ={`${styles[props.className]} , ${styles.catImgBreedsDiv}`}>
                <Link
                to={{
                    pathname: `/img`,
                    state:  {photoData,
                        url: data,
                        breedName:props.breedName
                    },

                }}
            >
                    <img
                        className={`${styles.catImgBreeds} `}
                        src={data}
                        alt="sad"
                    />
                    <p className={styles.breedName}>{props.breedName}</p>
                </Link>
            </div>
        </>
        )
}
