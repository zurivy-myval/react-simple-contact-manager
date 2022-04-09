import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const dummyContactsData = [
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'johndoe@contact.com',
    },
    {
      id: uuidv4(),
      name: 'Jenny Doe',
      email: 'jennydoe@contact.com',
    },
    {
      id: uuidv4(),
      name: 'Frank Doe',
      email: 'frankdoe@contact.com',
    },
  ];

  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = useState(dummyContactsData);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>

        <Router>
        <Header />
        <div className="ui hidden section divider"></div>
          <Routes>
            <Route index element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}/>
            <Route path="add" element={<AddContact addContactHandler={addContactHandler} />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
