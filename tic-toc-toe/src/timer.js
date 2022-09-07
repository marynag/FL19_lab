import React from 'react';
import convertTime from './timer.util'

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     time:0,
     isGameFinished:0
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

  shouldComponentUpdate(nextState) {
    if(this.props.isGameFinished ){
      clearInterval(this.timer)
    }
    return this.state.isGameFinished !== nextState.isGameFinished;
  }

  render() {        
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

