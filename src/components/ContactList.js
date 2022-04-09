import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const removeContactHandler = (id) => { props.getContactId(id) };
  const renderContactList = props.contacts.map((contact, index) => {
    return (
      <ContactCard contact={contact} key={contact.id} clickHandler={removeContactHandler}/>
    );
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      <div className="ui relaxed divided list">
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;