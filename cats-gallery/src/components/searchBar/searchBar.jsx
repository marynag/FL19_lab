import searchPanel from '../../img/Vector.png'
import styles from './searchingBar.module.scss'
import React from 'react';
import {useSelector} from "react-redux";
import {getBreedNames, matchBreedNames} from "../../store/selectors";
import {ReactionBar} from "../reactionBar/reactionBar";

export const SearchBar = (props) => {
    const inputRef = React.createRef();
    const matchBreed = useSelector(matchBreedNames)

    const handleClick = () =>{

        const [matchedBreedName, matchedBreedId] = Object.entries(matchBreed).find(item=>{
            const [name] = item
            return (name.toLowerCase().includes(inputRef.current.value.toLowerCase()) )
        })

        props.onChange(matchedBreedId)
    }

    return(
        <div className={styles.searchingLine}>
                <div className={styles.search}>
                    <input type="text"  column placeholder="Search for breeds by name" className={styles.searchInput} ref={inputRef}/>
                    <div className={styles.searchItem} onClick={handleClick}><img src={searchPanel} alt="search" className={styles.search_img}/></div>
                </div>
            <ReactionBar />
        </div> 
    )
}
