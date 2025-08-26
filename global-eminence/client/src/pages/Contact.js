import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  Paper,
} from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [alert, setAlert] = useState({ show: false, severity: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      setAlert({
        show: true,
        severity: 'success',
        message: response.data.message
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setAlert({
        show: true,
        severity: 'error',
        message: error.response?.data?.message || 'Error sending message. Please try again.'
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Us
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom color="primary">
              Get In Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Have questions about studying or working abroad? We're here to help! 
              Fill out the form and our team will get back to you as soon as possible.
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
              >
                Send Message
              </Button>
            </Box>
            
            {alert.show && (
              <Alert severity={alert.severity} sx={{ mt: 3 }}>
                {alert.message}
              </Alert>
            )}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom color="primary">
              Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Address:</strong> 123 International Plaza, Global City, GC 10001
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> info@globaleminence.com
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Hours:</strong> Monday - Friday: 9am - 6pm
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;