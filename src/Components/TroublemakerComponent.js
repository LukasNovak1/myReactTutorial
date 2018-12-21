import React, { Component } from 'react';

class TroublemakerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { cislo: 0 };
  }

  onClick() {
    console.log("klik");
    this.setState({ cislo: 1 })
    throw new Error("this is an error");
  }

  render() {
    return (
      <div>
        Po kliknutí na button se zavolá funkce, která způsobuje error.
        <div>
          <button onClick={this.onClick.bind(this)}>Klikni na mě ;-)</button>
          {this.state.cislo}
        </div>
      </div>
    )
  }
}
export default TroublemakerComponent