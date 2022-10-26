import React, {useEffect, useState} from 'react';
import convertTime from './timer.util'

export const Timer = (props) =>{
  const isGameFinished=props.isGameFinished
  const [time, setTime] = useState(0);

  useEffect(() =>{
    let interval = null;
    if(!isGameFinished){
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [time]);

  const convertedTime=convertTime(time) 

      return (
        <div className='timer'>
          <p>Timer:</p>
          <p>{convertedTime.hours}:{convertedTime.minutes}:{convertedTime.seconds}</p>
        </div>
      )
}
 