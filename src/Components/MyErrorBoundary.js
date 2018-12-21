import React, { Component } from 'react';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="lazyElement">
          Soráč, nemůžu se připojit k serveru, zkuste to později.
      </div>
      )
    }

    return this.props.children;

  }
}
export default MyErrorBoundary