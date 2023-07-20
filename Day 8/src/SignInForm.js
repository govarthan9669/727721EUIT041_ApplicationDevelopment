import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import "./SignInForm.css";
import "./SignUpForm"
import SignUpForm from "./SignUpForm";


class SignInForm extends Component {
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
        <div className="App">
            <div className="appAside" />
            <div className="appForm">
        <Router basename="/react-auth-ui/">
          
              <div className="pageSwitcher">
                <NavLink
                  to="/si"
                  activeClassName="pageSwitcherItem-active"
                  className="pageSwitcherItem"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/s"
                  activeClassName="pageSwitcherItem-active"
                  className="pageSwitcherItem"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="formTitle">
                <NavLink
                  to="/si"
                  activeClassName="formTitleLink-active"
                  className="formTitleLink"
                >
                  Sign In
                </NavLink>{" "}
                or{" "}
                <NavLink
                  exact
                  to="/s"
                  activeClassName="formTitleLink-active"
                  className="formTitleLink"
                >
                  Sign Up
                </NavLink>
              </div>

            

              
            
        </Router>





      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
         
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
          <Link to="/Home" > <button className="formFieldButton">Sign In</button>{" "}</Link>
            <Link to="/s" className="formFieldLink">
              Create an account
            </Link>
          </div>
          <br>
         
         </br> <br>
         
         </br> <br>
         
         </br>
          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>
            <br>
         
         </br>
            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div> <br>
         
         </br>
            <div className="GoogleButton">
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

export default SignInForm;
