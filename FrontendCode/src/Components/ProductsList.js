// import React, { useEffect, useState } from "react";
// import Product from "./Product";
// import Data from "../Data";
// import "./ProductsList.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProductList = (props) => {
//   const [selectedcategory, setSelectedcategory] = useState();
//   const category = props.category;
//   const items = Data.items; // Access the items array from the Data object

//   const showCategories = (category) => {
//     if (category === "All") {
//       const productsdata = items.map((props) => {
//         return <Product key={props.Id} {...props} />;
//       });
//       setSelectedcategory(productsdata);
//     } else {
//       const filteredproductsdata = items.filter(
//         (item) => item.category === category
//       );
//       const productsdata = filteredproductsdata.map((props) => {
//         return <Product key={props.Id} {...props} />;
//       });
//       setSelectedcategory(productsdata);
//     }
//   };

//   useEffect(() => {
//     showCategories(category);
//   }, [category]);

//   return (
//     <>
//       <h1>
         
//       </h1>
//       <div className="List">{selectedcategory}</div>
//     </>
//   );
// };

// export default ProductList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Product from "./Product";
// import "./ProductsList.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ProductList = (props) => {
//   const [selectedcategory, setSelectedcategory] = useState([]);
//   const category = props.category;

//   useEffect(() => {
//     fetchProducts();
//   }, [category]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8282/api/v1/products/get");
//       const items = response.data; // Assuming the API returns the products in an array
//       showCategories(items, category);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const showCategories = (items, category) => {
//     if (category === "All") {
//       const productsdata = items.map((product) => {
//         return <Product key={product.Id} {...product} />;
//       });
//       setSelectedcategory(productsdata);
//     } else {
//       const filteredproductsdata = items.filter(
//         (item) => item.category === category
//       );
//       const productsdata = filteredproductsdata.map((product) => {
//         return <Product key={product.Id} {...product} />;
//       });
//       setSelectedcategory(productsdata);
//     }
//   };

//   return (
//     <>
//       <h1>{category}</h1>
//       <div className="List">{selectedcategory}</div>
//     </>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from "react";
import Product from "./Product";
import Data from "../Data";
import "./ProductsList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const ProductList = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const items = Data.items;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    showCategories(selectedCategory);
  }, [selectedCategory]);

  const showCategories = (category) => {
    if (category === "All") {
      const productsdata = items
        .filter((item) =>
          item.Name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((props) => <Product key={props.Id} {...props} />);
      return productsdata;
    } else {
      const filteredProducts = items.filter(
        (item) => item.category === category
      );
      const productsdata = filteredProducts
        .filter((item) =>
          item.Name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((props) => <Product key={props.Id} {...props} />);
      return productsdata;
    }
  };

  const categories = [
    "All",
    "Staple",
    "Meat",
    "Vegitable",
    "Fruit",
    "Snacks",
    "Beverages",
    "Dairy",
    "Beauty",
  ];

  return (
    <>
    <br></br>
    <br></br>
    
      <div className="">
        {/* {categories.map((category) => (
          <button
            key={category}
            className={`btn ${
              selectedCategory === category ? "btn-dark" : "btn-light"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))} */}
      </div>
      <TextField
        label="Search products by name"
        variant="outlined"
        value={searchInput}
        onChange={handleSearchInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        className="mt-3"
        fullWidth
      />
      <div className="List">{showCategories(selectedCategory)}</div>
    </>
  );
};

export default ProductList;
