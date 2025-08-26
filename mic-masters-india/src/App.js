import React, { useState } from 'react';
import { useTheme, useMediaQuery, Fab } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutContest from './components/AboutContest/AboutContest';
import AboutBrand from './components/AboutBrand/AboutBrand';
import Gallery from './components/Gallery/Gallery';
import RegistrationModal from './components/RegistrationModal/RegistrationModal';
import PaymentModal from './components/PaymentModal/PaymentModal';
import IdPassModal from './components/IdPassModal/IdPassModal';
import './App.css';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [idPassModalOpen, setIdPassModalOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    age: '',
    email: '',
    mobile: '',
    city: '',
    category: '',
  });
  const [paymentProof, setPaymentProof] = useState(null);
  const [registrationId, setRegistrationId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRegistrationId = 'MMI' + Date.now();
    setRegistrationId(newRegistrationId);
    setRegisterModalOpen(false);
    setPaymentModalOpen(true);
  };

  const handlePaymentProofUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPaymentProof(file);
    }
  };

  const handlePaymentSubmit = () => {
    setPaymentModalOpen(false);
    setIdPassModalOpen(true);
  };

  const handleDownloadIdPass = () => {
    alert('ID Pass downloaded successfully!');
    setIdPassModalOpen(false);
  };

  return (
    <div className="App">
      <Header onRegisterClick={() => setRegisterModalOpen(true)} />
      <Hero 
        onRegisterClick={() => setRegisterModalOpen(true)} 
        isMobile={isMobile} 
      />
      <AboutContest />
      <AboutBrand />
      <Gallery />
      
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Mic Masters India. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Register Button for Mobile */}
      {isMobile && (
        <Fab 
          color="primary" 
          aria-label="register" 
          className="fixed-register-button"
          onClick={() => setRegisterModalOpen(true)}
        >
          <PaymentIcon className="payment-icon" />
        </Fab>
      )}

      {/* Modals */}
      <RegistrationModal
        open={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        registrationData={registrationData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      
      <PaymentModal
        open={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        paymentProof={paymentProof}
        handlePaymentProofUpload={handlePaymentProofUpload}
        handlePaymentSubmit={handlePaymentSubmit}
      />
      
      <IdPassModal
        open={idPassModalOpen}
        onClose={() => setIdPassModalOpen(false)}
        registrationData={registrationData}
        registrationId={registrationId}
        handleDownloadIdPass={handleDownloadIdPass}
      />
    </div>
  );
}

export default App;