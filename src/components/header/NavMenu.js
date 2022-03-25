import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function NavMenu(props) {
  const {menus} = props;
  return (
    <div className="nav-menu">
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index}><Link to={menu.link}>{menu.name}</Link></li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;
