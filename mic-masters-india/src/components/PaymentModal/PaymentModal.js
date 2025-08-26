import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  Slide,
  TextField,
  CircularProgress
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VerifiedIcon from '@mui/icons-material/Verified';
import './PaymentModal.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PaymentModal = ({ 
  open, 
  onClose, 
  paymentProof, 
  handlePaymentProofUpload, 
  handlePaymentSubmit,
  registrationData 
}) => {
  const [mobileNumber, setMobileNumber] = useState('9826667279');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isPaymentVerified, setIsPaymentVerified] = useState(false);
  const [verificationError, setVerificationError] = useState('');

  useEffect(() => {
    // Reset state when modal opens/closes
    if (open) {
      setMobileNumber('9826667279');
      setIsPaymentVerified(false);
      setVerificationError('');
    }
  }, [open]);

  const handleVerifyPayment = async () => {
    if (!paymentProof) {
      setVerificationError('Please upload payment proof first');
      return;
    }

    setIsVerifying(true);
    setVerificationError('');
    
    // Simulate payment verification process
    try {
      // In a real application, this would be an API call to your backend
      // to verify the payment with the payment gateway
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if the uploaded file is an image and has reasonable size
      const isImage = paymentProof.type.startsWith('image/');
      const isValidSize = paymentProof.size > 1000 && paymentProof.size < 5000000; // 1KB to 5MB
      
      if (isImage && isValidSize) {
        setIsPaymentVerified(true);
        setVerificationError('');
      } else {
        setVerificationError('Please upload a valid payment screenshot (JPG, PNG, etc.) between 1KB and 5MB');
        setIsPaymentVerified(false);
      }
    } catch (error) {
      setVerificationError('Error verifying payment. Please try again.');
      setIsPaymentVerified(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = () => {
    if (isPaymentVerified) {
      handlePaymentSubmit();
    }
  };

  // Generate QR code with fixed mobile number and amount
  const qrCodeData = `upi://pay?pa=micmastersindia@upi&pn=Mic%20Masters%20India&am=200&cu=INR&tn=Registration%20Fee&mam=9826667279`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrCodeData)}`;

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle className="modal-title">
        Complete Your Payment
      </DialogTitle>
      <DialogContent className="modal-content">
        <Typography variant="body1" paragraph align="center">
          Please pay the entry fee of ₹200 using the QR code below
        </Typography>

        <TextField
          fullWidth
          label="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          margin="normal"
          required
          className="text-field"
          helperText="Official Mic Masters India payment number"
          disabled
        />
        
        <Box 
          component="img" 
          src={qrCodeUrl}
          alt="QR Code for Payment" 
          className="qr-code"
        />
        
        <Typography variant="body2" paragraph align="center" className="payment-instructions">
          Scan this QR code with any UPI app to complete your payment
        </Typography>
        
        <Typography variant="body2" paragraph align="center" className="upload-text">
          After payment, please upload your payment screenshot or transaction ID
        </Typography>
        
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="payment-proof-upload"
          type="file"
          onChange={handlePaymentProofUpload}
        />
        <label htmlFor="payment-proof-upload">
          <Button
            variant="outlined"
            component="span"
            fullWidth
            startIcon={<CloudUploadIcon />}
            className="upload-button"
          >
            Upload Payment Proof
          </Button>
        </label>
        
        {paymentProof && (
          <Typography variant="body2" className="upload-success">
            Uploaded: {paymentProof.name}
          </Typography>
        )}

        {paymentProof && (
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleVerifyPayment}
              disabled={isVerifying || isPaymentVerified}
              startIcon={isPaymentVerified ? <VerifiedIcon /> : null}
              className="verify-button"
            >
              {isVerifying ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  Verifying Payment...
                </>
              ) : isPaymentVerified ? (
                'Payment Verified'
              ) : (
                'Verify Payment'
              )}
            </Button>

            {verificationError && (
              <Typography variant="body2" className="error-text">
                {verificationError}
              </Typography>
            )}

            {isPaymentVerified && (
              <Typography variant="body2" className="success-text">
                Payment successfully verified! You can now proceed.
              </Typography>
            )}
          </Box>
        )}
      </DialogContent>
      <DialogActions className="modal-actions">
        <Button 
          onClick={onClose}
          className="cancel-button"
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={!isPaymentVerified}
          variant="contained"
          className="submit-button"
        >
          Submit Payment
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentModal;