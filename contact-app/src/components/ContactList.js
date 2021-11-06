import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
  const { contacts } = props;

  const renderContactList = contacts.map((contact, id) => {
    return <ContactCard key={id} contact={contact} />;
  });

  return (
    <div className='ui celled list'>
      <h2>Contact List</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
