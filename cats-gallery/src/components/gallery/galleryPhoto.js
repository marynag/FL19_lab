import React, { useEffect, useState } from 'react';
import styles from './gallery.module.scss'
import { CATS_URL_BY_BREEDS } from '../constants/constants';

export const GalleryPhoto = (props) => {

    const [data, setData] = useState();
    console.log(CATS_URL_BY_BREEDS+props.breed)

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
