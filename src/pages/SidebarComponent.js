import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
// import 'react-pro-sidebar/dist/css/styles.css';
import '../style/SidebarComponent.css'; // Import your custom CSS file for hover and active effects

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <button className="menu-icon" onClick={() => setCollapsed(!collapsed)}>
        <i className={collapsed ? "fa fa-bars" : "fa fa-times"}></i>
      </button>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem icon={<i className="fa fa-book" />}>
            Documentation
            <Link to="/documentation" />
          </MenuItem>
          <MenuItem icon={<i className="fa fa-calendar" />}>
            Calendar
            <Link to="/calendar" />
          </MenuItem>
          <SubMenu title="E-commerce" icon={<i className="fa fa-shopping-cart" />} dropDownIcon={<i className="fa fa-angle-down" />}>
            <MenuItem>
              Sub Item 1
              <Link to="/e-commerce/sub-item-1" />
            </MenuItem>
            <MenuItem>
              Sub Item 2
              <Link to="/e-commerce/sub-item-2" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
