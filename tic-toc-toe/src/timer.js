import React from 'react';
import convertTime from './timer.util'

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     time:0,
     handlerStopTimer:0
    } 
    this.setTimeInterval = this.setTimeInterval.bind(this)
  }

  setTimeInterval() {
    this.timer = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000)
  }

  componentDidMount() {
    this.setTimeInterval()
  } 

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {    
    if(this.props.handlerStopTimer){
      clearInterval(this.timer)
    }
    const time=convertTime(this.state.time) 
    return (
      <div className='timer'>
        <p>Timer:</p>
        <p>{time.hours}:{time.minutes}:{time.seconds}</p>
      </div>
    )
  }
}


export default Timer

