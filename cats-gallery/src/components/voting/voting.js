import React, {useRef, useState} from 'react';
import styles from './voting.module.scss'
import { VoteReactionsPanel } from '../voteReactionsPanel/voteReactionsPanel';
import {VotePhoto } from '../votePhoto/votePhoto';
import {SearchImg} from '../searchImg/searchImg'


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
                
                <VotePhoto  history={historyStorage.current}/>                
                
                <VoteReactionsPanel history={historyStorage.current}/>                
            </div>
        </div>
    )
}
