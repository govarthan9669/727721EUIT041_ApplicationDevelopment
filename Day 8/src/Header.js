import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BiCart } from 'react-icons/bi';
import styled from 'styled-components';
import store from "./store";
import HeaderCart from './HeaderCart';
import HomePageProfile from "./HomePageProfile";
import Cart from "./cart";
import SearchBar from "./SearchBar";





const Counter = styled.div`
  position: absolute;
  text-align: center;
  color: aliceblue;
  height: 1.5rem;
  width: 1.5rem;
  background-color: rgb(68, 68, 68);
  border-radius: 100%;
  transform: translate(0.5rem, -0.5rem);
`;

const Header = () => {
  const [width, height] = useWindowWidthAndHeight();
  console.log(height);

  const [cartCount, setCartCount] = useState(0);

  store.subscribe(() => {
    const state = store.getState();
    setCartCount(state.count);
  });

  const scrollToHome = () => {
    scroll.scrollTo("Home", {
      smooth: true,
      duration: 500,
      offset: -100, // Adjust the offset as needed
    });
  };

  
  return (
    <header>
      <div className="header-inner">
        <Link to="Home" onClick={scrollToHome} className="logo nav--link">
          KNOCK KNOCK
        </Link>
        <SmallScreensNavbar
          navClass="nav-small"
          linkClassName="nav-small-link"
        />

        <div className="flexbox">
          <div className="search">
            <div>
              <input type="text" placeholder="Search . . ." required />
            </div>
          </div>
        </div>
        


        

        <Link className="text-dark text-decoration-none mx-3" to="/Cart">
          <Counter>{cartCount}</Counter>
          <BiCart />
        </Link>

        <HomePageProfile />
      </div>
    </header>
  );
};

export default Header;
