import React, { Component } from 'react';


class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: 'F',
      agree: false
    };
  }

  onSubmit(event) {
    alert("Jůza ridžistát madafaká: " + this.state.firstName + ", " + this.state.lastName + ", " + this.state.gender + ", " + this.state.agree);
    event.preventDefault();
  }

  onInputChange(event) {
    let value;

    if (event.target.type == "checkbox") {
      console.log(event.target.name);
      value = event.target.checked;
      console.log(event.target.checked);
    } else {
      value = event.target.value;
    }

    this.setState({
      [event.target.name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h3>
          Registration form
        </h3>
        <div>
          <label>
            First name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.onInputChange.bind(this)} />
          </label>
        </div>
        <div>
          <label>
            Last name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.onInputChange.bind(this)} />
          </label>
        </div>
        <div>
          <label>
            Gender:
          <select value={this.state.gender} name="gender" onChange={this.onInputChange.bind(this)} className="totoByMelaBytOddelenaKomponenta">
            <option value="F">F</option>
            <option value="M">M</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Agree:
            <input name="agree" type="checkbox" checked={this.state.agree} onChange={this.onInputChange.bind(this)} />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
export default UserRegistrationForm