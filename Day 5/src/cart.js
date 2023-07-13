import React, { useEffect, useState } from "react";
import { useHistory as history } from "react-router-dom";
import { toast } from "react-toastify";
import CartItem from "./Components/cartItems";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const cartitems = store.getState().products;

  const [items, setItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const showItems = () => {
    let count = 0;
    const itemss = cartitems.map((props) => {
      count++;
      return <CartItem key={props.Id} {...props} count={count} />;
    });
    setItems(itemss);
    if (cartitems != null) {
      const allPrices = cartitems.map((props) => props.Price);
      let tprice = 0;
      allPrices.forEach((element) => {
        tprice += Number(element);
        setTotalPrice(tprice);
      });
    }
  };

  useEffect(() => {
    showItems();
  }, []);

  const orderConfirm = () => {
    toast.success("Your Order was Successfull");
    const routeChange = () => {
      let path = `/`;
      history.push(path);
    };
  };

  const Total = () => {
    if (totalPrice === 0)
      return (
        <>
          <h3 className="text-center">Cart is Empty</h3>
        </>
      );
    return (
      <div>
        <table className="table m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items}
            <tr>
              <td colSpan="3" className="fw-bold">
                Total
              </td>
              <td>₹{totalPrice}/-</td>
            </tr>
          </tbody>
        </table>
        <p className="text-secondary">
          All the payments are to be done through: <b>Cash On Delivery</b>
        </p>
        <button className="m-2 btn btn-dark" onClick={orderConfirm}>
          Order
        </button>
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-center fw-bolder">
        <u> Cart</u>
      </h1>
      <Total />
    </div>
  );
};

export default Cart;
