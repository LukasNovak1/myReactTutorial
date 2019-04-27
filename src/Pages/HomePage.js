import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (      
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Homepage</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              Můj návod na React. Nejlepší dokumentace a tutorial <a href="https://reactjs.org/docs/getting-started.html">zde</a>. 
              V tomto návodu jsou uvedeny i jiné zdroje. Ty mohou být zastaralé a vždy platí to co je uvedeno v tomto návodu.<br/>
              Projekt je vytvořen pomocí npm. Návod na instalaci NPM je zde <a href="https://reactjs.org/docs/create-a-new-react-app.html">zde</a>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;