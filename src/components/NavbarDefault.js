import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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

  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper container">
          <a href="sass.html" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="produtos">Produtos<i
                className="material-icons right">arrow_drop_down</i></a>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="produtos" className="dropdown-content">
        <li>
          <NavLink to='/'>Lista</NavLink>
        </li>
        <li>
          <NavLink to='/produtos'>Novo Produto</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavbarDefault;