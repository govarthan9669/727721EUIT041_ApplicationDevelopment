// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, List, ListItem, Grid, InputBase, IconButton } from '@mui/material';
// import { Search } from '@mui/icons-material';

// const VendorGetMethod = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

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

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredProducts = products.filter((product) => {
//     return product.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <Container maxWidth="md" sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Product List
//       </Typography>
//       <div style={{ marginBottom: '20px' }}>
//         <InputBase
//           placeholder="Search by product name"
//           value={searchTerm}
//           onChange={handleSearch}
//           style={{ backgroundColor: '#f0f0f0', padding: '8px', borderRadius: '5px', width: '100%' }}
//           startAdornment={<Search sx={{ color: '#aaa', marginRight: '8px' }} />}
//         />
//       </div>
//       {filteredProducts.length === 0 ? (
//         <Typography variant="body1" align="center">
//           No products found.
//         </Typography>
//       ) : (
//         <List>
//           {filteredProducts.map((product) => (
//             <ListItem key={product.id} sx={{ '&:hover': { backgroundColor: '#f8f8f8' } }}>
//               <Grid container alignItems="center" spacing={2}>
//                 <Grid item xs={12} sm={4} md={3}>
//                   <div style={{ width: '100%', maxWidth: '150px', height: '150px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden' }}>
//                     <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                   </div>
//                 </Grid>
//                 <Grid item xs={12} sm={4} md={6}>
//                   <Typography variant="h6" component="span" display="block" fontWeight="bold">
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body1" component="span" display="block" color="textSecondary">
//                     Category: {product.category}, Quantity: {product.quantity}, Price: {product.price}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </Container>
//   );
// };

// export default VendorGetMethod;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, Grid, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const VendorProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Container maxWidth="md" sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Product List
      </Typography>
      <div style={{ marginBottom: '20px' }}>
        <InputBase
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ backgroundColor: '#f0f0f0', padding: '8px', borderRadius: '5px', width: '100%' }}
          startAdornment={<Search sx={{ color: '#aaa', marginRight: '8px' }} />}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <Typography variant="body1" align="center">
          No products found.
        </Typography>
      ) : (
        <List>
          {filteredProducts.map((product) => (
            <ListItem key={product.id} sx={{ '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease' } }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                  <div style={{ width: '100%', height: '200px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden' }}>
                    <img src={product.image} alt={product.name} style={{ width: '90%', height: '90%', objectFit: 'cover' }} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                  <Typography variant="h5" component="span" display="block" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" component="span" display="block" color="textSecondary">
                    Category: {product.category}, Quantity: {product.quantity}, Price: {product.price}
                  </Typography>
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

