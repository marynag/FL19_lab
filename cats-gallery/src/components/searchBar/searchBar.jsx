import searchImg from '../../img/Vector.png'
import styles from './searchingBar.module.scss'
import React from 'react';
import {useSelector} from "react-redux";
import {breedsNamesSelector} from "../../store/selectors";
import {ReactionBar} from "../reactionBar/reactionBar";

export const SearchBar = (props) => {
    const inputRef = React.createRef();
    const breedNamesIds = useSelector(breedsNamesSelector)

    const handleClick = () =>{
        const search = inputRef.current.value.toLowerCase();
        const matchedBreed = search ? Object.entries(breedNamesIds).find(item=>{
            const name = item[1];
            return (name.toLowerCase().includes(search))
        }) : ''

        props.onChange(matchedBreed[0])
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  placeholder="Search for breeds by name" className={styles.searchInput} ref={inputRef}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={searchImg} alt="search" className={styles.search_img}/></div>
                </div>
            <ReactionBar />
        </div> 
    )
}
