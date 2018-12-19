import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderHOC from '../HOComponents/LoaderHOC';

class Contacts extends Component {
  static proptypes = {
    items: PropTypes.func.isRequired
  }

  onSelectClick = (uuid) => {    
    this.props.onSelectClick(uuid);
  }

  render() {    
    let result;

    if (this.props.items) {
      result = this.props.items.map(contact => {
        var bgClass = contact.gender === "female" ? "bg-Female" : "bg-Male";
        bgClass = bgClass + " contact rounded-card";
        let selectBtn = this.props.showSelectButton === "true"
          ? <input type="button" className="btn btn-primary" value="Select" onClick={this.onSelectClick.bind(this, contact.uuid)} />
          : ""

        return (
          <div className={bgClass} key={contact.uuid}>
            <div className="">
              <div className="contactImageContainer">
                <img className="rounded-img" src={contact.thumbnail} alt={contact.firstName+ "_" + contact.lastName} />
              </div>
              <div>
                <h5 className="">{contact.firstName} {contact.lastName}</h5>
                <p>{contact.email}</p>
                {selectBtn}
              </div>
            </div>
          </div>
        );
      });
    }

    let title = this.props.title && this.props.items.length > 0
      ? <h2> {this.props.title} </h2>
      : ""
    return (      
      <div>
        {title}
        {result}
      </div>
    );
  }

}

export default LoaderHOC(Contacts)