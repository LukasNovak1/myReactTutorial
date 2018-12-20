import React, { Component, PropTypes } from 'react';

class ContactsControl extends Component {
  constructor(props) {
    super(props);
  }

  onContactsCountChange(event) {
    //nastavim property komponenty ContactsControl, abych jeji hodnotu mohl poslat nahoru       
    this.props.onItemsCountChange(event.target.value);
  }

  onChangeSortText(event) {
    this.props.onSortTextChange(event.target.value);
  }

  render() {
    let options = this.props.itemsPerPageValues.map(option => {
      return (
        <option value={option} key={option}>{option}</option>
      );
    }
    )
    return (
      <div>
        <span>Items per page: </span>
        <select defaultValue={this.props.contactsCount} onChange={this.onContactsCountChange.bind(this)}>
          {options}
        </select>
        <span> Sort by name: </span>
        <input type="text" value={this.props.sortText} onChange={this.onChangeSortText.bind(this)} />
      </div>
    );
  }
}

export default ContactsControl