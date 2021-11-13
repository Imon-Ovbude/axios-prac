import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = props => {
  // const { contacts, getContactId } = props;
  const { getContactId } = props;

  const deleteContactHandler = id => {
    getContactId(id);
  };

  const contacts = [
    {
      id: '1',
      name: 'mike lawry',
      email: 'mikelawry@player.com',
    },
  ];

  const renderContactList = contacts.map(contact => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <div className='contact-list-main'>
      <div className='ui celled list'>
        <h2 className='ui header'>
          Contact List{' '}
          <Link to='/add'>
            <button className='ui button basic blue primary right floated'>
              Add Contact
            </button>
          </Link>
        </h2>

        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
