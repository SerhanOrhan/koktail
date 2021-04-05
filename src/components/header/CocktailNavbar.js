import React from 'react';
import {Navbar} from 'react-bootstrap';
import NavMenu from './NavMenu';

function CocktailNavbar(props) {
  const {menus, brandName} = props;
  return (
    <Navbar bg="light" variant="light" className="mb-3">
      <div className="d-flex align-items-center">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          {brandName}
        </Navbar.Brand>
        <NavMenu menus={menus}/>
      </div>
    </Navbar>
  );
}

export default CocktailNavbar;