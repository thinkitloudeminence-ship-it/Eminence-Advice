import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Button,
  Slide
} from '@mui/material';
import './RegistrationModal.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RegistrationModal = ({ open, onClose, registrationData, handleInputChange, handleSubmit }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
    >
      <DialogTitle className="modal-title">
        Register for Mic Masters India
      </DialogTitle>
      <DialogContent className="modal-content">
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={registrationData.fullName}
            onChange={handleInputChange}
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={registrationData.age}
            onChange={handleInputChange}
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={registrationData.email}
            onChange={handleInputChange}
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={registrationData.mobile}
            onChange={handleInputChange}
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            value={registrationData.city}
            onChange={handleInputChange}
            margin="normal"
            required
            className="text-field"
          />
          <TextField
            fullWidth
            select
            label="Singing Category"
            name="category"
            value={registrationData.category}
            onChange={handleInputChange}
            margin="normal"
            required
            className="text-field"
          >
            <MenuItem value="Solo">Solo</MenuItem>
            <MenuItem value="Duet">Duet</MenuItem>
            <MenuItem value="Rap">Rap</MenuItem>
            <MenuItem value="Group">Group (3+ members)</MenuItem>
          </TextField>
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            className="submit-button"
          >
            Proceed to Payment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;