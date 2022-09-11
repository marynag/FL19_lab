import styles from '../voting/voting.module.scss'
import currentReactionSmile from '../img/Vector(Stroke123).png'
import currentReactionLike from '../img/Vector 348 (Stroke)1.png'
import currentReactionSad from '../img/Vectorfvf (Stroke).png'
import React, { useState } from 'react';
import smile from '../img/Vector (Stroke) (1242).png'
import heart from '../img/VectorStroke1232.png'
import sad from '../img/Vector (Stroke) (122).png'
import { getTime } from '../voting/voting.utils';
import PropTypes from 'prop-types';


export  function ReactionBtns(props) {
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
                <div className={`${styles.currentReaction} ${styles.smile}`} onClick={() => addTextIcon('smile',{currentReactionSmile})}>
                    <img src={smile} alt="smile" className={styles.mainSmile}/> 
                </div>
                <div className={`${styles.currentReaction} ${styles.like}`} onClick={() => addTextIcon('like',{currentReactionLike})}>
                    <img src={heart} alt="like"  className={styles.mainLike} />
                </div>
                <div className={`${styles.currentReaction} ${styles.sad}`} onClick={() => addTextIcon('sad',{currentReactionSad})}>
                    <img src={sad} alt="sad"  className={styles.mainSad}/>                           
                </div>
             </div>
        </div>             
      {info.map(info => <AddReaction text={info[0]} icon={info[1]} history={history}/>)}
    </div>
    
  );
};

//how to add key in AddReaction

export function AddReaction(props){
  const history=props.history
  const iconLink=(props.icon.currentReactionSad ?? props.icon.currentReactionLike) ?? props.icon.currentReactionSmile
return(
      <div className={styles.reactionDescription}>
          <p>{getTime()}</p>
          <p>Image ID: <b>{history[history.length-1]}</b> was added to {props.text}</p>
          <img className={styles.reactionImg} src={iconLink} alt='reaction'/>
      </div>
);
};

ReactionBtns.propTypes = {
  history: PropTypes.array
};

AddReaction.propTypes = {
  history: PropTypes.array,
  icon: PropTypes.object,
  text: PropTypes.string  
};
