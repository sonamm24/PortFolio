import React from 'react';
import './NavBarItem.css';
import { Link } from 'react-router-dom';

export class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    const { title, path, icon } = props;

    this.state = {
      title: title,
      path: path,
      icon: icon
    }
  }

  render() {
    return (
      <li className="navbaritem">
        <Link to={this.state.path}>
          {this.state.icon}
          <span>
            {this.state.title}
          </span>
        </Link>
      </li>
    )
  }
}
