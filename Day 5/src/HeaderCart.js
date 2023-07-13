import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import styled from "styled-components";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './cart';


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

const HeaderCart = (props) => {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    const state = store.getState();
    setCount(state.count);
  });

  return (
    <>
      
    </>
  );
};

export default HeaderCart;
