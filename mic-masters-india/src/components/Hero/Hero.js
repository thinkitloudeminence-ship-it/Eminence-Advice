import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import './Hero.css';

// Import your background image
import heroBg from './micmasterr.avif'; // rename your file to "micmasterr.avif" and place inside src/assets or src/

const Hero = ({ onRegisterClick, isMobile }) => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}
    >
      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}
      />

      {/* Content overlay */}
      <Box sx={{ zIndex: 2, p: 2 }}>
        <Typography
          variant={isMobile ? "h3" : "h1"}
          component="h1"
          gutterBottom
          className="gold-text"
        >
          Mic Masters India
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          component="h2"
          gutterBottom
          color='Yellow'
        >
          Showcase Your Talent on the National Stage
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="register-button"
          onClick={onRegisterClick}
        >
          Register Now
        </Button>
        <Typography variant="h5" component="p" align="center" className="gold-text">
          Entry Fee: ₹200
        </Typography>
      </Box>
    </div>
  );
};

export default Hero;
