import styles from '../voting/voting.module.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import REACTIONS, {reactionsMap} from './recordReaction.constants'
import {AddReaction} from '../index';
import { getTime } from '../voting/voting.utils';


export  function RecordReaction(props) {
  const history=props.history

  const [reactions, setReactions]=useState({}) 

  const HandlerAddTextIcon = (text) =>  {
    setReactions(prevState =>({...prevState, [text]: getTime()}))
    Object.entries(reactions).map(current=>console.log(current))

};
  return (
    <div>
        <div className={styles.currentReactionBlock}>
            <div className={styles.currentReactionBlockWrapper}>          
              
              {REACTIONS.map(reaction => <div className={`${styles.currentReaction} ${reaction.className}`} onClick={() => HandlerAddTextIcon(reaction.text)}>
                                                    <img src={reaction.img} alt="reaction"  className={styles.mainLike} />
                                                </div>)}

             </div>
        </div>   
        { Object.entries(reactions).map(current=>(<div>   
          <AddReaction time={current[1]} text={current[0]} icon={reactionsMap[current[0]]} history={history}/></div>))}  
    </div>
    
  );
};


RecordReaction.propTypes = {
  history: PropTypes.array
};


