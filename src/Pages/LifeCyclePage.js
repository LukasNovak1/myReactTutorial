import React, { Component } from 'react';

import Clock from '../Components/Clock'

class LifeCyclePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Component Life Cycle</h1>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              Na této stránce je jednoduchý příklad použití life cycle v komponentě clock. &nbsp;
            <a href="https://reactjs.org/docs/state-and-lifecycle.html">Clock Example</a> a &nbsp;
            <a href="https://reactjs.org/docs/react-component.html">Detailněji</a>.
            <br />
              Důležité je zde toto:
            <ul>
                <li>
                  Metody construktor() a super() musít mít parametr 'params' -> constructor(params), super(params)
              </li>
                <li>
                  Je nutné ručně uvolňovat zdroje. Když např. komponenta používá timer (setInterval) a komponenta je odstraněna z DOM, musíme timer zničit,
                nebo bude stále tikat a zabírat systémové prostředky.
              </li>
                <li>
                  Metoda <strong>componentDidMount()</strong> je volána po vykreslení komponenty do DOM.
                <br />
                  Zde by s měly volat dotazy na API serveru.
                <br />
                  Zde můžu volat setState(). Komponenta se znovu přerendruje. To se ale stane před vykreslením na obdazovku, takže změna není vidět.
              </li>
                <li>
                  Metoda <strong>componentDidUpdate()</strong> není volána při inicializaci.
                <br />
                  Volá se po updatu komponenty.
                <br />
                  Po porovnání původních a nových props zde můžeme volat api. Pokud props nebudeme porovnávat se starym9 hodnotami, komponenta se bude předendrovávat pořád dokola a vytvoříme nekonečnou smyčku.
                <br />
                  <br />
                  <strong>
                    {'componentDidUpdate(prevProps) {'}<br />
                    &nbsp;&nbsp;{'// Typical usage (dont forget to compare props):'}<br />
                    &nbsp;&nbsp;{'if (this.props.userID !== prevProps.userID) {'}<br />
                    &nbsp;&nbsp;{'  this.fetchData(this.props.userID);'}<br />
                    &nbsp;&nbsp;{'}'}<br />
                    {'}'}
                  </strong>
                  <br />
                  <br />
                </li>
                <li>
                  Metoda <strong>componentWillUnmount()</strong> je volána před odstraněním komponenty z DOM. Zde by se měly rušit timery, nebo volání API.
              </li>
                <li>
                  Nepoužívat metodu <strong>UNSAFE_componentWillMount()</strong>.
                Místo ní je lepší použít constructor().
              </li>
                <li>
                  Metodu <strong>componentWillUpdate()</strong> nepoužívat.
              </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container well">
          <div className="row">
            <div className="col">
              Zde jsou dvě stejné komponenty Clock. První z nich v metodě componentWillUnmount() zničí timer a druhá ne. <br />
              Co to dělá lze ověřit tak, že v prohlížeči otevřeme Console. Po načtení stránky F5 je vidět, že tikají oba timery. Po přepnutí na jinou stránku timer2 stále tiká.
            </div>
          </div>
          <div className="row">
            <div className="col">
              <br/>
              timer1:
              <Clock timerName="timer1" callUnmount={true} />
              timer2:
              <Clock timerName="timer2" callUnmount={false} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LifeCyclePage
