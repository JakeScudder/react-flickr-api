import React from 'react';
import { NavLink } from 'react-router-dom';
//Stateless

const Nav = (props) => {
  
  const fetch = (text) => {
    props.fetchNav(text)
  }

  const setLink = e => {
    let link = e.target.name;
    fetch(link)
  }

  return (
  <nav className="main-nav">
    <ul>
       {/* NavLink's for active styling */}
       <li><NavLink exact to='/' name='buttercups' onClick={setLink}>Home</NavLink></li>
      <li><NavLink to='/birds' name='birds' onClick={setLink}>Birds</NavLink></li>
      <li><NavLink to='/bees' name='bees' onClick={setLink} >Bees </NavLink> </li>
      <li> <NavLink to='/butterflies' name='butterflies' onClick={setLink} >Butterflies </NavLink> </li>
    </ul>
  </nav>
  )
};

export default Nav;