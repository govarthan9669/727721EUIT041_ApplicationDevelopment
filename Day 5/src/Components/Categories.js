





import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Nav, Navbar } from "react-bootstrap";

const Categories = (props) => {
  return (
    <Navbar className="mt-3 container min-vw-100 navbar-nav-scroll justify-align-content-around">
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("All")}
        >
          All
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Snacks")}
        >
          Snacks
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Staple")}
        >
          Staples
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Dairy")}
        >
          Dairy
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Beauty")}
        >
          Beauty/Care
        </Button>
      </Nav.Item>
    </Navbar>
  );
};

export default Categories;
