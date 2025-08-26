import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Us
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2010, Global Eminence has helped thousands of students and professionals 
          achieve their dreams of international education and career opportunities. Our team 
          of experienced counselors and industry experts are dedicated to providing personalized 
          guidance tailored to each client's unique aspirations and circumstances.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h3" gutterBottom color="primary">
              Our Mission
            </Typography>
            <Typography variant="body1">
              To empower individuals with global opportunities through expert guidance, 
              personalized support, and unwavering commitment to their success in international 
              education and career development.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h3" gutterBottom color="primary">
              Our Vision
            </Typography>
            <Typography variant="body1">
              To be the most trusted and comprehensive consultancy for global education and 
              career advancement, breaking down barriers and creating pathways to international 
              success for our clients.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          Why Choose Us?
        </Typography>
        <Typography variant="body1" paragraph>
          • Experienced team with decades of combined expertise<br />
          • Partnerships with educational institutions worldwide<br />
          • Personalized approach for each client<br />
          • End-to-end support from planning to relocation<br />
          • Proven track record of success stories<br />
          • Continuous support even after you've moved abroad
        </Typography>
      </Box>
    </Container>
  );
};

export default About;