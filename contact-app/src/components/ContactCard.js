import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = props => {
  const { id, name, email } = props.contact;

  return (
    <div className='item'>
      <img src={user} alt='user' className='ui avatar image' />
      <div className='content'>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className='header'>{name}</div>
          <div>{email}</div>
        </Link>
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
