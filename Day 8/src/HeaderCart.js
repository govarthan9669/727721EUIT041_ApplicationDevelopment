import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import styled from "styled-components";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './cart';




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
