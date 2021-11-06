import React, { Component } from 'react';

class AddContact extends Component {
  render() {
    return (
      <div className='ui main'>
        <h2>Add Contact</h2>
        <form action='' className='ui form'>
          <div className='field'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' placeholder='Name' />
          </div>
          <div className='field'>
            <label htmlFor='name'>Email</label>
            <input type='text' name='name' id='name' placeholder='Email' />
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
