import React, { Component } from 'react';
import Contacts from '../Components/Contacts';
import ContactsControl from '../Components/ContactsControl';
import $ from 'jquery'; 

const itemsPerPageValues = [10, 20, 40];
var sortedContacts;

class GetMethodPage extends Component {
  
  constructor() {
    super();

    this.state = {
      sortText: "",
      contacts: [],
     
      contactsCount: itemsPerPageValues[0],
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
      .then(contacts => {
        sortedContacts = contacts;
        console.log(sortedContacts);
        this.setState({ contacts: contacts });        
      });

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
    sortedContacts = $.grep(this.state.contacts, function (n, i) {
      return n.firstName.indexOf(sortText) > -1
        || n.lastName.indexOf(sortText) > -1;
    });

    this.setState({
      sortText: sortText,
      sortedContacts: sortedContacts
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
              <a href="https://www.youtube.com/watch?v=LTunyI2Oyzw&list=PL8V1empgrpJb--IOBFEY_54SHF-Ft5SAa&index=1">Youtube tutorial</a><br />
              <strong>Tipy:</strong><br/>
              Pokud je třeba některá data využívat v komponentách do sebe vnořených, jejich aktuální stav se uchovává ve this.state té jejvýše položené.<br />
              Vnořené komponenty čtou tyto hodnoty z this.props.value a nahoru je posílají jako událost this.props.onChange().
              <br />
              Zde je toto využito ve filtru kontaktů v proměnných this.props.contactsCount a this.props.sortText. Proměnná je měněna z ContactsControl.js.
              Pošle se do GetMethod2Page.js, kde se uloží do this.state.contactsCount.
              Na základě této hodnoty se zavolá API a výsledek je odeslán do komponenty Contacts.
              <br /><br />
              <a href="https://reactjs.org/docs/thinking-in-react.html"> Jak poznám, že mám použít this.state.něco, místo const, var, nebo this.props?</a>
              <br />
              <ul>
                <li>
                  Pokud je to získáno zvrchu přes this.props, není to shis.state.
                </li>
                <li>
                  Nemění se to v čase? Není to this.state
                </li>
                <li>
                  Můžeš to vypočítat na základě jiných parametrů? Není to this.state. Zde např. var sortedContacts;
                </li>
              </ul>
              this.state s snažíme používat jen když musíme.<br />

              <br />
            </div>
          </div>
        </div>
        <div className="container well">
          <div className="row">
            <div className="col">             
              <ContactsControl
                contactsCount={this.props.contactsCount}
                itemsPerPageValues={itemsPerPageValues}
                onItemsCountChange={this.onItemsCountChange.bind(this)}
                onSortTextChange={this.onSortTextChange.bind(this)}
                sortText={this.state.sortText}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Contacts items={sortedContacts} useLoader="true" showSelectButton="true" onSelectClick={this.onSelectClick.bind(this)} />
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