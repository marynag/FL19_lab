import React from 'react';
import styles from './voting.module.scss'
import SearchImg from '../searchImg/SearchImg.js'
import {RecordReaction} from '../voteRecordReaction/RecordReaction.js'
import GetPhoto from '../voteGetPhoto/GetPhoto'


function Voting(){
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


export default Voting
