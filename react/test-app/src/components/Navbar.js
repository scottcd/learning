import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import './Navbar.css';


class Navbar extends React.Component {
  render() {
    const bg = this.props.bgColor;

    return (
      <div className='navBar' style={{background: bg}}>
        <FaArrowLeft className='navBar-icon' onClick={this.props.toggleNav}/>
        <Link to="/">Home </Link>
        <Link to="/two">Two</Link>
      </div>
    );
  }
}

export default Navbar;