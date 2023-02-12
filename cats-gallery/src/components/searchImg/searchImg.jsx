import vector from '../../img/Vector.png'
import styles from './searchImg.module.scss'
import React, { useState } from 'react';
import {REACTIONS} from "./searchImg.utils";

export const SearchImg = (props) => {
    const [userInput, setuserInput] = useState('');

    const handleChange = (event) => {
        setuserInput(event.target.value)
    }

    const handleClick = () =>{
        props.onChange(userInput)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text" value={userInput} column placeholder="Search image by id" className={styles.searchInput} onChange={handleChange}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={vector} alt="girl and pet" className={styles.search_img}/></div>
                </div>
            { REACTIONS.map(current => (<div key={current.name} className={styles.reaction}>
                <img src={current.img} alt={current.name}/>
            </div>))}
        </div> 
    )
}
