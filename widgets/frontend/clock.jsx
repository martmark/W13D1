import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="clock">
        <h1>Time:</h1> 
        <h1>{this.state.time.getHours()}:
            {this.state.time.getMinutes()}:
            {this.state.time.getSeconds()}</h1>
          
          <h1>Date:</h1>
          <h1>{this.state.time.toDateString()}</h1>
      </div>

    )
  }
}


export default Clock;