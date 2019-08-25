import React, { Component } from "react";

class RegisterationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      address: "",
      gender: "M"
    };
  }

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  addressChangeHandler = event => {
    this.setState({
      address: event.target.value
    });
  };

  genderChangeHandler = event => {
    this.setState({
      gender: event.target.value
    });
  };

  onFormSubmit = event => {
    alert(this.state.username, this.state.address);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Username : </label>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            value={this.state.username}
          />
          <label>Password : </label>
          <input
            type="password"
            onChange={this.passwordChangeHandler}
            value={this.state.password}
          />
          <label>Adddress : </label>
          <textarea
            type="address"
            onChange={this.addressChangeHandler}
            value={this.state.address}
          />
          <label>Gender : </label>
          <select value={this.state.gender} onChange={this.genderChangeHandler}>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterationForm;
