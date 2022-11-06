import React, {useRef} from 'react';
import styles from './voting.module.scss'
import { VoteReactionsPanel } from '../voteReactionsPanel';
import {VotePhoto } from '../votePhoto';
import {SearchImg} from '../searchImg'


export const Voting = () =>{
    const historyStorage = useRef([])

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
