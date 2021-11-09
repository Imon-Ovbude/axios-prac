import React from 'react';
import user from '../images/user.png';

const ContactCard = props => {
  const { id, name, email } = props.contact;

  return (
    <div className='item'>
      <img src={user} alt='user' className='ui avatar image' />
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
      </div>
      <i
        className='trash right floated alternate outline icon red'
        style={{ marginTop: '7px' }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
