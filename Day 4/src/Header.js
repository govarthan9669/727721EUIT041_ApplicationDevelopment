// Header.js
import React from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomePageProfile from "./HomePageProfile";

import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';




const Header = () =>{
    // use our custom hook to get the the window size
    const [width, height] = useWindowWidthAndHeight();
    console.log(height)











    return(
        <header>
            <div className="header-inner">
                <Link to="Home" 
                      smooth={true} 
                      className="logo nav-link">
                      KNOCK KNOCK
                </Link>
               
                
                <SmallScreensNavbar navClass="nav-small"
               
                                    linkClassName = "nav-small-link"/>

<div class="flexbox">
  <div class="search">
    
    <div>
      <input type="text" placeholder="Search . . ." required/>
    </div>
  </div>
</div>


                  <ShoppingCartIcon sx={{ fontSize: 35,color:"white",}}>

                  </ShoppingCartIcon>
                  <HomePageProfile>

                  </HomePageProfile>
                
            </div>
        </header>
    )
}

export default Header;

