import styles from '../voting/voting.module.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import REACTIONS, {reactionsMap} from './voteReactionsPanel.constants'
import {VoteReactionRecord} from '../voteReactionRecord/voteReactionRecord';
import { getTime } from '../voting/voting.utils';


export  const VoteReactionsPanel  = (props) => {
  const history=props.history

  const [reactions, setReactions]=useState({}) 

  const handleReactionClick = (text) =>  {
    setReactions(prevState =>({...prevState, [text]: getTime()}))

};
  return (
    <div>
        <div className={styles.currentReactionBlock}>
            <div className={styles.currentReactionBlockWrapper}>          
              
              {REACTIONS.map(reaction => <div key={reaction.text} className={`${styles.currentReaction} ${reaction.className}`} onClick={() =>  handleReactionClick(reaction.text)}>
                                                    <img src={reaction.img} alt="reaction"  className={styles.mainLike} />
                                                </div>)}

             </div>
        </div>   
        { Object.entries(reactions).map(current=>(<div key={current[0]}>   
          <VoteReactionRecord time={current[1]} text={current[0]} key={current[0]} icon={reactionsMap[current[0]]} history={history}/></div>))}  
    </div>
    
  );
};


VoteReactionsPanel.propTypes = {
  history: PropTypes.array
};

