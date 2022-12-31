import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import './Navbar.css';

function Navbar(props) {
  return (
    <div className='navBar'>
      <FaArrowLeft className='navBar-icon'
        onClick={props.buttonClick}
      />
      <Link to="/">Home </Link>
      <Link to="/two">Two</Link>
    </div>
  );
};

export default Navbar;