// import React, { useEffect, useState } from "react";
// import { useHistory as history } from "react-router-dom";
// import { toast } from "react-toastify";
// import CartItem from "./Components/cartItems";
// import store from "./store";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from "react-router-dom"
// import "./Receipt.css";

// import 'react-toastify/dist/ReactToastify.css';
// import Header from "./Header";

// const Cart = () => {
//   const cartitems = store.getState().products;

//   const [items, setItems] = useState();
//   const [totalPrice, setTotalPrice] = useState(0);

//   const showItems = () => {
//     let count = 0;
//     const itemss = cartitems.map((props) => {
//       count++;
//       return <CartItem key={props.Id} {...props} count={count} />;
//     });
//     setItems(itemss);
//     if (cartitems != null) {
//       const allPrices = cartitems.map((props) => props.Price);
//       let tprice = 0;
//       allPrices.forEach((element) => {
//         tprice += Number(element);
//         setTotalPrice(tprice);
//       });
//     }
//   };

//   useEffect(() => {
//     showItems();
//   }, []);

//   const orderConfirm = () => {
//     toast.success("Your Order was Successfull");
//     const routeChange = () => {
//       let path = `/`;
//       history.push(path);
//     };
//   };

//   const Total = () => {
//     if (totalPrice === 0)
//       return (
//         <>
//           <h3 className="text-center">Cart is Empty</h3>
//         </>
//       );
//     return (
//       <div>
//         <Header/>



//         <br></br>
        
//         <table className="table m-2">
//           <thead>
//             <tr>
//              <th>S.No</th>
//               <th>Name</th>
//               <th>Quantity</th>
//               <th>Price</th>
              
//             </tr>
//           </thead>
//           <tbody>
//             {items}
//             <tr>
//               <td colSpan="3" className="fw-bold">
//                 Total
//               </td>
//               <td>₹{totalPrice}/-</td>
//             </tr>
//           </tbody>
//         </table>
//         <p className="text-secondary">
//           All the payments are to be done through: <b>Cash On Delivery ,UPI,Debit Card</b>
//         </p>
//         <button className="m-2 btn btn-dark" onClick={orderConfirm}>
//           <Link to="/payment" className="oder">Order</Link>
//         </button>
//       </div>
//     );
//   };
//   return (
//     <div>
//       <br></br>
//       <br></br><br></br>
//       <h1 className="text-center fw-bolder">
//         <u> Cart</u>
//       </h1>
//       <Total />
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CartItem from "./Components/cartItems";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Receipt.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import { BsCartX, BsCartCheck } from "react-icons/bs";

const Cart = () => {
  const cartItems = store.getState().products;

  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  const showItems = () => {
    const itemss = cartItems.map((props, index) => (
      <CartItem
        key={index}
        {...props}
        count={index + 1}
        
        removeItemFromCart={removeItemFromCart}
      />
    ));
    setItems(itemss);
    if (cartItems.length > 0) {
      const tprice = cartItems.reduce(
        (total, item) => total + Number(item.Price),
        0
      );
      setTotalPrice(tprice);
    }
  };

  useEffect(() => {
    showItems();
  }, []);

  const addItemToCart = (itemId) => {
    // Implement logic to add item to the cart based on the provided itemId
    // Update the Redux store or any other state management mechanism accordingly
    // For example:
    // const updatedCartItems = [...cartItems, newItem];
    // store.dispatch({ type: "UPDATE_CART", payload: updatedCartItems });
    // showItems();
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.Id !== itemId);
    store.dispatch({ type: "UPDATE_CART", payload: updatedCartItems });
    showItems(updatedCartItems);
  
    
  };

  const orderConfirm = () => {
    toast.success("Your Order was Successful");
    const routeChange = () => {
      let path = `/Payment`;
      history.push(path);
    };
    routeChange();
  };

  const emptyCart = () => {
    store.dispatch({ type: "CLEAR_CART" });
    setItems([]);
    setTotalPrice(0);
  };

  const Total = () => {
    if (cartItems.length === 0)
      return (
        <>
          <h3 className="text-center">Cart is Empty</h3>
        </>
      );
    return (
      <div>
        <Header />
        <br />
        <Container className="py-4 mt-5">
          <h1>{cartItems.length === 0 ? "Your Cart is Empty" : "The Cart"}</h1>
          {cartItems.length > 0 && (
            <Row className="justify-content-center">
              <Table responsive="sm" striped bordered hover variant="dark" className="mb-5">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items}
                  <tr>
                    <td colSpan="4" className="fw-bold">
                      
                      Total
                    </td>
                    <td>₹{totalPrice}/-</td>
                  </tr>
                </tbody>
              </Table>
              <Row style={{ position: "fixed", bottom: 0 }} className="bg-light-black text-light justify-content-center w-100" >
                <Col className="py-2">
                  <h4>Total Price: ₹{totalPrice}</h4>
                </Col>
                <Col className="p-0" md={4}>
                  <Button variant="danger" className="m-2" onClick={emptyCart}>
                    <BsCartX size="1.7rem" />
                    Clear Cart
                  </Button>
                  <Button variant="success" className="m-2" onClick={orderConfirm}>
                    <BsCartCheck size="1.7rem" />
                    Order
                  </Button>
                </Col>
              </Row>
            </Row>
          )}
        </Container>
      </div>
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className="text-center fw-bolder">
        <u>Cart</u>
      </h1>
      <Total />
    </div>
  );
};

export default Cart;



