import React, { Component } from 'react';

const LoaderHOC = (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return (this.props && this.props.items && this.props.items.length === 0 && this.props.useLoader === "true")
        ? <div className="loader"></div>
        : <WrappedComponent {... this.props} />
    }
  }
}

export default LoaderHOC