import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import UserInfo from '../containers/UserInfo';

// in Menu: selectedKeys={"home"}
const Nav = () =>
    (<div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="admin">
          <Link to="admin"><Icon type="setting" />Administration</Link>
        </Menu.Item>
        <SubMenu title={<span><Icon type="user" /></span>}>
          <Menu.Item key="userAction1"><UserInfo /></Menu.Item>
        </SubMenu>
      </Menu>
    </div>);

export default Nav;
