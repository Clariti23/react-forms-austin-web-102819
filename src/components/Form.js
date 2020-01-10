import React from "react";

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    let dataArray = this.state.submittedData.concat(formData);
    this.setState({ submittedData: dataArray });
  };

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return (
        <div>
          <span>{data.firstName}</span>

          <span>{data.lastName}</span>
        </div>
      );
    });
  };
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        First Name:
        <input
          type="text"
          name="firstName"
          onChange={event => this.handleChange(event)}
          value={this.state.firstName}
        />
        Last Name:
        <input
          type="text"
          name="lastName"
          onChange={event => this.handleChange(event)}
          value={this.state.lastName}
        />
        <input type="submit" />
        {this.listOfSubmissions()}
      </form>
    );
  }
}

export default Form;
