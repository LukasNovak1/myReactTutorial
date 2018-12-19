import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
var cultureSettings = {}

class Localization extends Component {

  componentWillMount() {
    cultureSettings = this.props.cultureSettings;
  }

  cultureChange() {
    var selectedCultureCode = this.refs.selectedCultureCode.value;    
    var selectedCulture = $.grep(cultureSettings.cultures, function (item) {
      return item.cultureCode === selectedCultureCode;
    });

    if (selectedCulture.length === 1) {
      this.props.onCultureChange(selectedCulture[0]);
    } else {
      this.props.onCultureChange(this.GetDefaultCulture(cultureSettings.cultures));
    }
  }

  render() {
    let culturesOptions = cultureSettings.cultures.map(culture => {
      return (
        <option key={culture.cultureCode} value={culture.cultureCode}  >{culture.cultureCode}</option>
      )
    });

    return (
      <select ref="selectedCultureCode" onChange={this.cultureChange.bind(this)}>
        {culturesOptions}
      </select>
    )
  }
}
export default Localization

export const LocalizationContext = React.createContext(
  cultureSettings // default value
);

export function GetDefaultCulture(cultures) {
  var defaultCulture = $.grep(cultures, function (culture) {
    return culture.isDefault === true;
  });

  return defaultCulture[0];
};
