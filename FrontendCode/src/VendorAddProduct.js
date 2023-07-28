// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, TextField, Button } from '@mui/material';

// const VendorAddProduct = () => {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Quantity: '',
//     category: '',
//     Price: '',
//     Image: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8282/api/v1/products/add', formData);
//       // Optionally, you can redirect to the product list page or show a success message
//       // For simplicity, let's just clear the form data here
//       setFormData({
//         Name: '',
//         Quantity: '',
//         category: '',
//         Price: '',
//         Image: '',
//       });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Add New Product
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Name"
//           name="Name"
//           value={formData.Name}
//           onChange={handleChange}
//           required
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Quantity"
//           name="Quantity"
//           value={formData.Quantity}
//           onChange={handleChange}
//           required
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Category"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Price"
//           name="Price"
//           value={formData.Price}
//           onChange={handleChange}
//           required
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Image URL"
//           name="Image"
//           value={formData.Image}
//           onChange={handleChange}
//           required
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
//           Add Product
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default VendorAddProduct;



import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Event } from '@mui/icons-material';

const VendorAddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    expiryDate: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8282/api/v1/products/add', formData);
      // Optionally, you can redirect to the product list page or show a success message
      // For simplicity, let's just clear the form data here
      setFormData({
        name: '',
        quantity: '',
        price: '',
        expiryDate: '',
        category: '',
        image: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Expiry Date"
          name="expiryDate"
          type="date"
          value={formData.expiryDate}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Event />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default VendorAddProduct;
