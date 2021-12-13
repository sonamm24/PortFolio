import React from 'react'
import * as FaIcons from "react-icons/fa";
import { SidebarData } from './SidebarData';
import { NavBarItem } from './NavBarItem/NavBarItem';
import './NavBar.css';

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1>SM</h1>
        <ul className='nav-menu-items'>
          {SidebarData.map(
            (item, index) => {
              return <NavBarItem
                key={index}
                title={item.title}
                path={item.path}
                icon={item.icon}
              />
            }
          )}
        </ul>
      </nav>
    )
  }
}
