import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Uuid from 'uuid'
import Localization, { LocalizationContext } from '../Context/Localization'

class Router extends Component {
  onCultureChange(value) {
    this.props.onCultureChange(value);
  }

  render() {
    var menuItems;
    var routeItems;
    let cultureContext = this.context;
    let loc = cultureContext.resources;

    //Priklad menuItem
    //https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
    //{          
    //  name: 'Home',           //nazev page
    //  url: '/',               //url
    //  component: PageHome,    //vykreslovana komponenta
    //  exact: true             //Pokud je false, bere vse co zacina '/'. Potom url '/page1' by vykreslila obsah stranku s url '/' i s url '/page1'
    //}   

    if (this.props.menuItems) {
      menuItems = this.props.menuItems.map(menuItem => {
        return (
          <li key={Uuid.v4()} >
            <Link to={menuItem.url} className="nav-link">{menuItem.name}</Link>
          </li>
        );
      });

      routeItems = this.props.menuItems.map(menuItem => {
        return (
          menuItem.exact
            ?
            <Route path={menuItem.url} exact component={menuItem.component} key={Uuid.v4()} />
            :
            <Route path={menuItem.url} component={menuItem.component} key={Uuid.v4()} />
        );
      });

    } else {
      menuItems = 'No menu items. Please set property "menuItems"';
    }

    return (
      <BrowserRouter data-culture={cultureContext.cultureCode}>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div>
                <ul className="nav navbar-nav">
                  {menuItems}
                </ul>
              </div>
              <div className="nav-localization">                
                <Localization onCultureChange={this.onCultureChange.bind(this)} cultureSettings={cultureContext} />
              </div>
            </div>
          </nav>
          <div className="page">
            {routeItems}
          </div>
        </div>
      </BrowserRouter >
    );

  }

}
Router.contextType = LocalizationContext;
export default Router;