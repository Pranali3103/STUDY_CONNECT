import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Notes",
    url: "#",
  },
  {
    display: "Doubts",
    url: "#",
  },
  {
    display: "Student Progress",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Study Connect.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>

            <div className="login__signup">
              <Link to="/login" className="btn btn-primary"
              style={{
                backgroundColor: "#3bb19b",
                color: "#FFF",
                borderRadius:"20px"}}
              >Login</Link>
              <Link to="/signup" className="btn btn-primary" style={{
            backgroundColor: "#3bb19b",
            color: "#FFF",
            borderRadius:"20px"
          }}>Signup</Link>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
