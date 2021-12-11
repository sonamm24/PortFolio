import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { NavBarItem } from './NavBarItem/NavBarItem';
import './NavBar.css';

export class Navbar extends React.Component {

  constructor(props) {
    super(props);

    const { visibilityStart = false } = props;

    this.state = {
      visible: visibilityStart
    }
  }

  toggleSidebar() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }


  render() {
    return (
      <div className="navbar">
        <div className="menuButton">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={() => this.toggleSidebar()} />
          </Link>
        </div>
        <nav className={this.state.visible ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navBar-toggle'>
              <Link to="#" className='menu-bars'>
                <IoIcons.IoIosArrowDropdownCircle onClick={() => this.toggleSidebar()} />
              </Link>
            </li>
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
      </div>
    )

  }
}
