





// import React from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button, Nav, Navbar } from "react-bootstrap";

// const Categories = (props) => {
//   return (
//     <Navbar className="mt-3 container min-vw-100 navbar-nav-scroll justify-align-content-around">
//       <Nav.Item>
//         <Button
//           variant="dark"
//           className="ms-1"
//           onClick={() => props.setCategory("All")}
//         >
//           All
//         </Button>
//       </Nav.Item>
      // <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("Snacks")}
      //   >
      //     Snacks
      //   </Button>
      // </Nav.Item>
      // <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("Staple")}
      //   >
      //     Staples
      //   </Button>
      // </Nav.Item>
      // <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("Dairy")}
      //   >
      //     Dairy
      //   </Button>
      // </Nav.Item>


      // <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("Vegitable")}
      //   >
      //     Vegitable
      //   </Button>
      //   </Nav.Item>


      //   <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("Fruit")}
      //   >
      //     Fruit
      //   </Button>
      // </Nav.Item>
      // <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("Beverages")}
      //   >
      //     Beverages
      //   </Button>
      // </Nav.Item>

      // <Nav.Item>
      //   <Button
      //     variant="dark"
      //     className="ms-1"
      //     onClick={() => props.setCategory("meat")}
      //   >
      //     Meat
      //   </Button>
      // </Nav.Item>
      


//       <Nav.Item>
//         <Button
//           variant="dark"
//           className="ms-1"
//           onClick={() => props.setCategory("Beauty")}
//         >
//           Beauty/Care
//         </Button>
//       </Nav.Item>
//     </Navbar>
//   );
// };

// export default Categories;




import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import Axios

import { Button, Nav, Navbar } from "react-bootstrap";

const Categories = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]); // State to store fetched products

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  const fetchProductsByCategory = (category) => {
    axios.get(`http://localhost:8080/products/${category}`)
      .then((response) => {
        // Handle the response data (update your state with the fetched products)
        console.log(response.data);
        setProducts(response.data); // Update products state with fetched data
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <Navbar className="mt-3 container min-vw-100 navbar-nav-scroll justify-align-content-around">
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() =>props.setCategory ("All")}
        >
          All
        </Button>
      </Nav.Item>
      {/* Rest of the categories */}
      {/* ... */}

      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Snacks")}
        >
          Snacks
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Staple")}
        >
          Staples
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Dairy")}
        >
          Dairy
        </Button>
      </Nav.Item>


      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Vegitable")}
        >
          Vegitable
        </Button>
        </Nav.Item>


        <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Fruit")}
        >
          Fruit
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Beverages")}
        >
          Beverages
        </Button>
      </Nav.Item>

      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("meat")}
        >
          Meat
        </Button>
      </Nav.Item>


      

      <Nav.Item>
        <Button
          variant="dark"
          className="ms-1"
          onClick={() => props.setCategory("Beauty")}
        >
          Beauty/Care
        </Button>
      </Nav.Item>

      {/* Display fetched products based on selected category */}
     
      
    </Navbar>
  );
};

export default Categories;
