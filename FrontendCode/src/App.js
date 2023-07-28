import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import VendorSignIn from "./VendorSignIn";
import VendorSignUP from "./VendorSignUP";
import MainLoginPageUser from "./MainLoginPageUser";
import MainLoginPageVendor from "./MainLoginPageVendor";
import Home from './Home';
import Cart from "./cart";
import ProfilePage from "./ProfilePage";
import FeedbackForm from "./Components/FeedbackForm";
import OrderTracking from "./Components/OrderTracking";
import Payment from "./Components/Payment";
import Receipt from "./Receipt";
import FeedbackFormMicro from "./FeedbackFormMicro";
import FeedbackList from "./FeedbackList";
import VendorProductList from "./VendorProductList";
import VendorAddProduct from "./VendorAddProduct";
import VendorGetMethod from "./VendorGetMethod";
import VendorHome from "./VendorHome";

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

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
          <Route path="/VendorHome" component={VendorHome} />
          <Route path="/Cart" component={Cart} />
          <Route path="/ProfileP" component={ProfilePage} />
          <Route path="/feedback" component={FeedbackForm}/>
          <Route path="/FeedbackM" component={FeedbackFormMicro}/>
          <Route path="/FeedbackList" component={FeedbackList}/>
          <Route path="/order" component={OrderTracking}/>
          <Route path="/getProduct" component={VendorGetMethod}/>
          <Route path="/add-product" component={VendorAddProduct}/>
          <Route path="/updateproduct" component={VendorProductList}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/rec" component={Receipt}/>

        </Router>
      </div>
    );
  }
}

export default App;
