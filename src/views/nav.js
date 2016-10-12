import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = (props) => {
  return (
    <div>
        
        <Link to='/'>Home</Link> | 
        <Link
          to='admin'
          activeStyle={{
            textDecoration: 'none',
            color: 'black'
          }}
        >Admin</Link>
      </div>
  );
};

export default Nav;
