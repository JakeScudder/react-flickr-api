import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//Stateless

const Nav = (props) => {
  
  const [search, setSearch] = useState("")

  const fetch = (state) => {
    props.fetchNav(state)
  }

  const setState = e => {
    setSearch(e.target.text);
    fetch(search)
  }

  return (
  <nav className="main-nav">
    <ul>
       {/* NavLink's for active styling */}
      <li><NavLink to='/birds'>Birds</NavLink></li>
      <li>
        <NavLink 
        to='/bees'
        text='bees'
        onChange={setState}
        >Bees
        </NavLink>
      </li>
      <li>
        <NavLink 
        to='/butterflies'
        text='butterflies'
        onChange={setState}
        >Butterflies
        </NavLink>
      </li>
    </ul>
  </nav>
  )
};

export default Nav;