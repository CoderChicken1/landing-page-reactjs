import React, {useState} from "react";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <a href = "#home" className="nav__link text__upper fw__bold fs-26 text__light">
                        TECHDOR
                    </a>
                    <button type = "button" className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
                        <FaBars size = {26} />
                    </button>
                </div>

                 <div className="navbar__collapse">
                    <ul className="navbar__nav">
                        <li className="nav__item ">
                            <a href = "#home" className = "nav__link text__upper fw__6 fs-14 text__light ">home</a>
                        </li>
                        <li className="nav__item ">
                           <a href = "#about" className = "nav__link text__upper fw_6  fs-14 text__light">about</a>                        
                        </li>
                        <li className="nav__item ">
                            <a href = "#services" className = "nav__link text__upper fw_6 fs-14 text__light">services</a>
                        </li>
                        <li className="nav__item ">
                            <a href = "#portfolio" className = "nav__link text__upper fw_6 fs-14 text__light">PORTFOLIO</a>
                        </li>
                        <li className="nav__item ">
                            <a href = "#contact" className = "nav__link text__upper fw_6 fs-14 text__light">contact</a>
                        </li>
                        <hr/>
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type = "button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size = {32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
                            <li className = "nav__item">
                                <a href = "#home" className="nav__link text__upper fw__6 nav__active text__light">home</a>
                            </li>
                            <li className = "nav__item">
                                <a href = "#about" className="nav__link text__upper fw__6 text__light">about</a>
                            </li>
                            <li className = "nav__item">
                                <a href = "#services" className="nav__link text__upper fw__6 text__light">services</a>
                            </li>
                            <li className="nav__item">
                            <a href = "#portfolio" className = "nav__link text__upper fw_6 text__light">PORTFOLIO</a>
                        </li>
                            <li className = "nav__item">
                                <a href = "#contact" className="nav__link text__upper fw__6 text__light">contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;