import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import './index.less'

const { Header } = Layout;

const menu = () => (
  <Menu>
    <Menu.Item>哈哈哈</Menu.Item>
    <Menu.Item>阿舒服点</Menu.Item>
  </Menu>
);

function MainHeader() {
  return (
    <Header>
      <div className='header'>
        {/* <Dropdown overlay={menu}>菜单</Dropdown> */}
        111
      </div>
    </Header>
  );
}

export default MainHeader;
