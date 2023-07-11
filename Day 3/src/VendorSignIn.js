import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./Vendor.css";

class VendorSignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="vApp">
            <div className="vappAside" />
            <div className="vappForm">
        <Router basename="/react-auth-ui/">
          
              <div className="vpageSwitcher">
                <NavLink
                  to="/vi"
                  activeClassName="vpageSwitcherItem-active"
                  className="vpageSwitcherItem"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/v"
                  activeClassName="vpageSwitcherItem-active"
                  className="vpageSwitcherItem"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="vformTitle">
                <NavLink
                  to="/vi"
                  activeClassName="vformTitleLink-active"
                  className="vformTitleLink"
                >
                  Sign In
                </NavLink>{" "}
                or{" "}
                <NavLink
                  exact
                  to="/v"
                  activeClassName="vformTitleLink-active"
                  className="vformTitleLink"
                >
                  Sign Up
                </NavLink>
              </div>

              
            
        </Router>

        <div className="vformCenter">
          <form className="vformFields" onSubmit={this.handleSubmit}>
            <div className="vformField">
              <label className="vformFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="vformFieldInput"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="vformField">
              <label className="vformFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="vformFieldInput"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="vformField">
              <button className="vformFieldButton">Sign In</button>{" "}
              <Link to="/v" className="vformFieldLink">
                Create an account
              </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="vsocialMediaButtons">
              <div className="vinstagramButton">
                <GoogleLoginButton onClick={() => alert("Hello")} />
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default VendorSignIn;
