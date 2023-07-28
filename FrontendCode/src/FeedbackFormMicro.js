// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import Header from './Header';

// const FeedbackFormMicro = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Assuming you have a backend API endpoint for feedback submissions
//       await axios.post('http://localhost:8082/api/v1/feed/feedback', formData);
//       alert('Feedback submitted successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('Error submitting feedback. Please try again later.');
//     }
//   };

//   return (

//     <div>
//         <Header></Header>

//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//     <Container maxWidth="sm" sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Feedback Form
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Name"
//           variant="outlined"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           sx={{ marginBottom: '20px' }}
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           variant="outlined"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           sx={{ marginBottom: '20px' }}
//         />
//         <TextField
//           fullWidth
//           label="Message"
//           variant="outlined"
//           multiline
//           rows={4}
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           sx={{ marginBottom: '20px' }}
//         />
//         <Button type="submit" variant="contained" endIcon={<Send />}>
//           Submit Feedback
//         </Button>
//       </form>
//     </Container>
//     </div>
//   );
// };

// export default FeedbackFormMicro;



import React, { useState } from 'react';
import axios from 'axios';
import { useHistory,Link } from 'react-router-dom'; // Import useHistory
import { Container, TextField, Button, Typography } from '@mui/material';
import { Send ,Star} from '@mui/icons-material';
import Header from './Header';

const FeedbackFormMicro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const history = useHistory(); // Create a history object

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have a backend API endpoint for feedback submissions
      await axios.post('http://localhost:8082/api/v1/feed/feedback', formData);
      alert('Feedback submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again later.');
    }
  };

  const handleViewFeedbacks = () => {
    // Redirect to the feedback list page
    history.push('/feedbackList');
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="sm" sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          Feedback Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            sx={{ marginBottom: '20px' }}
          />
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Submit Feedback
          </Button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        
        
        <Button
          variant="contained"
          color="success"
          startIcon={<Star style={{ color: 'goldenrod' }} />} // Style the Star icon as golden
          onClick={handleViewFeedbacks}
        >
          View Top Feedbacks
        </Button>
        
      </Container>

    </div>
  );
};

export default FeedbackFormMicro;
