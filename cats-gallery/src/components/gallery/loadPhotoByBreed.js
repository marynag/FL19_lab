import React, { useEffect, useState } from 'react';
import styles from './gallery.module.scss'
import { CATS_URL_BY_BREEDS } from '../constants/constants';

export const LoadPhotoByBreed = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(CATS_URL_BY_BREEDS+props.breed)
        .then((response) => response.json())
        .then(res  => {
            setData(res[0].url)
        })
       }, [props.breed]);

        return(
             <img className ={`${styles.catImgBreeds} ${styles[props.className]}`} src={data} alt="sad"/>
        )
}
