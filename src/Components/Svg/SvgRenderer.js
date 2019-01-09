import React, { Component } from 'react'
import { render } from 'react-dom'
//import { SvgLoader } from "react-svgmt";
import SvgProxy from './svg-proxy';
import SvgLoader from './svg-loader'

class SvgRenderer extends Component {
  hop() {
    alert("hop");
  }

  render() {
    if (this.props.svgUrl) {
      let proxys;
      let proxysMsg = '';

      if (this.props.colorItems) {
        console.log(this.props.colorItems);
        proxys = this.props.colorItems.map(item => {
          return <SvgProxy selector={item.selector} fill={item.color} />
          // <SvgProxy selector="#co" fill="red" />
        });
      } else {
        proxysMsg =
          <div>
            No colorItems!
          </div>;
      }

      return (
        <div>
          
          {proxysMsg}
          <SvgLoader path={this.props.svgUrl}>
            {proxys}
            <SvgProxy selector="#us" />
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