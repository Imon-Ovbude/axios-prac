import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
  const { contacts, getContactId } = props;

  const deleteContactHandler = id => {
    getContactId(id);
  };

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
    <div className='ui celled list'>
      <h2>Contact List</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
