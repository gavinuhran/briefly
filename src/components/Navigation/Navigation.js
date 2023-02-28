import React from 'react';
import './Navigation.css'
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';

function Navigation() {
  return (
    <div className="navigation">
        <TopMenu />
        <SideMenu />
    </div>
  );
}

export default Navigation;
