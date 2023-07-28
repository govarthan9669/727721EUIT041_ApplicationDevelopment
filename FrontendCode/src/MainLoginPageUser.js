import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";

import "./MainLogin.css";

class MainLoginPageUser extends Component {
 

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
                  user
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
        <img src="https://images.barewalls.com/comp/art-print-poster/bwc44121049/fruits-and-vegetables-seller-man-character-vector-flat-cartoon-illustration.jpg?ph=&pw=&print_border=&fit=&flip=&stretch_to_fit=&print_colorfilter=&bits=&side_style=&units=in&frame_id=&frame_type=&show_banner=false&artist_attr_name=false&artist_attr_show=false&artist_attr_title=false&custom_x_pct=&custom_y_pct=&custom_w_
        pct=&custom_h_pct=&bleed_size=&is_custom=false&can_edit_frame=true&object_width=10.0&object_height=8.0&fit_select=True&internal_sku=" alt="Image" />
    </div><Link to="/VendorSign">
      <button className="mformFieldButton">VENDOR</button></Link>
    </div>
  </div>
</div>





      </div>
      </div>
      </div>
  );
  }
}

export default MainLoginPageUser;
