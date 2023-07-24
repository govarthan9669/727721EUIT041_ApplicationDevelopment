// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import "./SignInForm.css";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") setEmail(value);
//     if (name === "password") setPassword(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
//         email,
//         password,
//       });

//       const user = response.data.userResponse;
      
//       if (user && user.role === "ADMIN") {
//         const token = response.data.token;
//         localStorage.setItem('token', token);
//         localStorage.setItem('user', JSON.stringify(user));

//         // Redirect to Home page after successful login
//         history.push("/Home");
//       } else {
//         // If the user is not an ADMIN or the API response is incorrect, show an error message or handle it accordingly
//         setErrors({ general: "You must be an ADMIN to access the Home page." });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       if (error.response && error.response.data) {
//         setErrors(error.response.data);
//       } else {
//         setErrors({ general: "Incorrect Email or Password" });
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <div className="appAside" />
//       <div className="appForm">
//         <div className="formCenter">
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <form onSubmit={handleSubmit} className="formFields">
//             <div className="formField">
//               <label className="formFieldLabel" htmlFor="email">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="formFieldInput"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//               />
//               {errors.email && <div className="error">{errors.email}</div>}
//             </div>

//             <div className="formField">
//               <label className="formFieldLabel" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="formFieldInput"
//                 placeholder="Enter your password"
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//               />
//               {errors.password && <div className="error">{errors.password}</div>}
//             </div>

//             {errors.general && <div className="error">{errors.general}</div>}

//             <div className="formField">
//               <button type="submit" className="formFieldButton">
//                 Sign In
//               </button>
//               <Link to="/s" className="formFieldLink">
//                 Create an account
//               </Link>
//             </div>
//             <div className="socialMediaButtons">
//               {/* Social media login buttons can be added here */}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;





// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import "./SignInForm.css";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") setEmail(value);
//     if (name === "password") setPassword(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
//         email,
//         password,
//       });

//       const user = response.data.userResponse;
//       const role = user.role;

//       if (role === "ADMIN") {
//         const token = response.data.token;
//         localStorage.setItem('token', token);
//         localStorage.setItem('user', JSON.stringify(user));

//         // Redirect to Home page after successful login
//         history.push("/Home");
//       } else {
//         // If the user is not an ADMIN, show an error message or handle it accordingly
//         setErrors({ general: "You must be an ADMIN to access the Home page." });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       if (error.response && error.response.data) {
//         setErrors(error.response.data);
//       } else {
//         setErrors({ general: "Incorrect Email or Password" });
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <div className="appAside" />
//       <div className="appForm">
//         <div className="formCenter">
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <form onSubmit={handleSubmit} className="formFields">
//             <div className="formField">
//               <label className="formFieldLabel" htmlFor="email">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="formFieldInput"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//               />
//               {errors.email && <div className="error">{errors.email}</div>}
//             </div>

//             <div className="formField">
//               <label className="formFieldLabel" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="formFieldInput"
//                 placeholder="Enter your password"
//                 name="password"
//                 value={password}
//                 onChange={handleChange}
//               />
//               {errors.password && <div className="error">{errors.password}</div>}
//             </div>

//             {errors.general && <div className="error">{errors.general}</div>}

//             <div className="formField">
//               <button type="submit" className="formFieldButton">
//                 Sign In
//               </button>
//               <Link to="/s" className="formFieldLink">
//                 Create an account
//               </Link>
//             </div>
//             <div className="socialMediaButtons">
//               {/* Social media login buttons can be added here */}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;


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
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
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