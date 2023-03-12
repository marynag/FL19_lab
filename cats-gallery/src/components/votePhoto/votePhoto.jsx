import React, { useEffect, useState } from 'react';
import styles from '../voting/voting.module.scss'
import getId from '../voting/voting.utils'
import {URL_PHOTOS_SEARCH} from '../requests/requests.constants';
import PropTypes from 'prop-types';


export const VotePhoto = (props) => {
    const history=props.history

    const [data, setData] = useState(null);          

    useEffect(() => {
        fetch(URL_PHOTOS_SEARCH)
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

VotePhoto.propTypes = {
    history: PropTypes.array
  };