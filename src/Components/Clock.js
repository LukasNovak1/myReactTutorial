import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.clockTimer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    if (this.props.callUnmount===true) {
      clearInterval(this.clockTimer);
    }
  }

  tick() {
    let newTime = new Date();
    let timerName = this.props.timerName;
    console.log(timerName);
    console.log(" Clock tick: " + newTime);
    this.setState({
      date: newTime
    });
  }

  render() {
    return (
      <div className="clockElement">
        Čas: {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;