import React from 'react'
import { useState } from "react";

import "./Navbar.scss"
import "./avatar.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true );
        return () => (window.onscroll = null);
    };
  return (  
    <>
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
        <div className="left">
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg ' alt='' />
            
            <span>Homepage</span>
            <Link to="/series">
            <span>Series</span>
            </Link>
            <Link to="movies">
            <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>Mylists</span>
        </div>
        <div className="right">
            <SearchIcon className = "icon" />
            <span>KID</span>
            <NotificationsNoneIcon className = "icon"/>
            <img src = "https://images.unsplash.com/photo-1616928296082-defb515b2c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt='' />    
            <div className='profile'>
            <ArrowDropDownIcon className = "icon"/>
            <div className='options'>
                <span>Settings</span>
                <span>Log-out</span>
            </div>
            </div>    
        </div>
     
        </div>
    </div>
    
    </>
  )  
}

