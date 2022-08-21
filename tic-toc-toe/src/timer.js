import React from 'react';
import countTime from './timer.util'

class Timer extends React.Component {
  constructor(){
    super()
    this.state = {
      date: "",
      startTime:"",
      hours: "",
      minutes: "",
      seconds:"",
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
    const startTime=new Date().getTime()
    this.setState({ startTime });
    this.timeInterval()
  } 

  render() {    
    const currentTime=new Date().getTime()    
    const difference = currentTime - this.state.startTime;
    const time=countTime(difference) 
    return (
      <div className='timer'>
        <p>Timer:</p>
        <p>{time.hours}:{time.minutes}:{time.seconds}</p>
      </div>
    )
  }
}


export default Timer

