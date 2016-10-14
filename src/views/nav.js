import React from 'react';
import { Link } from 'react-router';

const Nav = () => 
    <div>
        <Link to='/'>Home</Link> | 
        <Link
          to='admin'
          activeStyle={{
            textDecoration: 'none',
            color: 'black',
          }}
        >Admin</Link>
      </div>;

export default Nav;
