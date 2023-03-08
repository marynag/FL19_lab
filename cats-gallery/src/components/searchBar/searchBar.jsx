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
        const matchedBreedId = Object.entries(breedNamesIds).find(item=>{
            const [id,name] = item
            return (name.toLowerCase().includes(search))
        })

        props.onChange(matchedBreedId)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} ref={inputRef}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={searchImg} alt="search" className={styles.search_img}/></div>
                </div>
            <ReactionBar />
        </div> 
    )
}
