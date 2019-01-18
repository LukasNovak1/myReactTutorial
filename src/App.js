import React, { Component } from 'react';
import PropTypes from 'react';

//custom components
import Router from './Components/Router'

//navigation
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import GetMethodPage from './Pages/GetMethod1Page'
import GetMethod2Page from './Pages/GetMethod2Page'
import ContextPage from './Pages/ContextPage'
import LifeCyclePage from './Pages/LifeCyclePage'
import FormPage from './Pages/FormPage'
import SvgPage from './Pages/SvgPage'
import BarcodePage from './Pages/BarcodePage'

//localization - pouzito na strance ContextPage.js
import Localization, { LocalizationContext, GetDefaultCulture } from './Context/Localization'
import localization_cz from './Localization/cz.json'
import localization_en from './Localization/en.json'
import localization_de from './Localization/de.json'


class App extends Component {
  constructor() {
    super();
    this.state = {
      navigationMenuItems: [],
      cultureSettings: {},
      currentCulture: {}
    }
  }

  componentWillMount() {
    this.RefreshInitValues();
  }

  RefreshInitValues(currentCulture) {
    //Metoda se vola vzdy po refreshi
    let cultures = [
      {
        cultureCode: 'cz',
        cultureName: 'Česky',
        resources: localization_cz,
        isDefault: true
      },
      {
        cultureCode: 'en',
        cultureName: 'English',
        resources: localization_en
      },
      {
        cultureCode: 'de',
        cultureName: 'Deutsch',
        resources: localization_de        
      }
    ];

    if (!currentCulture) {
      currentCulture = GetDefaultCulture(cultures);
    }
    
    this.setState({
      navigationMenuItems: [
        {
          name: currentCulture.resources.navHome,
          url: '/',
          component: HomePage,
          exact: true
        },
        {
          name: currentCulture.resources.navProjects,
          url: '/projects',
          component: ProjectsPage,
          exact: true
        },
        {
          name: 'Get method 1',
          url: '/getmethod1',
          component: GetMethodPage,
          exact: true
        },
        {
          name: 'Get method 2',
          url: '/getmethod2',
          component: GetMethod2Page,
          exact: true
        },
        {
          name: 'Context',
          url: '/contextPage',
          component: ContextPage,
          exact: true
        },
        {
          name: 'Life cycle',
          url: '/LifeCyclePage',
          component: LifeCyclePage,
          exact: true
        },
        {
          name: 'Form / Lazy',
          url: '/FormPage',
          component: FormPage,
          exact: true
        },
        {
          name: 'SVG',
          url: '/Svg',
          component: SvgPage,
          exact: true
        },
        {
          name: 'Barcore',
          url: '/Barcode',
          component: BarcodePage,
          exact: true
        }
      ],
      cultureSettings: {
        cultures: cultures,
        currentCulture: currentCulture
      }
    }
    );

  }

  onCultureChange(value) {    
    let cultSettings = this.state.cultureSettings;
    cultSettings.currentCulture = value;

    this.setState({
      cultureSettings: cultSettings
    }, function () {

      //tuto funkci volam, aby se pri zmene culture zmenil jazyk i v navigaci.
      this.RefreshInitValues(cultSettings.currentCulture);
    });
  }

  render() {    
    return (
      <div className="App">
        <LocalizationContext.Provider value={this.state.cultureSettings}>          
          <Router menuItems={this.state.navigationMenuItems} cultureSettings={this.state.cultureSettings} onCultureChange={this.onCultureChange.bind(this)} />
        </LocalizationContext.Provider>
      </div>
    );
  }

}

export default App;
