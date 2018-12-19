import React, { Component } from 'react';
import Contacts from '../Components/Contacts';
import ContactsControl from '../Components/ContactsControl';
import $ from 'jquery'; 

class GetMethodPage extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      sortedContacts: [],
      contactsCount: 20,
      selectedContacts: []
    }
  }

  componentDidMount() {
    this.refreshContacts();
  }

  refreshContacts() {
    var url = "https://api.randomuser.me/?results=" + this.state.contactsCount;
    fetch(url)
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.results.map(user => (
        {
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          thumbnail: user.picture.thumbnail,
          gender: user.gender,
          uuid: user.login.uuid
        }
      )))
      .then(contacts => this.setState({
        contacts: contacts,
        sortedContacts: contacts
      }))
      ;

  }

  onItemsCountChange(contactsCount) {
    //tato metoda se vola pri zmene poctu itemu na stranku    
    this.setState(
      {
        contactsCount: contactsCount
      }, function () {
        this.refreshContacts();
      }
    )
  }

  onSortTextChange(sortText) {
    //zmena tridiciho textu  
    let newSortedContacts = $.grep(this.state.contacts, function (n, i) {
      return n.firstName.indexOf(sortText) > -1
        || n.lastName.indexOf(sortText) > -1;
    });

    this.setState({
      sortedContacts: newSortedContacts
    });
  }

  onSelectClick(uuid) {
    let indexToSelect = this.state.contacts.findIndex(i => i.uuid === uuid);
    let selCont = this.state.selectedContacts;
    selCont.push(this.state.contacts[indexToSelect]);
    this.setState({
      selectedContacts: selCont
    }
    )
  }

  render() {    
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Příklad volání metody Get() s loaderem</h1>
            </div>
          </div>
        </div>
        <div className="container well">
          <div className="row">
            <div className="col">
              Příklad použití Higher Order Components (HOC). Ta je zde k vykreslení loader kolečka. Je zde použit leší způsob volání Get()
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://www.youtube.com/watch?v=LTunyI2Oyzw&list=PL8V1empgrpJb--IOBFEY_54SHF-Ft5SAa&index=1">Youtube tutorial</a>
            </div>
          </div>
        </div>
        <div className="container well">
          <div className="row">
            <div className="col">
              <ContactsControl onItemsCountChange={this.onItemsCountChange.bind(this)} onSortTextChange={this.onSortTextChange.bind(this)} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Contacts items={this.state.sortedContacts} useLoader="true" showSelectButton="true" onSelectClick={this.onSelectClick.bind(this)} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Contacts items={this.state.selectedContacts} useLoader="false" title="Selected contacts" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetMethodPage;