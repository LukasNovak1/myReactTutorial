import React, { Component } from 'react'
import BarR from 'react-barcode-reader'

class BarcodeReader extends Component {
  constructor(params) {
    super(params);
    this.state = {
      scannedCode: 'No result',
    }
  }

  handleScan(data) {
    console.log(data);
    this.setState({
      scannedCode: data,
    })

  }
  handleError(err) {
    console.error(err)
  }


  render() {
    return (
      <div>
        Scanned code: {this.state.scannedCode}
        <BarR
          onError={this.handleError}
          onScan={this.handleScan.bind(this)}
          startChar="a" endChar="s"  
          minLength="1"
        />
      </div>
    )
  }
}
export default BarcodeReader