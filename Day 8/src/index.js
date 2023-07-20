import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
// {/* <Router></Router>

// <Router basename="/react-auth-ui/">
// <Route exact path="/s" component={SignUpForm} />
// <Route path="/si" component={SignInForm} />

// <Route exact path="/v" component={VendorSignUP} />
// <Route path="/vi" component={VendorSignIn} />

// <Route exact path="/" component={MainLoginPageVendor} />
// <Route path="/ven" component={MainLoginPageUser} />

// <Route path="/VendorSign" component={VendorSignUP} />
// <Route path="/UserSign" component={SignUpForm} />



// </Router> */}