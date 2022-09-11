import React, { useEffect, useState } from 'react';
import styles from '../voting/voting.module.scss'
import getId from '../voting/voting.utils'
import { CATS_URL } from '../constants';
import PropTypes from 'prop-types';


export default function GetPhoto(props){
    const history=props.history

    const [data, setData] = useState(null);          

    useEffect(() => {
        fetch(CATS_URL)
        .then((response) => response.json())
        .then(actualData => {
            setData(actualData[0].url)
        })
    
       }, []);  
       getId(data, history)
        return(                       
            <img className ={styles.votingImg} src={data} alt="cat"/>
        )
}

GetPhoto.propTypes = {
    history: PropTypes.array
  };