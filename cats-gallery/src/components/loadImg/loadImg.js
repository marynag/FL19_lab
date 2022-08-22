import React, { useEffect, useState } from 'react';
//import './loadImg.css'

var classNames = require('classnames');

 function LoadImg(props){
    const [data, setData] = useState(null);    
    let imgclasses=classNames('catImgBreeds', props.addClass)

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => response.json())
        .then(actualData => {
            setData(actualData[0].url)
            console.log(actualData[0].url)
        })
       }, []);  
  
        return(
            <img className ={imgclasses} src={data} alt="sad"/>
        )
}

export default LoadImg