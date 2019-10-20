import React, { Component } from 'react';
import NavbarDefault from './NavbarDefault';

class MainContent extends Component {
  render() {
    return (
      <>
        <NavbarDefault/>
        <main>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default MainContent;