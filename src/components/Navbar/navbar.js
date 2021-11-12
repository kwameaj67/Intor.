import './navbar.css';
import React, { useState,useEffect} from 'react'
import aos from 'aos'
import "aos/dist/aos.css";

function Navbar() {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }
  useEffect(() =>{
    aos.init()
  })
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div data-aos="fade-right" data-aos-duration="1000" className="logo-name">
            <h1>intor.</h1>
          </div>
          <div className="navbar-links-container">
            <ul className="navbar-links">
              <li data-aos="fade-right" data-aos-duration="1000"><a href="/">Home</a></li>
              <li data-aos="fade-right" data-aos-duration="1200"><a href="#works">How it works</a></li>
              <li data-aos="fade-right" data-aos-duration="1400"><a href="#about">About Us</a></li>
              <li data-aos="fade-right" data-aos-duration="1600"><a href="#projects">Projects</a></li>
              <li data-aos="fade-right" data-aos-duration="2000"><a href="#news">News</a></li>
            </ul>
          </div>
          <div className={show ? "menu-toggle is-active" : "menu-toggle"} id="mobile-menu" onClick={toggleMenu}>
            <div className="bar-items">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>
      <div className={show ? "hamburger-menu active" : "hamburger-menu"}>
        <div className="hamburger-links">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="#works">How it works</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
