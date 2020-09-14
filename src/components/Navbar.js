import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Navbar () {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="menu-bars">
          <FaIcons.FaBars />
        </Link>
      </nav>
    </>
  )
}

export default Navbar;