import React from 'react';

function NavMenu(props) {
  const {menus} = props;
  return (
    <div className="nav-menu">
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index}><a href={menu.link}>{menu.name}</a></li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavMenu;