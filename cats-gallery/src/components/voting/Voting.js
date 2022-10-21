import React, {useRef, useState} from 'react';
import styles from './voting.module.scss'
import {ReactionsPanel, LoaderPhoto, SearchImg} from '../index'

export const Voting = () =>{
    const [history, setHistory] = useState([])

    const historyStorage = useRef([])

    historyStorage.current.push(1)

    return(
        <div className={styles.voting}>
            <SearchImg/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                </div>
                
                <LoaderPhoto  history={historyStorage.current}/>                
                
                <ReactionsPanel history={historyStorage.current}/>                
            </div>
        </div>
    )
}
