import React, { Component } from 'react';

//Pages
import SimpleTable from '../Components/Tables/SimpleTable'

class TablesPage extends Component {
  constructor(props) {
    super(props);  
    this.state = { tableDataArray: [] };
  }

  componentWillMount() {
    var data = [];
    var row1 = {
      color: 'Žlutá',
      width: '100 cm',
      height: '11 cm'
    }
    var row2 = {
      color: 'Modrá',
      width: '33 cm',
      height: '91 cm'
    }

    data.push(row1);
    data.push(row2);

    this.setState({ tableDataArray: data });
  }

  render() {
    console.log(this.state.tableDataArray);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Tables</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              <SimpleTable tableData={this.state.tableDataArray} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TablesPage;