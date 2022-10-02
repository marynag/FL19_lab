import React, {useRef} from 'react';
import styles from './voting.module.scss'
import SearchImg from '../searchImg/SearchImg.js'
import {ReactionsPanel} from '../voteReactionsPanel/ReactionsPanel.js'
import LoaderPhoto from '../voteLoaderPhoto/LoaderPhoto'


function Voting(){
    const h=useRef([5]);
    const history=[]
    return(
        <div className={styles.voting}>
            <SearchImg/>
            <div className={styles.votingWraper}>
                <div className={styles.votingBlockName}>
                    <p className={styles.next}>&lt;</p>
                    <p className={styles.vote}>BREEDS</p>
                </div>
                
                <LoaderPhoto ref={h} history={history}/>                
                
                <ReactionsPanel history={history}/>                
            </div>
        </div>
    )
}


export default Voting
