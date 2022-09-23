import styles from '../voting/voting.module.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import reactionsButtonsList from './ReactionButtons.constants'
import AddReaction from '../AddReaction/AddReaction';


export  function ReactionButtons(props) {
  const history=props.history
  const [info, setInfo] = useState([]);

  const addTextIcon = (text, icon) =>  {
    const itemInfo=[text, icon]
    setInfo([...info,itemInfo])

};
  return (
    <div>
        <div className={styles.currentReactionBlock}>
            <div className={styles.currentReactionBlockWrapper}>
              {reactionsButtonsList.map(info => <div className={info[0]} onClick={() => addTextIcon(info[1],info[2])}>
                                                    <img src={info[3]} alt="reaction"  className={styles.mainLike} />
                                                </div>)}

             </div>
        </div>             
      {info.map(info => <AddReaction text={info[0]} icon={info[1]} history={history}/>)}
    </div>
    
  );
};


ReactionButtons.propTypes = {
  history: PropTypes.array
};


