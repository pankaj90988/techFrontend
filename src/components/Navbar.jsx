import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Navbar.css'
import Logo from '../assets/panku.jpeg'

const Navbar = () => {

    useGSAP(() => {
        gsap.from(".brand-logo img", {
            y: -70,
            duration: 0.6,
            delay: 0.1,
            transition:2,
            opacity: 0
        })
    })
    useGSAP(() => {
        gsap.from("ul li", {
            y: -50,
            duration: 0.5,
            delay: 0.1,
            opacity: 0,
            stagger: -0.3
        })
    })
    useGSAP(() => {
        gsap.from("input", {
            y: -50,
            duration: 0.5,
            delay: 0.5,
            opacity: 0,
            stagger: 0.3
        })
    })






    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    const [input, setinput] = useState("");
    // const [navWidth, setNavWidth] = useState(false);
    // const [addclass, setaddclass] = useState("");


    const inputHandler = (e) => {
        console.log(e.target.value);
        setinput(e.target.value);
        console.log(input);
    }
    const searchHandler = (e) => {
        console.log(e.target);
        //  setOpen()
    }






    return (
        <>
            <header>
                <div className="container">
                    <div className="brand-logo">
                        <Link to="/"><img src={Logo} alt="Brand Logo" /></Link>
                    </div>

                    <div className={open ? ("search display") : ("search")}>
                        <input
                            value={input}
                            className='search-input'
                            type="text" placeholder='Search here..'
                            onChange={(e) => inputHandler(e)}
                        />
                        <input className='search-btn'
                            type="button"
                            value="Search"
                            onClick={(e) => searchHandler(e)}
                        />
                    </div>

                    <nav>
                        <div className={menu ? ("main-menu-cont-open") : ("main-menu-cont")}>
                            <ul className={!menu ? "nav navWidth" : "nav"}>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/service">Services</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="search-icon-menu-icon-main-cont">
                        <div className="search-icon-menu-icon">
                            <div className="search-icon" onClick={() => {
                                setOpen(!open);
                            }}>
                                <IoSearchOutline className='menu-cross-bar-search' />
                            </div>
                            <div className="menu-icon" onClick={() => {
                                setMenu(!menu)
                            }}>
                                {
                                    !menu ? (<RiMenu3Line className='menu-cross-bar-search' />) : (<RiCloseLargeFill className='menu-cross-bar-search' />)
                                }
                            </div>
                        </div>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Navbar