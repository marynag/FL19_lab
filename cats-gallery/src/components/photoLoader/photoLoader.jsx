import React, { useEffect, useState } from 'react';
import { CATS_URL } from '../constants/requests.constants';
import styles from './photoLoader.module.scss'
import PropTypes from 'prop-types';

export const PhotoLoader = (props) => {
    const [data, setData] = useState(null);   
    
    useEffect(() => {
        fetch(CATS_URL)
        .then((response) => response.json())
        .then(actualData => {
            setData(actualData[0].url)
        })
       }, []);  
  
        return(
            <img className ={`${styles.catImgBreeds} ${styles[props.addClass]}`} src={data} alt="sad"/>
        )
}

PhotoLoader.propTypes = {
    addClass: PropTypes.string
  };
