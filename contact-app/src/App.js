import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // const contacts = [
  //   {
  //     id: '1',
  //     name: 'Billy',
  //     email: 'billy@xyz.com',
  //   },
  //   {
  //     id: '2',
  //     name: 'Bob',
  //     email: 'bob@xyz.com',
  //   },
  //   {
  //     id: '3',
  //     name: 'Thorton',
  //     email: 'thorton@xyz.com',
  //   },
  // ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
