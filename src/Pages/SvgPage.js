import React, { Component } from 'react'
import { render } from 'react-dom'
import { SvgLoader, SvgProxy } from 'react-svgmt';

import SvgRenderer from '../Components/Svg/SvgRenderer';

//const svgPath = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg";
const svgPath = '/SVG/map.svg';

class SvgPage extends Component {

  componentDidMount() {

  }

  render() {
    let colorItems =
      [
        {
          "selector": "#cz",
          "color": "green"
        },
        {
          "selector": "#us",
          "color": "blue"
        },
        {
          "selector": "#ru",
          "color": "red"
        },
        {
          "selector": "#au",
          "color": "orange"
        }
      ]


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
              <a href="https://medium.com/@hugozap/svg-manipulation-tools-for-react-e1d58b754c81">Zdroj</a><br />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <textarea value={colorItems} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <SvgRenderer svgUrl={svgPath} colorItems={colorItems} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SvgPage