import React from 'react';
import { Link } from 'react-router-dom';
//Stateless

const Nav = () => (
    
    <nav className="main-nav">
        <ul>
            <li><Link to='/birds'>Birds</Link></li>
            <li><Link to='/bees'>Bees</Link></li>
            <li><Link to='/butterflies'>Butterflies</Link></li>
        </ul>
    </nav>
);

export default Nav;