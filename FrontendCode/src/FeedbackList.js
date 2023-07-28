



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
// import Header from './Header';
// import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
// import { BsFillPersonFill } from 'react-icons/bs';

// const FeedbackList = () => {
//   const [feedbackList, setFeedbackList] = useState([]);

//   useEffect(() => {
//     fetchFeedbackList();
//   }, []);

//   const fetchFeedbackList = async () => {
//     try {
//       const response = await axios.get('http://localhost:8082/api/v1/feed/feedbacks');
//       setFeedbackList(response.data);
//     } catch (error) {
//       console.error('Error fetching feedback list:', error);
//     }
//   };

//   return (
//     <div>
//       <Header />

//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />

//       <Container maxWidth="md" sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
//         <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//           <BsFillPersonFill style={{ marginRight: '10px' }} />
//           Feedback List
//           <BsFillPersonFill style={{ marginLeft: '10px' }} />
//         </Typography>

//         {feedbackList.length === 0 ? (
//           <Typography variant="body1" align="center">
//             No feedbacks yet.
//           </Typography>
//         ) : (
//           <List>
//             {feedbackList.map((feedback, index) => (
//               <ListItem key={index}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} md={3}>
//                     <FaUser style={{ fontSize: '2rem', marginRight: '10px' }} />
//                     <ListItemText primary={feedback.name} />
//                   </Grid>
//                   <Grid item xs={12} md={3}>
//                     <FaEnvelope style={{ fontSize: '2rem', marginRight: '10px' }} />
//                     <ListItemText primary={feedback.email} />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <FaComment style={{ fontSize: '2rem', marginRight: '10px' }} />
//                     <Typography variant="body2">{feedback.message}</Typography>
//                   </Grid>
//                 </Grid>
//               </ListItem>
//             ))}
//           </List>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default FeedbackList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import Header from './Header';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const fetchFeedbackList = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/v1/feed/feedbacks');
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback list:', error);
    }
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

      <Container maxWidth="md" sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          <BsFillPersonFill style={{ marginRight: '10px' }} />
          Feedback List
          <BsFillPersonFill style={{ marginLeft: '10px' }} />
        </Typography>

        {feedbackList.length === 0 ? (
          <Typography variant="body1" align="center">
            No feedbacks yet.
          </Typography>
        ) : (
          <List>
            {feedbackList.map((feedback, index) => (
              <ListItem key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <FaUser style={{ fontSize: '2rem', marginRight: '10px' }} />
                    <ListItemText primary={feedback.name} />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FaEnvelope style={{ fontSize: '2rem', marginRight: '10px' }} />
                    <ListItemText primary={feedback.email} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FaComment style={{ fontSize: '2rem', marginRight: '10px' }} />
                    <Typography variant="body2">
                      {/* Display the feedback.message */}
                      <React.Fragment>
                        <FaComment style={{ fontSize: '1rem', marginRight: '5px' }} />
                        {feedback.message}
                      </React.Fragment>
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </div>
  );
};

export default FeedbackList;
