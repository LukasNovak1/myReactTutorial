import React, { Component } from 'react';

//default components
import { Get } from '../CommonScripts/Api'

class GetMethodResultRenderer extends Component {
  constructor() {
    super();
    this.state = {
      methodResult: []
    }   
  }

  componentDidMount() {
    Get('https://jsonplaceholder.typicode.com/todos', this.callGetSuccess.bind(this));
  }

  callGetSuccess(data) {   
    let result = data.map(item => {     
      return (
        <div key={item.itemId + item.title }><strong>ID:</strong> {item.userId}, <strong>Title:</strong> {item.title}</div>
      );
    });

    this.setState({
      methodResult: result
    });
  }

  render() {
    if (!this.state.methodResult.length) {
      return null;
    }

    return (
       this.state.methodResult 
    );
  }
}

export default GetMethodResultRenderer;