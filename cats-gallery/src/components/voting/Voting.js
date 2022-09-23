import React from 'react';
import styles from './voting.module.scss'
import SearchImg from '../searchImg/SearchImg.js'
import {ReactionButtons} from '../ReactionButtons/ReactionButtons.js'
import GetPhoto from '../GetPhoto/GetPhoto'


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
                
                <ReactionButtons history={history}/>                
            </div>
        </div>
    )
}


export default Voting
