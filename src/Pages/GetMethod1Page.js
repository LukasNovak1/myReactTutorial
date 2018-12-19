import React, { Component } from 'react';
import GetMethodResultRenderer from '../Components/GetMethodResult'

class GetMethodPage extends Component {
  render() {
    return (
      <div>     
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Příklad volání metody Get()</h1>
            </div>
          </div>
        </div>
        <div className="container well">
          <div className="row">
            <div className="col">
              <GetMethodResultRenderer/>              
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default GetMethodPage;