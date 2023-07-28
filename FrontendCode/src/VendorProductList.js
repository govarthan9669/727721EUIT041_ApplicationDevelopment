// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, List, ListItem, ListItemText, Grid, IconButton } from '@mui/material';
// import { Delete, Edit } from '@mui/icons-material';

// const VendorProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8282/api/v1/products/get');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:8282/api/v1/products/${productId}`);
//       fetchProducts(); // Refresh the product list after successful deletion
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleEditProduct = async (productId, updatedProduct) => {
//     try {
//       await axios.put(`http://localhost:8282/api/v1/products/${productId}`, updatedProduct);
//       fetchProducts(); // Refresh the product list after successful update
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Product List
//       </Typography>
//       {products.length === 0 ? (
//         <Typography variant="body1" align="center">
//           No products found.
//         </Typography>
//       ) : (
//         <List>
//           {products.map((product) => (
//             <ListItem key={product.id}>
//               <Grid container alignItems="center" spacing={2}>
//                 <Grid item xs={12} sm={4} md={3}>
//                   <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '150px', height: 'auto' }} />
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={6}>
//                   <ListItemText primary={product.name} secondary={`Category: ${product.category}, Quantity: ${product.quantity}, Price: ${product.price}`} />
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'right' }}>
//                   <IconButton onClick={() => handleDeleteProduct(product.id)}>
//                     <Delete />
//                   </IconButton>
//                   <IconButton onClick={() => handleEditProduct(product.id, { ...product, name: 'Updated Product' })}>
//                     <Edit />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </Container>
//   );
// };

// export default VendorProductList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, List, ListItem, ListItemText, Grid, IconButton, TextField, Button } from '@mui/material';
// import { Delete, Edit, Save } from '@mui/icons-material';

// const VendorProductList = () => {
//   const [products, setProducts] = useState([]);
  
//   // State to track the edited details of a product
//   const [editedProduct, setEditedProduct] = useState({
//     id: '',
//     name: '',
//     quantity: '',
//     price: '',
//     expiryDate: '',
//     category: '',
//     image: ''
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8282/api/v1/products/get');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:8282/api/v1/products/${productId}`);
//       fetchProducts(); // Refresh the product list after successful deletion
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleEditProduct = (productId) => {
//     // Set the product details to be edited
//     const productToEdit = products.find((product) => product.id === productId);
//     setEditedProduct(productToEdit);
//   };

//   const handleSaveProduct = async () => {
//     try {
//       // Make PUT request to update the product details
//       await axios.put(`http://localhost:8282/api/v1/products/${editedProduct.id}`, editedProduct);
//       // Refresh the product list after successful update
//       fetchProducts();
//       // Clear the edited product state
//       setEditedProduct({
//         id: '',
//         name: '',
//         quantity: '',
//         price: '',
//         expiryDate: '',
//         category: '',
//         image: ''
//       });
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProduct({ ...editedProduct, [name]: value });
//   };

//   return (
//     <Container maxWidth="md" sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Product List
//       </Typography>
//       {products.length === 0 ? (
//         <Typography variant="body1" align="center">
//           No products found.
//         </Typography>
//       ) : (
//         <List>
//           {products.map((product) => (
//             <ListItem key={product.id}>
//               <Grid container alignItems="center" spacing={2}>
//                 <Grid item xs={12} sm={4} md={3}>
//                   <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '150px', height: 'auto' }} />
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={6}>
//                   {editedProduct.id === product.id ? (
//                     <>
//                       <TextField
//                         fullWidth
//                         label="Name"
//                         name="name"
//                         value={editedProduct.name}
//                         onChange={handleInputChange}
//                         required
//                         margin="normal"
//                       />
//                       <TextField
//                         fullWidth
//                         label="Quantity"
//                         name="quantity"
//                         value={editedProduct.quantity}
//                         onChange={handleInputChange}
//                         required
//                         margin="normal"
//                       />
//                       <TextField
//                         fullWidth
//                         label="Price"
//                         name="price"
//                         value={editedProduct.price}
//                         onChange={handleInputChange}
//                         required
//                         margin="normal"
//                       />
//                       {/* Add other editable fields here */}
//                     </>
//                   ) : (
//                     <ListItemText primary={product.name} secondary={`Category: ${product.category}, Quantity: ${product.quantity}, Price: ${product.price}`} />
//                   )}
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'right' }}>
//                   {editedProduct.id === product.id ? (
//                     <IconButton onClick={handleSaveProduct}>
//                       <Save />
//                     </IconButton>
//                   ) : (
//                     <>
//                       <IconButton onClick={() => handleDeleteProduct(product.id)}>
//                         <Delete />
//                       </IconButton>
//                       <IconButton onClick={() => handleEditProduct(product.id)}>
//                         <Edit />
//                       </IconButton>
//                     </>
//                   )}
//                 </Grid>
//               </Grid>
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </Container>
//   );
// };

// export default VendorProductList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Grid, IconButton, TextField, Button } from '@mui/material';
import { Delete, Edit, Save, Search } from '@mui/icons-material';

const VendorProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // State to track the edited details of a product
  const [editedProduct, setEditedProduct] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    expiryDate: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8282/api/v1/products/get');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8282/api/v1/products/${productId}`);
      fetchProducts(); // Refresh the product list after successful deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditProduct = (productId) => {
    // Set the product details to be edited
    const productToEdit = products.find((product) => product.id === productId);
    setEditedProduct(productToEdit);
  };

  const handleSaveProduct = async () => {
    try {
      // Make PUT request to update the product details
      await axios.put(`http://localhost:8282/api/v1/products/${editedProduct.id}`, editedProduct);
      // Refresh the product list after successful update
      fetchProducts();
      // Clear the edited product state
      setEditedProduct({
        id: '',
        name: '',
        quantity: '',
        price: '',
        expiryDate: '',
        category: '',
        image: ''
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Product List
      </Typography>
      <TextField
        fullWidth
        label="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        margin="normal"
        InputProps={{
          startAdornment: <Search />,
        }}
      />
      {filteredProducts.length === 0 ? (
        <Typography variant="body1" align="center">
          No products found.
        </Typography>
      ) : (
        <List>
          {filteredProducts.map((product) => (
            <ListItem key={product.id}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '150px', height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                  {editedProduct.id === product.id ? (
                    <>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleInputChange}
                        required
                        margin="normal"
                      />
                      <TextField
                        fullWidth
                        label="Quantity"
                        name="quantity"
                        value={editedProduct.quantity}
                        onChange={handleInputChange}
                        required
                        margin="normal"
                      />
                      <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleInputChange}
                        required
                        margin="normal"
                      />
                      {/* Add other editable fields here */}
                    </>
                  ) : (
                    <ListItemText primary={product.name} secondary={`Category: ${product.category}, Quantity: ${product.quantity}, Price: ${product.price}`} />
                  )}
                </Grid>
                <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'right' }}>
                  {editedProduct.id === product.id ? (
                    <IconButton onClick={handleSaveProduct}>
                      <Save />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton onClick={() => handleDeleteProduct(product.id)}>
                        <Delete />
                      </IconButton>
                      <IconButton onClick={() => handleEditProduct(product.id)}>
                        <Edit />
                      </IconButton>
                    </>
                  )}
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default VendorProductList;
