import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Lottie from 'lottie-react';
import './Header.css';

// Import logo
import logo from './mmi-logo1.png';

// Import your Lottie animation JSON
import musicNotesAnimation from './music-notes.json'; // rename uploaded file to music-notes.json and place inside src/assets

const Header = ({ onRegisterClick }) => {
  return (
    <AppBar position="sticky" className="header" sx={{ backgroundColor: '#111' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left side Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Mic Masters India Logo" 
            style={{ height: '70px', objectFit: 'contain' }}
          />
        </Box>

        {/* Center Animation */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Lottie 
            animationData={musicNotesAnimation} 
            loop={true} 
            style={{ height: 120, width: 120 }}
          />
        </Box>

        {/* Right side Register button */}
        <Box>
          <Button 
            variant="contained"
            className="register-button"
            onClick={onRegisterClick}
            sx={{
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              borderRadius: '20px',
              px: 3,
              '&:hover': {
                backgroundColor: '#dfdfdf'
              }
            }}
          >
            Register Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
