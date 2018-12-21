import React, { Component, Suspense } from 'react';
import UserRegistrationForm from '../Components/UserRegistrationForm'
import MyErrorBoundary from '../Components/Lazy/MyErrorBoundary'
const TimeConsumingComponent = React.lazy(() => import('../Components/Lazy/TimeConsumingComponent'));

class FormPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Form, Controlled Components</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              Zpracování formulářů. Příklad: <a href="https://reactjs.org/docs/forms.html">https://reactjs.org/docs/forms.html.</a>
              <br />
              Controlled components: Jediným zdrojem dat pro inputy je this.state kontrolky. Proto při vytvoření komponenty se do inputu zapíše stav this.state.něco a při změně inputu se změna hned propíše do this.state.něco.
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col">
              <UserRegistrationForm />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Lazy load</h1>
            </div>
          </div>
        </div>
        <div className="container well">
          <div className="row">
            <div className="col">
              <strong>Lazy load:</strong> <a href="https://reactjs.org/docs/code-splitting.html">Lazy manual</a>
              <br />
              Celý projekt je zbundlován do jednoho .js souboru. Pokud používám mnoho velkých knihoven třetích stran, může se stát, že se bude stránka načítat
              dlouho kvůli velkému .js souboru. Proto se používá Lazy Load. Komponenta je načtena ze serveru až poté, co ji skutečně potřebujeme. <br />
              Komponenta Suspense, která vykresluje loadovací kolečko je obalena komponentou MyErrorBoundary. Ta slouží k zobrazení chybové hlášku.
              Zobrazí se v okamžíku,kdy v komponentách pod ní dojde k chybě.<br />
              Toto konkrétní použití není správné, protože simuluju načítání velké knihovny pomocí dlouhého výpočtu. komponenta se potom chová nestandardně.
              Při prvním načtení stránky funguje dobře, při překliknutí jinam a zpátku už to nefunguje.<br />
              Pomocí Lazy lze načítat i <a href="https://reactjs.org/docs/code-splitting.html"> celé routy </a>. Nadpis Route-based code splitting
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <MyErrorBoundary>
                <Suspense fallback={<div className="loader"></div>}>
                  <TimeConsumingComponent />
                  <TimeConsumingComponent />
                </Suspense>
              </MyErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FormPage