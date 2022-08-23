import React from 'react';
import countTime from './timer.util'

class Timer extends React.Component {
  constructor(){
    super()
    this.state = {
     time:0
    } 
    this.timeInterval = this.timeInterval.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  timeInterval() {
    this.timer = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000)
    console.log("start")
  }
  stopTimer() {
    clearInterval(this.timer)
    console.log("stop")
  }

  componentDidMount() {
    this.timeInterval()
  } 

  componentWillUnmount(){
    this.stopTimer()
  }

  render() {  
    const time=countTime(this.state.time) 
    return (
      <div className='timer'>
        <p>Timer:</p>
        <p>{time.hours}:{time.minutes}:{time.seconds}</p>
      </div>
    )
  }
}


export default Timer

