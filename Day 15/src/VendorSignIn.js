// import React, { Component } from "react";
// import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
// import { GoogleLoginButton } from "react-social-login-buttons";
// import "./Vendor.css";

// class VendorSignIn extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     console.log("The form was submitted with the following data:");
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <div className="vApp">
//             <div className="vappAside" />
//             <div className="vappForm">
//         <Router basename="/react-auth-ui/">
          
//               <div className="vpageSwitcher">
//                 <NavLink
//                   to="/vi"
//                   activeClassName="vpageSwitcherItem-active"
//                   className="vpageSwitcherItem"
//                 >
//                   Sign In
//                 </NavLink>
//                 <NavLink
//                   exact
//                   to="/v"
//                   activeClassName="vpageSwitcherItem-active"
//                   className="vpageSwitcherItem"
//                 >
//                   Sign Up
//                 </NavLink>
//               </div>

//               <div className="vformTitle">
//                 <NavLink
//                   to="/vi"
//                   activeClassName="vformTitleLink-active"
//                   className="vformTitleLink"
//                 >
//                   Sign In
//                 </NavLink>{" "}
//                 or{" "}
//                 <NavLink
//                   exact
//                   to="/v"
//                   activeClassName="vformTitleLink-active"
//                   className="vformTitleLink"
//                 >
//                   Sign Up
//                 </NavLink>
//               </div>

              
            
//         </Router>

//         <div className="vformCenter">
//           <form className="vformFields" onSubmit={this.handleSubmit}>
//             <div className="vformField">
//               <label className="vformFieldLabel" htmlFor="email">
//                 E-Mail Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="vformFieldInput"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="vformField">
//               <label className="vformFieldLabel" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="vformFieldInput"
//                 placeholder="Enter your password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="vformField">
//             <Link to="/Home" >  <button className="vformFieldButton">Sign In</button>{" "}</Link>
//               <Link to="/v" className="vformFieldLink">
//                 Create an account
//               </Link>
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className="vsocialMediaButtons">
//               <div className="vinstagramButton">
//                 <GoogleLoginButton onClick={() => alert("Hello")} />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default VendorSignIn;






import React, { useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { HashRouter as Router,withRouter } from "react-router-dom";
import axios from "axios";
import {
  FacebookLoginButton,
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import "./SignInForm.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      

      // Redirect to Home page after successful login
      history.push("/Home");
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ general: "Incorrect Email or Password" });
      }
    }
  };

  return (
    <div className="App">
      <div className="appAside" />
      <div className="appForm">
      {/* <Router basename="/react-auth-ui/">
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
            </Router> */}

        <div className="formCenter">
          <form onSubmit={handleSubmit} className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
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
                value={password}
                onChange={handleChange}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>

            {errors.general && <div className="error">{errors.general}</div>}

            <div className="formField">
              <button type="submit" className="formFieldButton">
                Sign In
              </button>
             
            </div>
            <div className="socialMediaButtons">
          
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;