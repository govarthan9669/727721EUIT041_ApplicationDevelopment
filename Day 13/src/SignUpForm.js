// import React, { Component } from "react";
// import { HashRouter as Router, Route, NavLink, Link, withRouter } from "react-router-dom";
// import "./SignInForm.css";
// import "./SignInForm.css";
// import SignInForm from "./SignInForm";
// import axios from "axios";


// class SignUpForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       name: "",
//       hasAgreed: false,
//       errors: {}
//     };
    

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }



//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;
//     if (name === "phoneNumber") {
//       // Only allow numbers for phone number field
//       value = value.replace(/[^0-9]/g, "");
//     }

//     this.setState({
//       [name]: value
//     });
//   }

//   validateForm() {
//     const { email, password, name, hasAgreed } = this.state;
//     const errors = {};

//     // Validate email
//     if (!email) {
//       errors.email = "Email is required";
//     }

//     // Validate password
//     if (!password) {
//       errors.password = "Password is required";
//     }

//     // Validate name
//     if (!name) {
//       errors.name = "Name is required";
//     }

//     // Validate agreement
//     if (!hasAgreed) {
//       errors.hasAgreed = "You must agree to the terms of service";
//     }

//     return errors;
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const errors = this.validateForm();

//     if (Object.keys(errors).length === 0) {
//       // No errors, proceed with form submission and route to "/si" page
//       console.log("The form was submitted with the following data:");
//       console.log(this.state);

//       // Add code here to handle the successful form submission and route to "/si" page
//       // For example, you can use the React Router's history object to navigate to the page
//       this.props.history.push("/si");

    


//     } else {
//       // Errors found, update the state
//       this.setState({ errors });
//     }
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
//               <form onSubmit={this.handleSubmit} className="formFields">
//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="name">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="formFieldInput"
//                     placeholder="Enter your full name"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                   />
//                   {errors.name && <div className="error">{errors.name}</div>}
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
//                   {errors.password && (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 </div>
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
//                   {errors.email && <div className="error">{errors.email}</div>}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="address">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="formFieldInput"
//                     placeholder="Enter your address"
//                     name="address"
//                     value={this.state.address}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="phoneNumber">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     className="formFieldInput"
//                     placeholder="Enter your phone number"
//                     name="phoneNumber"
//                     value={this.state.phoneNumber}
//                     onChange={this.handleChange}
//                   />
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldCheckboxLabel">
//                     <input
//                       className="formFieldCheckbox"
//                       type="checkbox"
//                       name="hasAgreed"
//                       checked={this.state.hasAgreed}
//                       onChange={this.handleChange}
//                     />{" "}
//                     I agree all statements in{" "}
//                     <a href="null" className="formFieldTermsLink">
//                       terms of service
//                     </a>
//                   </label>
//                   {errors.hasAgreed && (
//                     <div className="error">{errors.hasAgreed}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <button type="submit" className="formFieldButton">
//                     Sign Up
//                   </button>
//                   <Link to="/si" className="formFieldLink">
//                     I'm already a member
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(SignUpForm);
// import React, { Component } from "react";
// import { HashRouter as Router, NavLink, Link, withRouter } from "react-router-dom";
// import axios from "axios";
// import "./SignInForm.css";

// class SignUpForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       name: "",
//       address: "",
//       phoneNumber: "",
//       hasAgreed: false,
//       errors: {}
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;
//     if (name === "phoneNumber") {
//       // Only allow numbers for phone number field
//       value = value.replace(/[^0-9]/g, "");
//     }

//     this.setState({
//       [name]: value
//     });
//   }

//   validateForm() {
//     const { email, password, name, hasAgreed, address, phoneNumber } = this.state;
//     const errors = {};

//     // Validate email
//     if (!email) {
//       errors.email = "Email is required";
//     }

//     // Validate password
//     if (!password) {
//       errors.password = "Password is required";
//     }

//     // Validate name
//     if (!name) {
//       errors.name = "Name is required";
//     }

//     // Validate address
//     if (!address) {
//       errors.address = "Location is required";
//     }

//     // Validate phone number
//     if (!phoneNumber) {
//       errors.phoneNumber = "Phone number is required";
//     }

//     // Validate agreement
//     if (!hasAgreed) {
//       errors.hasAgreed = "You must agree to the terms of service";
//     }

//     return errors;
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const errors = this.validateForm();

//     if (Object.keys(errors).length === 0) {
//       // No errors, proceed with form submission
//       console.log("The form was submitted with the following data:");
//       console.log(this.state);

//       // Add code here to handle the form submission and data storage in the database
//       this.storeDataInDatabase();

//       // Route to "/si" page
//       this.props.history.push("/si");
//     } else {
//       // Errors found, update the state
//       this.setState({ errors });
//     }
//   }

//   storeDataInDatabase() {
//     const { name, email, password, address, phoneNumber } = this.state;

//     const data = {
//       name: name,
//       address: address,
//       password: password,
//       email: email,
//       contactNumber: phoneNumber
//     };

//     // Make an API call to store the data in the database
    
//     axios.post("http://127.0.0.1:8080/Si", data)
//       .then(response => {
//         console.log("Data stored in the database:", response.data);
//       })
//       .catch(error => {
//         console.error("Error storing data:", error);
//         // Handle the error here (e.g., display an error message)
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
//               <form onSubmit={this.handleSubmit} className="formFields">
//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="name">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="formFieldInput"
//                     placeholder="Enter your full name"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                   />
//                   {errors.name && <div className="error">{errors.name}</div>}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="email">
//                     Email Address
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
//                   {errors.email && <div className="error">{errors.email}</div>}
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
//                   {errors.password && (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="address">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="formFieldInput"
//                     placeholder="Enter your address"
//                     name="address"
//                     value={this.state.address}
//                     onChange={this.handleChange}
//                   />
//                   {errors.address && (
//                     <div className="error">{errors.address}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="phoneNumber">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     className="formFieldInput"
//                     placeholder="Enter your phone number"
//                     name="phoneNumber"
//                     value={this.state.phoneNumber}
//                     onChange={this.handleChange}
//                   />
//                   {errors.phoneNumber && (
//                     <div className="error">{errors.phoneNumber}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldCheckboxLabel">
//                     <input
//                       className="formFieldCheckbox"
//                       type="checkbox"
//                       name="hasAgreed"
//                       checked={this.state.hasAgreed}
//                       onChange={this.handleChange}
//                     />{" "}
//                     I agree to the{" "}
//                     <a href="/" className="formFieldTermsLink">
//                       terms of service
//                     </a>
//                   </label>
//                   {errors.hasAgreed && (
//                     <div className="error">{errors.hasAgreed}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <button type="submit" className="formFieldButton">
//                     Sign Up
//                   </button>
//                   <Link to="/si" className="formFieldLink">
//                     I'm already a member
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(SignUpForm);





// import React, { Component } from "react";
// import { HashRouter as Router, NavLink, Link, withRouter } from "react-router-dom";
// import axios from "axios";
// import "./SignInForm.css";

// class SignUpForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       name: "",
//       address: "",
//       phoneNumber: "",
//       hasAgreed: false,
//       errors: {}
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;
//     if (name === "phoneNumber") {
//       // Only allow numbers for phone number field
//       value = value.replace(/[^0-9]/g, "");
//     }

//     this.setState({
//       [name]: value
//     });
//   }

//   validateForm() {
//     const { email, password, name, hasAgreed, address, phoneNumber } = this.state;
//     const errors = {};

//     // Validate email
//     if (!email) {
//       errors.email = "Email is required";
//     }

//     // Validate password
//     if (!password) {
//       errors.password = "Password is required";
//     }

//     // Validate name
//     if (!name) {
//       errors.name = "Name is required";
//     }

//     // Validate address
//     if (!address) {
//       errors.address = "Location is required";
//     }

//     // Validate phone number
//     if (!phoneNumber) {
//       errors.phoneNumber = "Phone number is required";
//     }

//     // Validate agreement
//     if (!hasAgreed) {
//       errors.hasAgreed = "You must agree to the terms of service";
//     }

//     return errors;
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     const errors = this.validateForm();

//     if (Object.keys(errors).length === 0) {
//       // No errors, proceed with form submission
//       console.log("The form was submitted with the following data:");
//       console.log(this.state);

//       // Add code here to handle the form submission and data storage in the database
//       this.storeDataInDatabase();

//       // Route to "/si" page
//       this.props.history.push("/si");
//     } else {
//       // Errors found, update the state
//       this.setState({ errors });
//     }
//   }

//   storeDataInDatabase() {
//     const { name, email, password, address, phoneNumber } = this.state;

//     const data = {
//       name: name,
//       address: address,
//       password: password,
//       email: email,
//       contactNumber: phoneNumber
//     };

//     // Make an API call to store the data in the database
//     axios
//       .post("http://127.0.0.1:8080/Si", data)
//       .then(response => {
//         console.log("Data stored in the database:", response.data);
//       })
//       .catch(error => {
//         console.error("Error storing data:", error);
//         // Handle the error here (e.g., display an error message)
//       });
//   }

//   render() {
//     const { errors } = this.state;

//     return (
//       <div>
//         <div className="App">
          // <div className="appAside" />
          // <div className="appForm">
          //   <Router basename="/react-auth-ui/">
          //     <div className="pageSwitcher">
          //       <NavLink
          //         to="/si"
          //         activeClassName="pageSwitcherItem-active"
          //         className="pageSwitcherItem"
          //       >
          //         Sign In
          //       </NavLink>
          //       <NavLink
          //         exact
          //         to="/s"
          //         activeClassName="pageSwitcherItem-active"
          //         className="pageSwitcherItem"
          //       >
          //         Sign Up
          //       </NavLink>
          //     </div>

          //     <div className="formTitle">
          //       <NavLink
          //         to="/si"
          //         activeClassName="formTitleLink-active"
          //         className="formTitleLink"
          //       >
          //         Sign In
          //       </NavLink>{" "}
          //       or{" "}
          //       <NavLink
          //         exact
          //         to="/s"
          //         activeClassName="formTitleLink-active"
          //         className="formTitleLink"
          //       >
          //         Sign Up
          //       </NavLink>
          //     </div>
          //   </Router>

//             <div className="formCenter">
//               <form onSubmit={this.handleSubmit} className="formFields">
//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="name">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="formFieldInput"
//                     placeholder="Enter your full name"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                   />
//                   {errors.name && <div className="error">{errors.name}</div>}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="email">
//                     Email Address
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
//                   {errors.email && <div className="error">{errors.email}</div>}
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
//                   {errors.password && (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="address">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     className="formFieldInput"
//                     placeholder="Enter your address"
//                     name="address"
//                     value={this.state.address}
//                     onChange={this.handleChange}
//                   />
//                   {errors.address && (
//                     <div className="error">{errors.address}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldLabel" htmlFor="phoneNumber">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     className="formFieldInput"
//                     placeholder="Enter your phone number"
//                     name="phoneNumber"
//                     value={this.state.phoneNumber}
//                     onChange={this.handleChange}
//                   />
//                   {errors.phoneNumber && (
//                     <div className="error">{errors.phoneNumber}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <label className="formFieldCheckboxLabel">
//                     <input
//                       className="formFieldCheckbox"
//                       type="checkbox"
//                       name="hasAgreed"
//                       checked={this.state.hasAgreed}
//                       onChange={this.handleChange}
//                     />{" "}
//                     I agree to the{" "}
//                     <a href="/" className="formFieldTermsLink">
//                       terms of service
//                     </a>
//                   </label>
//                   {errors.hasAgreed && (
//                     <div className="error">{errors.hasAgreed}</div>
//                   )}
//                 </div>

//                 <div className="formField">
//                   <button type="submit" className="formFieldButton">
//                     Sign Up
//                   </button>
//                   <Link to="/si" className="formFieldLink">
//                     I'm already a member
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(SignUpForm);








// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import axios from "axios";
// import "./SignInForm.css";

// class SignUpForm extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     location:"",
//     contactNumber:"",
//     errors: {},
//     successMessage: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = this.state;
//     console.log(name, email, password);

//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
//         name,
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         this.setState({
//           successMessage: "User registered successfully!",
//           name: "",
//           email: "",
//           password: "",
//           errors: {},
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       if (error.response && error.response.data) {
//         this.setState({ errors: error.response.data, successMessage: "" });
//       } else {
//         this.setState({ errors: { general: "Something went wrong" }, successMessage: "" });
//       }
//     }
//   };

//   handleRegisterClick = () => {
//     this.props.history.push('/si');
//   };

//   render() {
//     const { name, email, password, errors, successMessage } = this.state;

//     return (
//       <div>
//         <div className="App">
//           {/* ... (rest of the code) ... */}

//           <div className="formCenter">
//             <form onSubmit={this.handleSubmit} className="formFields">
//               <div className="formField">
//                 <label className="formFieldLabel" htmlFor="name">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="formFieldInput"
//                   placeholder="Enter your full name"
//                   name="name"
//                   value={name}
//                   onChange={this.handleChange}
//                 />
//                 {errors.name && <div className="error">{errors.name}</div>}
//               </div>

//               <div className="formField">
//                 <label className="formFieldLabel" htmlFor="email">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="formFieldInput"
//                   placeholder="Enter your email"
//                   name="email"
//                   value={email}
//                   onChange={this.handleChange}
//                 />
//                 {errors.email && <div className="error">{errors.email}</div>}
//               </div>

//               <div className="formField">
//                 <label className="formFieldLabel" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="formFieldInput"
//                   placeholder="Enter your password"
//                   name="password"
//                   value={password}
//                   onChange={this.handleChange}
//                 />
                
//                 {errors.password && <div className="error">{errors.password}</div>}
//               </div>

//               {successMessage && <div className="success">{successMessage}</div>}

//               <div className="formField">
//                 <button type="submit" className="formFieldButton">
//                   Sign Up
//                 </button>
//                 <Link to="/si" className="formFieldLink">
//                   I'm already a member
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(SignUpForm);






import React, { Component } from "react";
import { HashRouter as Router, NavLink, Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./SignInForm.css";

class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    location: "",
    contactNumber: "",
    errors: {},
    successMessage: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log(name, email, password);

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        this.setState({
          successMessage: "User registered successfully!",
          name: "",
          email: "",
          password: "",
          errors: {},
        });

        // Redirect to the success page or any other page after successful registration
        this.props.history.push("/si");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        this.setState({ errors: error.response.data, successMessage: "" });
      } else {
        this.setState({ errors: { general: "Something went wrong" }, successMessage: "" });
      }
    }
  };

  handleRegisterClick = () => {
    this.props.history.push('/si');
  };

  render() {
    const { name, email, password, errors, successMessage } = this.state;

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
          <form onSubmit={this.handleSubmit} className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="Enter your full name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="formFieldInput"
                placeholder="Enter your location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                className="formFieldInput"
                placeholder="Enter your contact number"
                name="contactNumber"
                value={this.state.contactNumber}
                onChange={this.handleChange}
              />
            </div>

            {successMessage && <div className="success">{successMessage}</div>}

            <div className="formField">
              <button type="submit" className="formFieldButton">
                Sign Up
              </button>
              <Link to="/si" className="formFieldLink">
                I'm already a member
              </Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
