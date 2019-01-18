import React, { Component } from 'react'
import { render } from 'react-dom'
//import { SvgLoader } from "react-svgmt";
import SvgProxy from './svg-proxy';
import SvgLoader from './svg-loader'

class SvgRenderer extends Component {
  

  render() {
    if (this.props.svgUrl) {
      let colorProxys;
      let clickProxys;     

      if (this.props.colorItems) {       
        colorProxys = this.props.colorItems.map(item => {
          return <SvgProxy selector={item.selector} fill={item.color} />          
        });
      } 

      if (this.props.clickItems) {
        clickProxys = this.props.clickItems.map(item => {
          return <SvgProxy selector={item.selector} onclick={item.clickFunc} />
        });
      }

      return (
        <div>
          <SvgLoader path={this.props.svgUrl}>
            {colorProxys}
            {clickProxys}
          </SvgLoader>
        </div>
      )
    } else {
      return (
        <div>
          svgUrl not set
        </div>
      )
    }
  }
}
  export default SvgRenderer