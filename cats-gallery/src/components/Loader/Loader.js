import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CATS_URL } from '../constants';


 function Loader(props){
    const [data, setData] = useState(null);    
    const imgclasses=classNames('catImgBreeds', props.addClass)

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

export default Loader