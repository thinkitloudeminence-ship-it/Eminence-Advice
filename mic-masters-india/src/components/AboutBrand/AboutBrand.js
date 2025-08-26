import React from 'react';
import { Container, Typography } from '@mui/material';
import './AboutBrand.css';

const AboutBrand = () => {
  return (
    <div className="section dark-bg">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" className="gold-text">
          About MIC Masters India
        </Typography>
        <Typography variant="h6" component="p" paragraph align="center">
          MIC Masters India is organized by a team of music industry professionals with over 15 years of experience in discovering and promoting new talent. Our previous contestants have gone on to successful careers in the music industry, with some even landing recording contracts and performing on national television.
        </Typography>
        <Typography variant="h6" component="p" align="center">
          Our mission is to provide a fair and professional platform for aspiring singers to be discovered and nurtured.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutBrand;