import React, { Component, PropTypes } from 'react';

class ContactsControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCount: 20,
      sortText: '',
      pokus: ''
    };

  }

  static defaultProps = {
    options: [10, 20, 40]
  }

  onItemsCountSelect() {
    if (this.refs.itemsCount.value) {
      this.setState({
        itemsCount: this.refs.itemsCount.value
      }, function () {
        //nastavim property komponenty ContactsControl, abych jeji hodnotu mohl poslat nahoru       
        this.props.onItemsCountChange(this.refs.itemsCount.value);
      })
    }
  }

  onSortChange(event) {
    //this.setState({
    //  sortText: event.target.value
    //},
    //  function () {
    //    this.props.onSortTextChange(this.state.sortText);
    //  }
    //);

    this.props.onSortTextChange(event.target.value);
  }

  render() {
    let options = this.props.options.map(option => {
      return (
        <option value={option} key={option}>{option}</option>
      );
    }
    )
    return (
      <div>
        <span>Items per page: </span>
        <select defaultValue={this.state.itemsCount} ref="itemsCount" onChange={this.onItemsCountSelect.bind(this)}>
          {options}
        </select>
        <span> Sort by name: </span>
        <input type="text" onChange={this.onSortChange.bind(this)} />
      </div>
    );
  }
}

export default ContactsControl