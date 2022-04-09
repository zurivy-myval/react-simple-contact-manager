import React from "react";
import user from "../images/user.png";

const ContactCard = (props)  => {
  const { id, name, email} = props.contact;

  return (
    <div className="item">
      <img className="ui tiny circular middle aligned image" src={user} alt="user"/>
      <div className="content middle aligned">
        <div className="ui medium header">{ name }</div>
        <div className="description">{ email }</div>
      </div>
      <i className="trash alternate outline middle aligned icon icon-delete" onClick={() => props.clickHandler(id)}></i>
    </div>
  );
};

export default ContactCard;