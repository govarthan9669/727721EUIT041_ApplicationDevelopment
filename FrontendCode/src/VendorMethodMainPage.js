

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Grid, Box } from '@mui/material';
// import { AddCircle, DeleteForever, Search, Edit } from '@mui/icons-material';

// const VendorMethodMainPage = () => {
//   return (
//     <Container maxWidth="md" sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Choose an Action
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/add-product" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #42a5f5, #66bb6a)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <AddCircle sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Add Product
//             </Typography>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/deleteProduct" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #f44336, #ff9800)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <DeleteForever sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Delete Product
//             </Typography>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/getProduct" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #ab47bc, #26c6da)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <Search sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Get Product
//             </Typography>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/updateProduct" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #ef5350, #ffa726)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <Edit sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Update Product
//             </Typography>
//           </Link>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default VendorMethodMainPage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Typography, Grid, Box } from '@mui/material';
// import { AddCircle, DeleteForever, Search, Edit } from '@mui/icons-material';

// const VendorMethodMainPage = () => {
//   return (
//     <Container maxWidth="md" sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Choose an Action
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/add-product" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #42a5f5, #66bb6a)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <AddCircle sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Add Product
//             </Typography>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/deleteProduct" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #f44336, #ff9800)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <DeleteForever sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Delete Product
//             </Typography>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/getProduct" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #ab47bc, #26c6da)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <Search sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Get Product
//             </Typography>
//           </Link>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
//           <Link to="/updateProduct" className="text-decoration-none">
//             <Box
//               sx={{
//                 width: '100%',
//                 height: '150px',
//                 borderRadius: '5px',
//                 background: 'linear-gradient(to right, #ef5350, #ffa726)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   transition: 'transform 0.3s ease',
//                 },
//               }}
//             >
//               <Edit sx={{ fontSize: '5rem', color: '#fff' }} />
//             </Box>
//             <Typography variant="h5" sx={{ marginTop: '10px' }}>
//               Update Product
//             </Typography>
//           </Link>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default VendorMethodMainPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Box } from '@mui/material';
import { AddCircle, DeleteForever, Search, Edit } from '@mui/icons-material';

const VendorMethodMainPage = () => {
  return (
    <Container maxWidth="m" sx={{marginLeft : '150px', marginBottom: '260px' } } >
      <Typography variant="h4" align="center" sx={{ marginBottom: '260px', fontFamily: 'Arial', fontWeight: 'bold' }}>
        Products Management
      </Typography>
      <Grid container spacing={6} justifyContent="center"> {/* Increased spacing to 6 */}
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Link to="/add-product" className="text-decoration-none">
            <Box
              sx={{
                width: '240px',
                height: '240px',
                borderRadius: '5px',
                background: 'linear-gradient(to right, #42a5f5, #66bb6a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <AddCircle sx={{ fontSize: '7rem', color: '#fff' }} />
            </Box>
            <Typography variant="h5" sx={{ marginTop: '20px', fontFamily: 'Arial', fontWeight: 'bold' }}>
              Add New Item
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Link to="/UpdateProduct" className="text-decoration-none">
            <Box
              sx={{
                width: '240px',
                height: '240px',
                borderRadius: '5px',
               
                background: 'linear-gradient(to right, #f44336, #ff9800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <DeleteForever sx={{ fontSize: '7rem', color: '#fff' }} />
            </Box>
            <Typography variant="h5" sx={{ marginTop: '20px', fontFamily: 'Arial', fontWeight: 'bold' }}>
              Delete Product
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Link to="/getProduct" className="text-decoration-none">
            <Box
              sx={{
                width: '240px',
                height: '240px',
                borderRadius: '8px',
               
                background: 'linear-gradient(to right, #ab47bc, #26c6da)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <Search sx={{ fontSize: '7rem', color: '#fff' }} />
            </Box>
            <Typography variant="h5" sx={{ marginTop: '20px', fontFamily: 'Arial', fontWeight: 'bold' }}>
              Search Product
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: 'center' }}>
          <Link to="/updateProduct" className="text-decoration-none">
            <Box
              sx={{
                width: '240px',
                height: '240px',
                borderRadius: '5px',
             
                background: 'linear-gradient(to right, #ef5350, #ffa726)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <Edit sx={{ fontSize: '7rem', color: '#fff' }} />
            </Box>
            <Typography variant="h5" sx={{ marginTop: '20px',marginLeft:'20px', fontFamily: 'Arial', fontWeight: 'bold' }}>
               Product Manage
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VendorMethodMainPage;
