import React from 'react';
import { NavLink } from 'react-router-dom';
//Stateless

const Nav = (props) => {
  
  const setLink = e => {
    let link = e.target.name;
    props.fetchNav(link)
  }

  return (
  <nav className="main-nav">
    <ul>
       <li><NavLink exact to='/' name='buttercups' onClick={setLink}>Home</NavLink></li>
      <li><NavLink to='/birds' name='birds' onClick={setLink}>Birds</NavLink></li>
      <li><NavLink to='/bees' name='bees' onClick={setLink} >Bees </NavLink> </li>
      <li> <NavLink to='/butterflies' name='butterflies' onClick={setLink} >Butterflies </NavLink> </li>
    </ul>
  </nav>
  )
};

export default Nav;