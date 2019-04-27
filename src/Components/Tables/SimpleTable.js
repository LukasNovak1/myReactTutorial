import React, { Component } from 'react';

class SimpleTable extends Component {
  render() {
    if (this.props.tableData) {
      var tableHeader = this.props.tableData.map(d => {
        return d;
      })
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div>
          No data.
        </div>
      )
    }
  }
}

export default SimpleTable;