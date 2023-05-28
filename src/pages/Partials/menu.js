import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FiMenu } from "react-icons/fi";

class MenuRyoshi extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  

  render() {

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
        

        <Menu  customCrossIcon={ false } customBurgerIcon={ false } >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
      </>
    );
  }
}

export { MenuRyoshi };
