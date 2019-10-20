import React from 'react';
import NavbarDefault from "./NavbarDefault";

function MainContent(props) {
  return (
    <>
      <NavbarDefault/>
      <main>
        {props.children}
      </main>
    </>
  );
}

export default MainContent;