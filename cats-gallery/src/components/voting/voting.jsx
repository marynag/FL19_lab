import React, {useRef} from 'react';
import styles from './voting.module.scss'
import { VoteReactionsPanel } from '../voteReactionsPanel';
import {VotePhoto } from '../votePhoto';
import {SearchingBar} from '../searchBar'


export const Voting = () =>{
    const historyStorage = useRef([])

    return(
        <div className={styles.voting}>
            <SearchingBar/>
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
