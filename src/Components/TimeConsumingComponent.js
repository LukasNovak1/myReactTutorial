import React, { Component } from 'react';

class TimeConsumingComponent extends Component {
  constructor(props) {
    super(props);
    var x = 0;
    var i;

    for (i = 0; i < 100000; i++) {
      x = i;
      var j;
      for (j = 0; j < 20000; j++) {
        x = j;
      }
    }
  }

  render() {
    return (
      <div className="lazyElement">
        <h3>Lazy loaded Component</h3>
        Komponenta říká: Už jsem se konečně zobrazila. Chvilku mi to trvalo, protože obsahuju mnoho velkých knihoven.
      </div>
    )
  }
}
export default TimeConsumingComponent