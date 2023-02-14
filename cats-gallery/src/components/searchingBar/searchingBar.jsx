import SearchPanel from '../../img/Vector.png'
import styles from './searchingBar.module.scss'
import React, { useState } from 'react';
import {REACTIONS} from "./searchingBar.constants";

export const SearchingBar = (props) => {
    const input = React.createRef();

    const handleClick = () =>{
        props.onChange(input.current.value)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search image by id" className={styles.searchInput} ref={input}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={SearchPanel} alt="search" className={styles.search_img}/></div>
                </div>
            { REACTIONS.map(current => (<div key={current.name} className={styles.reaction}>
                <img src={current.img} alt={current.name}/>
            </div>))}
        </div> 
    )
}
