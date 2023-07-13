import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import styled from 'styled-components';
import store from "./store";
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import Cart from './cart';
import HeaderCart from './HeaderCart';
import HomePageProfile from "./HomePageProfile";


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

  const [count, setCount] = useState(0);

  store.subscribe(() => {
    const state = store.getState();
    setCount(state.count);
  });

  return (
    <header>
      <div className="header-inner">
        <Link to="Home" smooth={true} className="logo nav-link">
          KNOCK KNOCK
        </Link>

        <SmallScreensNavbar
          navClass="nav-small"
          linkClassName="nav-small-link"
        />

        <div class="flexbox">
          <div class="search">
            <div>
              <input type="text" placeholder="Search . . ." required />
            </div>
          </div>
        </div>

        <Navbar bg="light" expand="lg" sticky="top">
          <Link className="text-dark text-decoration-none mx-3" to="/Cart">
            <Counter>{count}</Counter>
            <BiCart />
          </Link>
        </Navbar>

         <HomePageProfile/>
      </div>
    </header>
  );
};

export default Header;
