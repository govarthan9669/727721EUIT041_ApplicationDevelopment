import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";

import "./MainLogin.css";

class MainLoginPageVendor extends Component {
 

  render() {
    return (
        <div>
        <div className="mApp">
          {/* <div className="mappAside" /> */}
          <div className="mappForm">
            <Router basename="/react-auth-ui/">
              <div className="mpageSwitcher">
                <NavLink
                  exact
                  to="/"
                  activeClassName="pageSwitcherItem-active"
                  className="pageSwitcherItem"
                >
                  User
                </NavLink>
              <NavLink
                  to="/ven"
                  activeClassName="pageSwitcherItem-active"
                  className="pageSwitcherItem"
                >
                  Vendor
                </NavLink>
              </div>

              <div className="formTitle">
                <NavLink
                  exact
                  to="/"
                  activeClassName="formTitleLink-active"
                  className="formTitleLink"
                  >
                  User
                </NavLink>
                  {" "}
                  or{" "}
                <NavLink
                  to="/ven"
                  activeClassName="formTitleLink-active"
                  className="formTitleLink"
                >
                  Vendor
                </NavLink>
              </div>
          
             

            </Router>


<div className="vformCenter">
  <div className="vformField">
    <div className="centerContent">
      <div className="roundedImage">
        <img src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg" alt="Image" />
      </div><Link to="/UserSign">
      <button className="mformFieldButton">USER</button></Link>
    </div>
  </div>
</div>
            

          </div>
        </div>
      </div>
    
      
    );
  }
}

export default MainLoginPageVendor;
