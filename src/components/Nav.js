import React from 'react';
import { NavLink } from 'react-router-dom';
//Stateless

const Nav = (props) => {
  
  const fetch = (query) => {
    props.fetchNav(query)
  }

  return (
  <nav className="main-nav">
    <ul>
       {/* NavLink's for active styling */}
      <li><NavLink to='/birds'>Birds</NavLink></li>
      <li><NavLink to='/bees'>Bees</NavLink></li>
      <li><NavLink to='/butterflies' onClick={fetch("butterflies")}>Butterflies</NavLink></li>
    </ul>
  </nav>
  )
};

export default Nav;