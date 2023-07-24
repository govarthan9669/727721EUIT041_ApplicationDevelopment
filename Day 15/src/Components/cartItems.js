// import React from "react";

// const cartItems = (props) => {
//   let count = 0;
//   return (
//     <tr>
//       <td>{props.count}.</td>
//       <td>
//         <img src={props.Image} alt={props.Name} width="70" height="70" border-radius="18" />
//       </td>
//       <td>{props.Name}</td>
//       <td>{props.quantity || 1}</td>
//       <td>₹{props.Price}/-</td>
//     </tr>
//   );
// };

// export default cartItems;


import React from "react";

const CartItem = (props) => {
  const removeItem = () => {
    // Implement logic to remove the product from the cart
    // For example:
    props.removeItemFromCart(props.Id);

    

  };

  return (
    <tr>
      <td>{props.count}.</td>
      <td>
        <img src={props.Image} alt={props.Name} width="50" height="50" />
      </td>
      <td>{props.Name}</td>
      <td>{props.Quantity || 1}</td>
      <td>₹{props.Price}/-</td>
      <td>
        <button
          style={{
            color: "#fff",
            backgroundColor: "#dc3545",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            padding: "0.2rem 0.5rem"
          }}
          onClick={removeItem}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

