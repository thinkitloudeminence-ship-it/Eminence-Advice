import React from 'react';
import { Container, Typography } from '@mui/material';
import './AboutContest.css';

const AboutContest = () => {
  return (
    <div className="section">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" className="gold-text">
          About the Contest
        </Typography>
        <Typography variant="h6" component="p" paragraph align="center">
          Mic Masters India is a national-level singing competition that provides a platform for talented singers across the country to showcase their skills. Whether you're a solo artist, part of a duet, or a rapper, this is your chance to shine!
        </Typography>
        
      </Container>
    </div>
  );
};

export default AboutContest;