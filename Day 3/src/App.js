import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import VendorSignIn from "./VendorSignIn";
import VendorSignUP from "./VendorSignUP";
import MainLoginPageUser from "./MainLoginPageUser";
import MainLoginPageVendor from "./MainLoginPageVendor";
import NavigationBar from "./NavigationBar";

//import "./App.css";

class App extends Component {
  render() {
    return (
      // 
      // <div>
      //   <NavigationBar />

      // </div>
      <Router basename="/react-auth-ui/">
      <Route exact path="/s" component={SignUpForm} />
      <Route path="/si" component={SignInForm} />

      <Route exact path="/v" component={VendorSignUP} />
      <Route path="/vi" component={VendorSignIn} />

      <Route exact path="/" component={MainLoginPageVendor} />
      <Route path="/ven" component={MainLoginPageUser} />

      <Route path="/VendorSign" component={VendorSignUP} />
      <Route path="/UserSign" component={SignUpForm} />
      


      </Router>



    );
  }
}

export default App;
