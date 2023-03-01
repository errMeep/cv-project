import React, { Component } from 'react';
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={this.onChange} />
          <label htmlFor="email">Name: </label>
          <input type="text" name="email" onChange={this.onChange} />
          <label htmlFor="name">Name: </label>
          <input type="phone" name="phone" onChange={this.onChange} />
        </form>
        <p>name: {this.state.name}</p>
        <p>email: {this.state.email}</p>
        <p>phone: {this.state.phone}</p>
      </div>
    );
  }
}

export default Contact;
