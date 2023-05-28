import React, { useEffect, useState } from "react";
import { FiMenu, FiMoon } from "react-icons/fi";
import { slide as Menu } from "react-burger-menu";
//import { MenuRyoshi } from "./menu";
import Hamburger from "hamburger-react";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header__main">
        <section className="header__main--contain container">
          <div className="container__show d-flex justify-content-between align-items-center">
            

            <article className="main__logo">
              <h1>RYO.</h1>
              <span>HOME</span>
              <div className='main__site__lang'>
                <img src='https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/gb.svg' width={30} />
              </div>
            </article>

            <div className="main__search">
              <form className="main__search--form">
                <input
                  type="text"
                  placeholder="Search only Ryoshi"
                  className="input"
                />
              </form>
            </div>

            <div className="main__options d-flex justify-content-between align-items-center">
              <article className="main__options--menu">
                <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF" />
              </article>


              <article className="main__options--theme">
                <a href="#">
                  <FiMoon />
                </a>
              </article>

              <article className="main__options--user">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-ryoshi-basic">
                    <img src="/images/avatar-ia.png" alt="@user" width="50px" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                        My Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </article>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
