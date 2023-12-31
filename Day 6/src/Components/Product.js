import React from "react";
import { toast } from "react-toastify";
import { Card } from "react-bootstrap";
import "./Product.css";
import "react-toastify/dist/ReactToastify.min.css";
import store from "../store";

const Product = (props) => {
  const addToCart = () => {
    store.dispatch({ type: "AddedToCart", payload: props });
    console.log(store.getState());

    toast.dark(`Added ${props.Name} to Cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("added to cart");
  };

  return (
    <Card
      className="m-1 p-2 "
      border="dark"
      // onClick={() => console.log("Product Details")}
    >
      <Card.Img variant="top" className="my-img" src={props.Image} />
      <Card.Body className="position-relative fixed-bottom">
        <Card.Title className="fs-m">{props.Name}</Card.Title>
        <p className="text-secondary fst-italic">{props.Quantity}</p>
        <Card.Text className="fs-m">₹{props.Price || "NA"}/- </Card.Text>
      </Card.Body>
      <button className="btn btn-secondary" onClick={addToCart}>
        Add To Cart
      </button>
    </Card>
  );
};

export default Product;
