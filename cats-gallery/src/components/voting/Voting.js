import React from 'react';
import styles from './voting.module.scss'
import {SearchImg, RecordReaction, GetPhoto} from '../index'

export const Voting = () => {
    const history=[]
    return(
        <div className={styles.voting}>
            <SearchImg/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                </div>
                
                <GetPhoto history={history}/>                
                
                <RecordReaction history={history}/>                
            </div>
        </div>
    )
}


