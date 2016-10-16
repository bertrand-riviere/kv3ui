import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

const Nav = () => 
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to='/'><Icon type="appstore" />Home</Link>
        </Menu.Item>
        <Menu.Item key="admin">
          <Link to='admin'><Icon type="setting" />Administration</Link>
        </Menu.Item>
      </Menu>
    </div>;

export default Nav;
