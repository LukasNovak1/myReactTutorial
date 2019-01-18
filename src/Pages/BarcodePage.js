import React, { Component } from 'react'

import BarcodeReader from '../Components/BarcodeReader';

class BarcodePage extends Component {

  render() {
    return (
      <div>
        <a href="https://www.npmjs.com/package/react-barcode-reader">https://www.npmjs.com/package/react-barcode-reader</a>
        <BarcodeReader/>
      </div>
    )
  }
}
export default BarcodePage