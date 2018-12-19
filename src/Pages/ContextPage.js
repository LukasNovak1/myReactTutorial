import React, { Component } from 'react';

import { LocalizationContext } from '../Context/Localization'

class ContextPage extends Component {
  render() {
    let props = this.props;
    let cultureContext = this.context.currentCulture;
    let cultureCode = cultureContext.cultureCode;
    let cultureName = cultureContext.cultureName;
    let loc = cultureContext.resources;    

    console.log("tady");
    console.log(cultureContext);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{loc.pageTitleContext}</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              <span>Context se hodí pro data, která se při běhu programu nemění (konfigurace, resourceStringy...)</span>
              <br/>
              <a href="https://reactjs.org/docs/context.html">Návod</a>
              <br /><br />
              <ul>
                <li>Context obsahuje data dostupná ve všech child komponentách.</li>
                <li>Context by se měl používat jen na ta datam která se skoro nikdy nemění.</li>
                <li>Toto je příklad použití contextu k lokalizaci webu.</li>
                <li>V Localization.js je switch pro přepínání kultury. Ten při změně vyvolá událost this.props.onCultureChange a vrátí vybranou kulturu do
                  rodiče. Tuto událost je třeba zpropagovat až na nejvyšší úroveň rodičů, od které chceme kontext používat.</li>
                <li>Localization.js obsahuje metodu LocalizationContext. Obalení obsahu stránky (metoda render v App.js) tagem {"{"}LocalizationContext.Provider value={"'"}objektKontextu{"'"}{"}"} umožníme přístup do contextu všem podřízeným komponentám. Parametr value obsahuje objekt contextu.</li>
                <li>Každá komponenta podřízená html tagu LocalizationContext.Provider musí na konci před kódem 'export detault (componentName)' mít vložen řádek '(componentName).contextType = LocalizationContext;' (např. Router.contextType = LocalizationContext;). Zároveň na začátku musí být 'import  {"{"} LocalizationContext {"}"}  from '../Context/Localization''</li>
                <li>K objektu Contextu se v komponentě dostame přes 'let cultureContext = this.context;'</li>
                <li>Soubory s p+rekladu jsou '/Localization/cz.json'. Ty se v App.js musí ručně naimportovat.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              <div>
                Culture: {cultureName}, {cultureCode}
              </div>
              <div>
                Letadlo: {loc.plane}
              </div>
              <div>
                Loď: {loc.ship}
              </div>
              <div>
                Židle: {loc.chair}
              </div>
            </div>
          </div>
        </div>

      </div >
    )

  }
}
ContextPage.contextType = LocalizationContext;
export default ContextPage