import React, { useEffect, useState } from 'react';
import styles from '../voting/voting.module.scss'
import getId from '../voting/voting.utils'
import { CATS_URL } from '../constants';
import PropTypes from 'prop-types';


export default function LoaderPhoto(props){
    const history=props.history
    console.log(props.ref)

    const [data, setData] = useState(null);          

    useEffect(() => {
        fetch(CATS_URL)
        .then((response) => response.json())
        .then(actualData => {
            setData(actualData[0].url)
            getId(actualData[0].url, history)
        })    
       }, []);  

        return(                       
            <img className ={styles.votingImg} src={data} alt="cat"/>
        )
}

LoaderPhoto.propTypes = {
    history: PropTypes.array
  };