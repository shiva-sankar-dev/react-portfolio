import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/Black_And_White1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleScroll = () => {
    const sections = ['home', 'about', 'resume', 'work', 'contact']
    sections.forEach(section => {
      const sectionElement = document.getElementById(section)
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.bottom >= window.innerHeight / 2 && rect.top <= window.innerHeight / 2) {
          setMenu(section)
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }), [];

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }


  return (
    <div className='navbar'>
      <p className='logo'>S  H  I  V  A</p>
      <span className='nav-mob-open' onClick={openMenu}><i class="fa-solid fa-bars" ></i></span>
      <ul ref={menuRef} className="nav-menu">
        <span className='nav-mob-close' onClick={closeMenu}><i class="fa-solid fa-xmark"></i></span>
        <li>
          <AnchorLink className='navbar-anchor-link' href='#home'>
            <span onClick={() => setMenu("home")}>Home</span>
          </AnchorLink>
          {menu === "home" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink offset={50} className='navbar-anchor-link' href='#about'>
            <span onClick={() => setMenu("about")}>About</span>
          </AnchorLink>
          {menu === "about" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink offset={50} className='navbar-anchor-link' href='#resume'>
            <span onClick={() => setMenu("resume")}>Resume</span>
          </AnchorLink>
          {menu === "resume" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink offset={50} className='navbar-anchor-link' href='#work'>
            <span onClick={() => setMenu("work")}>Work</span>
          </AnchorLink>
          {menu === "work" ? <div className="underline"></div> : null}
        </li>
        <li>
          <AnchorLink offset={50} className='navbar-anchor-link' href='#contact'>
            <span onClick={() => setMenu("contact")}>Contact</span>
          </AnchorLink>
          {menu === "contact" ? <div className="underline"></div> : null}
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
