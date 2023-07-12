import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import VendorSignIn from "./VendorSignIn";
import VendorSignUP from "./VendorSignUP";
import MainLoginPageUser from "./MainLoginPageUser";
import MainLoginPageVendor from "./MainLoginPageVendor";
import Home from './Home';
import HomePageProfile from "./HomePageProfile";
import Demo from './Demo';


class App extends Component {
  render() {
    return (
      <div>
        {/* <HomePageProfile /> */}
        

        <Router basename="/react-auth-ui/">
          <Route exact path="/s" component={SignUpForm} />
          <Route path="/si" component={SignInForm} />

          <Route exact path="/v" component={VendorSignUP} />
          <Route path="/vi" component={VendorSignIn} />

          <Route exact path="/" component={MainLoginPageVendor} />
          <Route path="/ven" component={MainLoginPageUser} />

          <Route path="/VendorSign" component={VendorSignUP} />
          <Route path="/UserSign" component={SignUpForm} />
          <Route path="/Home" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
