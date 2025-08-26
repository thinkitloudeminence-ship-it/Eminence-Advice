import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Slide
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import './IdPassModal.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IdPassModal = ({ open, onClose, registrationData, registrationId, handleDownloadIdPass }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle className="modal-title">
        Your Registration is Complete!
      </DialogTitle>
      <DialogContent className="modal-content">
        <Typography variant="h6" gutterBottom>
          Registration Details:
        </Typography>
        <Typography variant="body1" paragraph>
          Name: {registrationData.fullName}<br />
          Registration ID: {registrationId}<br />
          Category: {registrationData.category}<br />
          Payment Status: Confirmed
        </Typography>
        
        <Typography variant="body1" paragraph>
          Your ID Pass is ready for download. Please bring a printed copy to the venue.
        </Typography>
      </DialogContent>
      <DialogActions className="modal-actions">
        <Button 
          onClick={onClose}
          className="cancel-button"
        >
          Close
        </Button>
        <Button 
          onClick={handleDownloadIdPass}
          variant="contained"
          startIcon={<DownloadIcon />}
          className="download-button"
        >
          Download ID Pass
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IdPassModal;