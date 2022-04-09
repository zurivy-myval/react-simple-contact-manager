import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  let navigate = useNavigate();

  const submitContact = (e) => {
    e.preventDefault();

    if(name === "" || email === ""){
      alert("All the fields are mandatory!");
      return;
    }

    addContactHandler({name, email});
    setEmail('');
    setName('');

    navigate("/");
  };

  return(
    <div className="ui main">
      <form className="ui form" onSubmit={submitContact}>
        <h4 class="ui dividing header">Add Contact</h4>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={ name } onChange={ (e) => setName(e.target.value)}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <button className="ui button">Add new contact</button>
      </form>
    </div>
  );
};

export default AddContact;