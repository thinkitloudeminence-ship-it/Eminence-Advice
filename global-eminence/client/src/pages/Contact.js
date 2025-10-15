// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
// } from "@mui/material";
// import { Helmet } from "react-helmet";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";

// export default function Contact() {
//   const orangeColor = "#FF6600";

//   return (
//     <>
//       <Helmet>
//         <title>Contact | Eminence Advice Global Education Experts</title>
//         <meta
//           name="description"
//           content="Get in touch with Eminence Advice Global Education Experts for personalized study abroad guidance, admissions support, and visa assistance. Connect today to start your international education journey."
//         />
//       </Helmet>

//       <Box sx={{ py: 10, backgroundColor: "#fff7f0" }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             textAlign="center"
//             fontWeight="bold"
//             gutterBottom
//             sx={{ color: orangeColor }}
//           >
//             Get In Touch
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             textAlign="center"
//             color="textSecondary"
//             mb={8}
//           >
//             Have questions? Our counselors are ready to assist you.
//           </Typography>

//           <Grid container spacing={6}>
//             {/* Contact Info */}
//             <Grid item xs={12} md={5}>
//               <Paper
//                 sx={{
//                   p: 5,
//                   width: "1100px",
//                   borderRadius: 4,
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
//                   borderTop: `4px solid ${orangeColor}`,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ color: orangeColor }}
//                 >
//                   Contact Information
//                 </Typography>

//                 <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                   <LocationOnIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">
//                     Eminence Advice Pvt. Ltd.<br />
//                     2nd Floor, Green Plaza, Sector 42,<br />
//                     Gurugram, Haryana, India
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                   <PhoneIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">+91 98765 43210</Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <EmailIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">
//                     info@eminenceadvice.com
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>

//             {/* Contact Form */}
//             <Grid item xs={12} md={7}>
//               <Paper
//                 sx={{
//                   p: 5,
//                   borderRadius: 4,
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
//                   borderTop: `4px solid ${orangeColor}`,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ color: orangeColor }}
//                 >
//                   Send Us a Message
//                 </Typography>

//                 <TextField
//                   fullWidth
//                   label="Full Name"
//                   margin="normal"
//                   sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email Address"
//                   margin="normal"
//                   sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Phone Number"
//                   margin="normal"
//                   sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Your Message"
//                   margin="normal"
//                   multiline
//                   rows={4}
//                   sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
//                 />

//                 <Button
//                   variant="contained"
//                   sx={{
//                     mt: 3,
//                     textTransform: "none",
//                     borderRadius: "8px",
//                     backgroundColor: orangeColor,
//                     "&:hover": { backgroundColor: "#e65c00" },
//                     px: 4,
//                   }}
//                 >
//                   Submit Message
//                 </Button>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }


// // client/src/pages/Contact.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   Alert,
//   Snackbar
// } from "@mui/material";
// import { Helmet } from "react-helmet";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import api from '../api/axios';

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });

//   const orangeColor = "#FF6600";

//   // client/src/pages/Contact.jsx
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // CHANGE THIS LINE - remove extra /api
//     await api.post('/contact', form); // ✅ FIXED
//     setSnackbar({
//       open: true,
//       message: 'Thanks! Your message has been received. We will get back to you soon.',
//       severity: 'success'
//     });
//     setForm({ name: '', email: '', phone: '', message: '' });
//   } catch (error) {
//     console.error('Contact form error:', error);
//     setSnackbar({
//       open: true,
//       message: 'Sorry, there was an error sending your message. Please try again.',
//       severity: 'error'
//     });
//   }
// }
//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact | Eminence Advice Global Education Experts</title>
//         <meta
//           name="description"
//           content="Get in touch with Eminence Advice Global Education Experts for personalized study abroad guidance, admissions support, and visa assistance. Connect today to start your international education journey."
//         />
//       </Helmet>

//       <Box sx={{ py: 10, backgroundColor: "#fff7f0", minHeight: '100vh' }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             textAlign="center"
//             fontWeight="bold"
//             gutterBottom
//             sx={{ color: orangeColor }}
//           >
//             Get In Touch
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             textAlign="center"
//             color="textSecondary"
//             mb={8}
//           >
//             Have questions? Our counselors are ready to assist you.
//           </Typography>

//           <Grid container spacing={6}>
//             {/* Contact Info */}
//             <Grid item xs={12} md={5}>
//               <Paper
//                 sx={{
//                   p: 5,
//                   borderRadius: 4,
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
//                   borderTop: `4px solid ${orangeColor}`,
//                   height: 'fit-content'
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ color: orangeColor }}
//                 >
//                   Contact Information
//                 </Typography>

//                 <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
//                   <LocationOnIcon sx={{ color: orangeColor, mr: 2, mt: 0.5 }} />
//                   <Typography variant="body1">
//                     Eminence Advice Pvt. Ltd.<br />
//                     2nd Floor, Green Plaza, Sector 42,<br />
//                     Gurugram, Haryana, India
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                   <PhoneIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">+91 98765 43210</Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <EmailIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">
//                     info@eminenceadvice.com
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>

//             {/* Contact Form */}
//             <Grid item xs={12} md={7}>
//               <Paper
//                 sx={{
//                   p: 5,
//                   borderRadius: 4,
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
//                   borderTop: `4px solid ${orangeColor}`,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ color: orangeColor }}
//                 >
//                   Send Us a Message
//                 </Typography>

//                 <form onSubmit={handleSubmit}>
//                   <TextField
//                     fullWidth
//                     name="name"
//                     label="Full Name"
//                     value={form.name}
//                     onChange={handleChange}
//                     margin="normal"
//                     required
//                     sx={{
//                       "& label.Mui-focused": { color: orangeColor },
//                       "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor }
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     name="email"
//                     type="email"
//                     label="Email Address"
//                     value={form.email}
//                     onChange={handleChange}
//                     margin="normal"
//                     required
//                     sx={{
//                       "& label.Mui-focused": { color: orangeColor },
//                       "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor }
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     name="phone"
//                     label="Phone Number"
//                     value={form.phone}
//                     onChange={handleChange}
//                     margin="normal"
//                     sx={{
//                       "& label.Mui-focused": { color: orangeColor },
//                       "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor }
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     name="message"
//                     label="Your Message"
//                     value={form.message}
//                     onChange={handleChange}
//                     margin="normal"
//                     multiline
//                     rows={4}
//                     required
//                     sx={{
//                       "& label.Mui-focused": { color: orangeColor },
//                       "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor }
//                     }}
//                   />

//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       mt: 3,
//                       textTransform: "none",
//                       borderRadius: "8px",
//                       backgroundColor: orangeColor,
//                       "&:hover": { backgroundColor: "#e65c00" },
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1rem'
//                     }}
//                   >
//                     Submit Message
//                   </Button>
//                 </form>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>

//         {/* Success/Error Snackbar */}
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={6000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.severity}
//             sx={{ width: '100%' }}
//           >
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </>
//   );
// }


// // client/src/pages/Contact.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   Alert,
//   Snackbar
// } from "@mui/material";
// import { Helmet } from "react-helmet";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import api from '../api/axios';

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });

//   const orangeColor = "#FF6600";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       console.log('Sending contact form to:', `${process.env.REACT_APP_API_URL}/contact`);

//       const response = await api.post('/contact', form);
//       console.log('Contact form success:', response.data);

//       setSnackbar({
//         open: true,
//         message: 'Thanks! Your message has been received. We will get back to you soon.',
//         severity: 'success'
//       });
//       setForm({ name: '', email: '', phone: '', message: '' });

//     } catch (error) {
//       console.error('Contact form error details:', {
//         message: error.message,
//         response: error.response,
//         config: error.config
//       });

//       setSnackbar({
//         open: true,
//         message: error.response?.data?.message || 'Sorry, there was an error sending your message. Please try again.',
//         severity: 'error'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact | Eminence Advice Global Education Experts</title>
//         <meta
//           name="description"
//           content="Get in touch with Eminence Advice Global Education Experts for personalized study abroad guidance, admissions support, and visa assistance. Connect today to start your international education journey."
//         />
//       </Helmet>

//       <Box sx={{ py: 10, backgroundColor: "#fff7f0", minHeight: '100vh' }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             textAlign="center"
//             fontWeight="bold"
//             gutterBottom
//             sx={{ color: orangeColor }}
//           >
//             Get In Touch
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             textAlign="center"
//             color="textSecondary"
//             mb={8}
//           >
//             Have questions? Our counselors are ready to assist you.
//           </Typography>

//           <Grid container spacing={6}>
//             {/* Contact Info */}
//             <Grid item xs={12} md={5}>
//               <Paper
//                 sx={{
//                   p: 5,
//                   borderRadius: 4,
//                   width: "1100px",
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
//                   borderTop: `4px solid ${orangeColor}`,
//                   height: 'fit-content'
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ color: orangeColor }}
//                 >
//                   Contact Information
//                 </Typography>

//                 <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
//                   <LocationOnIcon sx={{ color: orangeColor, mr: 2, mt: 0.5 }} />
//                   <Typography variant="body1">
//                     Eminence Advice Indore
//                   </Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//                   <PhoneIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">+91 98765 43210</Typography>
//                 </Box>

//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <EmailIcon sx={{ color: orangeColor, mr: 2 }} />
//                   <Typography variant="body1">
//                     info@eminenceadvice.com
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>

//             {/* Contact Form */}
//             <Grid item xs={12} md={7}>
//               <Paper
//                 sx={{
//                   p: 5,
//                   borderRadius: 4,
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
//                   borderTop: `4px solid ${orangeColor}`,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{ color: orangeColor }}
//                 >
//                   Send Us a Message
//                 </Typography>

//                 <form onSubmit={handleSubmit}>
//                   <TextField
//                     fullWidth
//                     name="name"
//                     label="Full Name"
//                     value={form.name}
//                     onChange={handleChange}
//                     margin="normal"
//                     required
//                     disabled={loading}
//                   />
//                   <TextField
//                     fullWidth
//                     name="email"
//                     type="email"
//                     label="Email Address"
//                     value={form.email}
//                     onChange={handleChange}
//                     margin="normal"
//                     required
//                     disabled={loading}
//                   />
//                   <TextField
//                     fullWidth
//                     name="phone"
//                     label="Phone Number"
//                     value={form.phone}
//                     onChange={handleChange}
//                     margin="normal"
//                     disabled={loading}
//                   />
//                   <TextField
//                     fullWidth
//                     name="message"
//                     label="Your Message"
//                     value={form.message}
//                     onChange={handleChange}
//                     margin="normal"
//                     multiline
//                     rows={4}
//                     required
//                     disabled={loading}
//                   />

//                   <Button
//                     type="submit"
//                     variant="contained"
//                     disabled={loading}
//                     sx={{
//                       mt: 3,
//                       textTransform: "none",
//                       borderRadius: "8px",
//                       backgroundColor: orangeColor,
//                       "&:hover": { backgroundColor: "#e65c00" },
//                       px: 4,
//                       py: 1.5,
//                       fontSize: '1rem'
//                     }}
//                   >
//                     {loading ? 'Sending...' : 'Submit Message'}
//                   </Button>
//                 </form>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>

//         {/* Success/Error Snackbar */}
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={6000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.severity}
//             sx={{ width: '100%' }}
//           >
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </>
//   );
// }


// client/src/pages/Contact.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  Snackbar
} from "@mui/material";
import { Helmet } from "react-helmet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import api from '../api/axios';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const orangeColor = "#FF6600";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Sending contact form to:', `${process.env.REACT_APP_API_URL}/contact`);

      const response = await api.post('/contact', form);
      console.log('Contact form success:', response.data);

      setSnackbar({
        open: true,
        message: 'Thanks! Your message has been received. We will get back to you soon.',
        severity: 'success'
      });
      setForm({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error('Contact form error details:', {
        message: error.message,
        response: error.response,
        config: error.config
      });

      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'Sorry, there was an error sending your message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Eminence Advice Global Education Experts</title>
        <meta
          name="description"
          content="Get in touch with Eminence Advice Global Education Experts for personalized study abroad guidance, admissions support, and visa assistance. Connect today to start your international education journey."
        />
      </Helmet>

      <Box sx={{ py: 10, backgroundColor: "#fff7f0", minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: orangeColor }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="textSecondary"
            mb={8}
          >
            Have questions? Our counselors are ready to assist you.
          </Typography>

          {/* Main Container with Flex Display */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'stretch'
          }}>

            {/* Contact Info - Left Side */}
            <Paper
              sx={{
                p: 5,
                borderRadius: 4,
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                borderTop: `4px solid ${orangeColor}`,
                flex: 1,
                minWidth: { md: '400px' },

              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: orangeColor, mb: 4 }}
              >
                Contact Information
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
                <LocationOnIcon sx={{ color: orangeColor, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Our Office
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Eminence Advice Indore
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Visit us for personalized counseling
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
                <PhoneIcon sx={{ color: orangeColor, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Phone
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    +91 98765 43210
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    +91 98765 43211
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Call us for immediate assistance
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <EmailIcon sx={{ color: orangeColor, mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    info@eminenceadvice.com
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    support@eminenceadvice.com
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    We respond within 24 hours
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Contact Form - Right Side */}
            <Paper
              sx={{
                p: 5,
                borderRadius: 4,
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                borderTop: `4px solid ${orangeColor}`,
                flex: 2,
                minWidth: { md: '500px' }
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: orangeColor, mb: 4 }}
              >
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="name"
                  label="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={loading}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  disabled={loading}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  margin="normal"
                  disabled={loading}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  disabled={loading}
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    borderRadius: "8px",
                    backgroundColor: orangeColor,
                    "&:hover": { backgroundColor: "#e65c00" },
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    minWidth: '200px'
                  }}
                >
                  {loading ? 'Sending...' : 'Submit Message'}
                </Button>
              </form>
            </Paper>
          </Box>
        </Container>

        {/* Success/Error Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}