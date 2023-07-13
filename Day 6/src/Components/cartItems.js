import React from "react";

const cartItems = (props) => {
  let count = 0;
  return (
    <tr>
      <td>{props.count}.</td>
      <td>{props.Name}</td>
      <td>{props.quantity || 1}</td>
      <td>₹{props.Price}/-</td>
    </tr>
  );
};

export default cartItems;
