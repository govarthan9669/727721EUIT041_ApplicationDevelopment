// import React, { Component } from "react";
// import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
// import {
//   FacebookLoginButton,
//   InstagramLoginButton,
//   GoogleLoginButton
// } from "react-social-login-buttons";
// import "./SignInForm.css";
// import "./SignUpForm"
// import SignUpForm from "./SignUpForm";


// class SignInForm extends Component {
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

// <div>
      //   <div className="App">
      //       <div className="appAside" />
      //       <div className="appForm">
      //   <Router basename="/react-auth-ui/">
          
      //         <div className="pageSwitcher">
      //           <NavLink
      //             to="/si"
      //             activeClassName="pageSwitcherItem-active"
      //             className="pageSwitcherItem"
      //           >
      //             Sign In
      //           </NavLink>
      //           <NavLink
      //             exact
      //             to="/s"
      //             activeClassName="pageSwitcherItem-active"
      //             className="pageSwitcherItem"
      //           >
      //             Sign Up
      //           </NavLink>
      //         </div>

      //         <div className="formTitle">
      //           <NavLink
      //             to="/si"
      //             activeClassName="formTitleLink-active"
      //             className="formTitleLink"
      //           >
      //             Sign In
      //           </NavLink>{" "}
      //           or{" "}
      //           <NavLink
      //             exact
      //             to="/s"
      //             activeClassName="formTitleLink-active"
      //             className="formTitleLink"
      //           >
      //             Sign Up
      //           </NavLink>
      //         </div>

            

              
            
      //   </Router>





      // <div className="formCenter">
      //   <form className="formFields" onSubmit={this.handleSubmit}>
      //     <div className="formField">
         
      //       <label className="formFieldLabel" htmlFor="email">
      //         E-Mail Address
      //       </label>
      //       <input
      //         type="email"
      //         id="email"
      //         className="formFieldInput"
      //         placeholder="Enter your email"
      //         name="email"
      //         value={this.state.email}
      //         onChange={this.handleChange}
      //       />
      //     </div>

      //     <div className="formField">
      //       <label className="formFieldLabel" htmlFor="password">
      //         Password
      //       </label>
      //       <input
      //         type="password"
      //         id="password"
      //         className="formFieldInput"
      //         placeholder="Enter your password"
      //         name="password"
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //       />
      //     </div>

      //     <div className="formField">
      //     <Link to="/Home" > <button className="formFieldButton">Sign In</button>{" "}</Link>
      //       <Link to="/s" className="formFieldLink">
      //         Create an account
      //       </Link>
      //     </div>
      //     <br>
         
      //    </br> <br>
         
      //    </br> <br>
         
      //    </br>
      //     <div className="socialMediaButtons">
      //       <div className="facebookButton">
      //         <FacebookLoginButton onClick={() => alert("Hello")} />
      //       </div>
      //       <br>
         
      //    </br>
      //       <div className="instagramButton">
      //         <InstagramLoginButton onClick={() => alert("Hello")} />
      //       </div> <br>
         
      //    </br>
      //       <div className="GoogleButton">
      //         <GoogleLoginButton onClick={() => alert("Hello")} />
      //       </div>
      //     </div>
      //   </form>
      // </div>
      // </div>
      // </div>
//       </div>
//     );
//   }
// }

// export default SignInForm;



// import React, { Component } from "react";
// import { HashRouter as Router, NavLink, Link, withRouter } from "react-router-dom";
// import axios from "axios";
// import {
//   FacebookLoginButton,
//   InstagramLoginButton,
//   GoogleLoginButton
// } from "react-social-login-buttons";
// import "./SignInForm.css";

// class SignInForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     const { email, password } = this.state;

//     // Make API call to backend server to get user data
//     axios.get(`http://localhost:8080/S?email=${email}`)
//       .then(response => {
//         const userData = response.data;
//         if (userData.length === 1 && userData[0].password === password) {
//           console.log("Authentication successful. Redirecting to Home page.");
//           this.props.history.push("/Home");
//         } else {
//           console.log("Authentication failed. Incorrect email or password.");
//           this.setState({ errors: { auth: "Incorrect email or password" } });
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//         // Handle error here (e.g., display an error message)
//       });
//   }

//   render() {
//     const { errors } = this.state;

//     return (
//       <div>
//         <div className="App">
//           <div className="appAside" />
//           <div className="appForm">
//             <Router basename="/react-auth-ui/">
//               <div className="pageSwitcher">
//                 <NavLink
//                   to="/si"
//                   activeClassName="pageSwitcherItem-active"
//                   className="pageSwitcherItem"
//                 >
//                   Sign In
//                 </NavLink>
//                 <NavLink
//                   exact
//                   to="/s"
//                   activeClassName="pageSwitcherItem-active"
//                   className="pageSwitcherItem"
//                 >
//                   Sign Up
//                 </NavLink>
//               </div>

//               <div className="formTitle">
//                 <NavLink
//                   to="/si"
//                   activeClassName="formTitleLink-active"
//                   className="formTitleLink"
//                 >
//                   Sign In
//                 </NavLink>{" "}
//                 or{" "}
//                 <NavLink
//                   exact
//                   to="/s"
//                   activeClassName="formTitleLink-active"
//                   className="formTitleLink"
//                 >
//                   Sign Up
//                 </NavLink>
//               </div>
//             </Router>

//             <div className="formCenter">
//               <form className="formFields" onSubmit={this.handleSubmit}>
//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="email">
//                     E-Mail Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="formFieldInput"
//                     placeholder="Enter your email"
//                     name="email"
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="password">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="formFieldInput"
//                     placeholder="Enter your password"
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 {errors.auth && <div className="error">{errors.auth}</div>}

//                 <div className="formField">
//                   <button type="submit" className="formFieldButton">
//                     Sign In
//                   </button>
//                   <Link to="/s" className="formFieldLink">
//                     Create an account
//                   </Link>
//                 </div>

//                 <div className="socialMediaButtons">
//                   <div className="facebookButton">
//                     <FacebookLoginButton onClick={() => alert("Hello")} />
//                   </div>
//                   <div className="instagramButton">
//                     <InstagramLoginButton onClick={() => alert("Hello")} />
//                   </div>
//                   <div className="GoogleButton">
//                     <GoogleLoginButton onClick={() => alert("Hello")} />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(SignInForm);




// import React, { Component } from "react";
// import { HashRouter as Router, NavLink, Link, withRouter } from "react-router-dom";
// import axios from "axios";
// import {
//   FacebookLoginButton,
//   InstagramLoginButton,
//   GoogleLoginButton
// } from "react-social-login-buttons";
// import "./SignInForm.css";

// class SignInForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       showPassword: false,
//       errors: {}
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     const { email, password } = this.state;

//     axios.get(`http://localhost:8080/S?email=${email}`)
//       .then(response => {
//         const userData = response.data;
//         if (userData.length === 1 && userData[0].password === password) {
//           console.log("Authentication successful. Redirecting to Home page.");
//           this.props.history.push("/Home");
//         } else {
//           console.log("Authentication failed. Incorrect email or password.");
//           this.setState({ errors: { auth: "Incorrect email or password" } });
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching user data:", error);
//         // Handle error here (e.g., display an error message)
//       });
//   }

//   togglePasswordVisibility() {
//     this.setState(prevState => ({
//       showPassword: !prevState.showPassword
//     }));
//   }

//   render() {
//     const { errors, showPassword } = this.state;
//     const passwordInputType = showPassword ? "text" : "password";

//     return (
      
//         <div className="App">
//           {/* ... Rest of the code ... */}


          
//           <div className="appAside" />
//           <div className="appForm">
            // <Router basename="/react-auth-ui/">
            //   <div className="pageSwitcher">
            //     <NavLink
            //       to="/si"
            //       activeClassName="pageSwitcherItem-active"
            //       className="pageSwitcherItem"
            //     >
            //       Sign In
            //     </NavLink>
            //     <NavLink
            //       exact
            //       to="/s"
            //       activeClassName="pageSwitcherItem-active"
            //       className="pageSwitcherItem"
            //     >
            //       Sign Up
            //     </NavLink>
            //   </div>

            //   <div className="formTitle">
            //     <NavLink
            //       to="/si"
            //       activeClassName="formTitleLink-active"
            //       className="formTitleLink"
            //     >
            //       Sign In
            //     </NavLink>{" "}
            //     or{" "}
            //     <NavLink
            //       exact
            //       to="/s"
            //       activeClassName="formTitleLink-active"
            //       className="formTitleLink"
            //     >
            //       Sign Up
            //     </NavLink>
            //   </div>
            // </Router>


        
//         <div className="formCenter">
//           <form className="formFields" onSubmit={this.handleSubmit}>
//             <div className="formField">
//               <label className="formFieldLabel" htmlFor="email">
//                 E-Mail Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="formFieldInput"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </div>

//             <div className="formField">
//               <label className="formFieldLabel" htmlFor="password">
//                 Password
//               </label>
//               <div className="passwordInputContainer">
//                 <input
//                   type={passwordInputType}
//                   id="password"
//                   className="formFieldInput"
//                   placeholder="Enter your password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                 />
//                 <span
//                   className="passwordToggleIcon"
//                   onClick={this.togglePasswordVisibility}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </span>
//               </div>
//             </div>

//             {errors.auth && <div className="error" style={{ color: "black" }}>{errors.auth}</div>}

//             <div className="formField">
//               <button type="submit" className="formFieldButton">
//                 Sign In
//               </button>
//               <Link to="/s" className="formFieldLink">
//                 Create an account
//               </Link>
//             </div>

            // <div className="socialMediaButtons">
            //   <div className="facebookButton">
            //     <FacebookLoginButton onClick={() => alert("Hello")} />
            //   </div>
            //   <div className="instagramButton">
            //     <InstagramLoginButton onClick={() => alert("Hello")} />
            //   </div>
            //   <div className="GoogleButton">
            //     <GoogleLoginButton onClick={() => alert("Hello")} />
            //   </div>
            // </div>
//           </form>
//         </div>
//       </div>
//       </div>
      
//     );
//   }
// }

// export default withRouter(SignInForm);




import React, { useState,useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { HashRouter as Router,withRouter } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import axios from "axios";
import {
  FacebookLoginButton,
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import "./SignInForm.css";

const SignInForm = () => {

 const[user,setUser]=useState({});
 function handleCallbackResponse(response){
   console.log("JWT ID token: "+response.credential);
   var userObject = jwt_decode(response.credential);
   console.log(userObject);
   setUser(userObject);
   document.getElementById('signInDiv').hidden = true;
   history.push("/Home")
 }

useEffect(() => {
   /* global google */
   google.accounts.id.initialize({
     client_id:"37668913645-i58d00knbkv2r0ppotqc87ujs1u340ju.apps.googleusercontent.com",
     callback:handleCallbackResponse
   });
   google.accounts.id.renderButton(
     document.getElementById("signInDiv"),
     {theme:"outline",size:"large"}
     

   );
  
 });

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
              <Link to="/s" className="formFieldLink">
                Create an account
              </Link>
            </div>
            <div className="socialMediaButtons">
              <div className="GoogleButton">
                <GoogleLoginButton>
                <div id='signInDiv' ></div>
                </GoogleLoginButton>
              <div className="facebookButton">
                <FacebookLoginButton onClick={() => alert("Hello")} />
              </div>
              <div className="instagramButton">
                <InstagramLoginButton onClick={() => alert("Hello")} />
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
