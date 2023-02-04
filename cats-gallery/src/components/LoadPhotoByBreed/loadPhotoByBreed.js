import React, { useEffect, useState } from 'react';
import styles from '../LoadPhotoByBreed/LoadPhotoByBreed.module.scss'
import {CATS_URL, CATS_URL_BY_BREEDS} from '../constants/constants';

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        const url = props.breed ? CATS_URL_BY_BREEDS+props.breed : CATS_URL;
            fetch(url)
        .then((response) => response.json())
        .then(res  => {
            setData(res[0].url)
        })
       }, [props.breed]);


    return(
             <img className ={`${styles.catImgBreeds} ${styles[props.className]}`} src={data} alt="sad"/>
        )
}
