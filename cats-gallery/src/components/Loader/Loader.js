import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CATS_URL } from '../constants';
import styles from './Loader.module.scss'
import PropTypes from 'prop-types';


 function Loader(props){
    const [data, setData] = useState(null);    
    const imgclasses=classNames(`${styles.catImgBreeds} ${styles[props.addClass]}`)

    useEffect(() => {
        fetch(CATS_URL)
        .then((response) => response.json())
        .then(actualData => {
            setData(actualData[0].url)
        })
       }, []);  
  
        return(
            <img className ={imgclasses} src={data} alt="sad"/>
        )
}

Loader.propTypes = {
    addClass: PropTypes.string
  };

export default Loader