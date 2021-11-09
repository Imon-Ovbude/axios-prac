import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name === '' || this.state.email === '') {
      alert('Please fill in all fields');
      return;
    }

    console.log(this.state);
  };

  render() {
    return (
      <div className='ui main'>
        <h2>Add Contact</h2>
        <form action='' className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='field'>
            <label htmlFor='name'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
