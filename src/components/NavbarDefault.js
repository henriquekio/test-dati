import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavbarDefault() {
  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    // eslint-disable-next-line no-undef
    const instance = M.Dropdown.getInstance(elems[0]);
    if (typeof instance === 'undefined') {
      // eslint-disable-next-line no-undef
      M.Dropdown.init(elems, {
        alignment: 'left-bottom',
        coverTrigger: false,
        constrainWidth: false
      });
    }

    const elemsNav = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-undef
    const instanceNav = M.Sidenav.getInstance(elemsNav);

    if (typeof instanceNav === 'undefined') {
      // eslint-disable-next-line no-undef
      M.Sidenav.init(elemsNav);
    }
  }, []);

  const closeNavbar = () => {
    const elemsNav = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-undef
    const instanceNav = M.Sidenav.getInstance(elemsNav[0]);
    instanceNav.close();
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Dati - Shop
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="produtos">
                Produtos<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="produtos" className="dropdown-content">
        <li>
          <NavLink className="blue-text" to="/">
            Lista
          </NavLink>
        </li>
        <li>
          <NavLink className="blue-text" to="/produtos/novo">
            Novo Produto
          </NavLink>
        </li>
      </ul>
      <ul className="sidenav" id="mobile-menu">
        <li onClick={closeNavbar}>
          <NavLink className="white-text" to="/">
            Lista
          </NavLink>
        </li>
        <li onClick={closeNavbar}>
          <NavLink className="white-text" to="/produtos/novo">
            Novo Produto
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavbarDefault;
