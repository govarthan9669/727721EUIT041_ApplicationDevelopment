// // eslint-disable-next-line import/no-anonymous-default-export
// const initialState = {
//     products: [],
//     itemQuantity: [],
//     count: 0,
//   };
  
//   let x = 0;
//   let p = [];
//   let i = [];
  
//   const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//       case "AddedToCart":
//         addToCart(payload);
//         return { products: p, itemQuantity: i, count: ++x };
//       case "RemovedfromCart":
//         return --state;
//       default:
//         return state;
//     }
//   };
  
//   const addToCart = (props) => {
//     if (p.includes(props)) {
//       i.push(props.Id);
//     } else {
//       p.push(props);
//     }
//   };
  
//   export default reducer;
// eslint-disable-next-line import/no-anonymous-default-export
const initialState = {
  products: [],
  itemQuantity: [],
  count: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "AddedToCart":
      return addToCart(state, payload);
    case "RemovedfromCart":
      return removeFromCart(state, payload);
    default:
      return state;
  }
};

const addToCart = (state, props) => {
  const { products, itemQuantity } = state;
  if (products.includes(props)) {
    // Item already exists in the cart, increase its quantity
    const index = products.findIndex((product) => product.Id === props.Id);
    itemQuantity[index] += 1;
  } else {
    // Item does not exist in the cart, add it
    return {
      ...state,
      products: [...products, props],
      itemQuantity: [...itemQuantity, 1],
      count: state.count + 1,
    };
  }

  return { ...state, count: state.count + 1 };
};

const removeFromCart = (state, productId) => {
  const { products, itemQuantity } = state;
  const index = products.findIndex((product) => product.Id === productId);

  if (index !== -1) {
    const updatedProducts = products.filter((product) => product.Id !== productId);
    const updatedQuantities = itemQuantity.filter((quantity, idx) => idx !== index);
    return {
      ...state,
      products: updatedProducts,
      itemQuantity: updatedQuantities,
      count: state.count - 1,
    };
  }

  return state;
};

export default reducer;





