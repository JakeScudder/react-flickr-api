import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//Stateless

const Nav = (props) => {
  
  const [link, setLink] = useState("")

  const fetch = (text) => {
    props.fetchNav(text)
  }

  const setState = e => {
    setLink(e.target.text);
    fetch(link)
  }

  return (
  <nav className="main-nav">
    <ul>
       {/* NavLink's for active styling */}
      <li><NavLink to='/birds' text='birds' onClick={setState}>Birds</NavLink></li>
      <li><NavLink to='/bees' text='bees' onClick={setState} >Bees </NavLink> </li>
      <li> <NavLink to='/butterflies' text='butterflies' onClick={setState} >Butterflies </NavLink> </li>
    </ul>
  </nav>
  )
};

export default Nav;