﻿import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (      
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Homepage</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.

              Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;