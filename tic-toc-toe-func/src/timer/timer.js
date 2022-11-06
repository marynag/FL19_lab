import React, {useEffect, useRef, useState} from 'react';
import convertTime from './timer.util'
import {useHistory} from "../game/useHistory";

export const Timer = (props) =>{
  const [time, setTime] = useState(0);

  const intervalId=useRef()

  const {isGameFinished} = props;

  //analogue of the constructor or componentMount
  useEffect (() =>{
      intervalId.current =  setInterval(() => {
          setTime(time => time + 1);
      }, 1000);
      return () => clearInterval(intervalId.current)
  },[])

    useEffect(()=>{
        if(!isGameFinished){
            return
        }
        clearInterval(intervalId.current)
    },[isGameFinished])

  const convertedTime=convertTime(time)

      return (
        <div>
          <p>Timer:</p>
          <p>{convertedTime.hours}:{convertedTime.minutes}:{convertedTime.seconds}</p>
        </div>
      )
}
 