import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui menu">
      <div className="ui two item menu">
        <Link to="/" className="item">Contact List</Link>
        <Link to="/add" className="item">Add contact</Link>
      </div>
    </div>
  );
};

export default Header;