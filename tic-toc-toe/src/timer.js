import React from 'react';

class Timer extends React.Component {
  constructor(){
    super()
    this.state = {
      date: "",
      startTime:"",
      hours: "",
      minutes: "",
      seconds:""
    } 

  }

  componentDidMount() {
    this.setState({ startTime:new Date().getTime() });
  } 

  render() {

    const currentTime=new Date().getTime()    
    const difference = currentTime - this.state.startTime;
    let msec = difference;
    const hours = Math.floor(msec / 1000 / 60 / 60);
    msec -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(msec / 1000 / 60);
    msec -= minutes * 1000 * 60;
    const seconds = Math.floor(msec / 1000);
    msec -= seconds * 1000;

    return <div>{hours}:{minutes}:{seconds}</div>;
  }
}


export default Timer

