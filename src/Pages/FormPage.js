import React, { Component } from 'react';
import UserRegistrationForm from '../Components/UserRegistrationForm'

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
      </div>
    )
  }
}
export default FormPage