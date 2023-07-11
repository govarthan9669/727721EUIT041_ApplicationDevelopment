import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "./Vendor.css";

class VendorSignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      vendorName: "", // New state for vendor name field
      shopName: "", // New state for shop name field
      shopRegistrationId: "", // New state for shop registration ID field
      shopLocation: "", // New state for shop location field
      phoneNumber: "" // New state for phone number field
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    if (name === "phoneNumber") {
      // Only allow numbers for phone number field
      value = value.replace(/[^0-9]/g, "");
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

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
        <form onSubmit={this.handleSubmit} className="vformFields">
          <div className="vformField">
            <label className="vformFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="vformFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
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
            <label className="vformFieldLabel" htmlFor="shopName">
              Shop Name
            </label>
            <input
              type="text"
              id="shopName"
              className="vformFieldInput"
              placeholder="Enter shop name"
              name="shopName"
              value={this.state.shopName}
              onChange={this.handleChange}
            />
          </div>

          <div className="vformField">
            <label className="vformFieldLabel" htmlFor="shopRegistrationId">
              Shop Registration ID
            </label>
            <input
              type="text"
              id="shopRegistrationId"
              className="vformFieldInput"
              placeholder="Enter shop registration ID"
              name="shopRegistrationId"
              value={this.state.shopRegistrationId}
              onChange={this.handleChange}
            />
          </div>

          <div className="vformField">
            <label className="vformFieldLabel" htmlFor="shopLocation">
              Shop Location
            </label>
            <input
              type="text"
              id="shopLocation"
              className="vformFieldInput"
              placeholder="Enter shop location"
              name="shopLocation"
              value={this.state.shopLocation}
              onChange={this.handleChange}
            />
          </div>

          <div className="vformField">
            <label className="vformFieldLabel" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="vformFieldInput"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>

          <div className="vformField">
            <label className="vformFieldCheckboxLabel">
              <input
                className="vformFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                checked={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree to all statements in{" "}
              <a href="null" className="vformFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="vformField">
            <Link to="/vi">
              <button type="submit" className="formFieldButton">
                Sign Up
              </button>
            </Link>{" "}
            <Link to="/vi" className="vformFieldLink">
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default VendorSignUp;
