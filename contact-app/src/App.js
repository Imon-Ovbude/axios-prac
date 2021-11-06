import React from 'react';
import './App.css';
import Header from './cpmponents/Header';
import AddContact from './cpmponents/AddContact';
import ContactList from './cpmponents/ContactList';

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
