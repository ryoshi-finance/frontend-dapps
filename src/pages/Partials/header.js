import React, { useEffect, useState } from "react";
import { FiMenu, FiMoon } from "react-icons/fi";
import { slide as Menu } from "react-burger-menu";
import { FiCheckCircle, FiSun } from "react-icons/fi";
//import { MenuRyoshi } from "./menu";
import Hamburger from "hamburger-react";
import Dropdown from "react-bootstrap/Dropdown";
import Toggle from "react-toggle";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useLocalStorage from "use-local-storage";

var change__theme = 0;

function Header() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const themeChange = () => {
    if (change__theme == 0) {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
      change__theme = 1;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
      change__theme = 0;
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-clasic-default-theme"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select your language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal-language">
            <article className="language">
              <img
                src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/es.svg"
                width={35}
              />
              <span>Spanish</span>
            </article>
            <article className="language">
              <img
                src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/ru.svg"
                width={35}
              />
              <span>Russian</span>
            </article>
            <article className="language">
              <img
                src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/gb.svg"
                width={35}
              />
              <span>English</span>
              <div className="is-selected">
                <FiCheckCircle />
              </div>
            </article>
            <article className="language">
              <img
                src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/jp.svg"
                width={35}
              />
              <span>Japanese</span>
            </article>
            <article className="language">
              <img
                src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/cn.svg"
                width={35}
              />
              <span>Chinese</span>
            </article>
          </section>
        </Modal.Body>
      </Modal>

      <header className="header__main">
        <section className="header__main--contain container">
          <div className="container__show d-flex justify-content-between align-items-center">
            <article className="main__logo">
              <h1>
                <a href="/">RYO.</a>
              </h1>
              <span>HOME</span>
              <div className="main__site__lang" onClick={handleShow}>
                <img
                  src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/gb.svg"
                  width={30}
                />
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

              <article className="main__options--theme" onClick={themeChange}>
                {(() => {
                  if (change__theme == 0) {
                    return (
                      <>
                        <a href="#">
                          <FiSun />
                        </a>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <a href="#">
                          <FiMoon />
                        </a>
                      </>
                    );
                  }
                })()}
              </article>

              <article className="main__options--user">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-ryoshi-basic">
                    <img src="/images/avatar-ia.png" alt="@user" width="50px" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
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
