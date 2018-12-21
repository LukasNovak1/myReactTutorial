import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactSVG from 'react-svg'
//import Svg1 from '../SVG/svg1.svg'

class SvgPage extends Component {
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>SVG</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              Zde svg jest:
              <ReactSVG src={require('../SVG/svg1.svg') } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SvgPage