import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { Helmet } from "react-helmet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  const orangeColor = "#FF6600";

  return (
    <>
      <Helmet>
        <title>Contact | Eminence Advice Global Education Experts</title>
        <meta
          name="description"
          content="Get in touch with Eminence Advice Global Education Experts for personalized study abroad guidance, admissions support, and visa assistance. Connect today to start your international education journey."
        />
      </Helmet>

      <Box sx={{ py: 10, backgroundColor: "#fff7f0" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: orangeColor }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="textSecondary"
            mb={8}
          >
            Have questions? Our counselors are ready to assist you.
          </Typography>

          <Grid container spacing={6}>
            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Paper
                sx={{
                  p: 5,
                  width: "1100px",
                  borderRadius: 4,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  borderTop: `4px solid ${orangeColor}`,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: orangeColor }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationOnIcon sx={{ color: orangeColor, mr: 2 }} />
                  <Typography variant="body1">
                    Eminence Advice Pvt. Ltd.<br />
                    2nd Floor, Green Plaza, Sector 42,<br />
                    Gurugram, Haryana, India
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <PhoneIcon sx={{ color: orangeColor, mr: 2 }} />
                  <Typography variant="body1">+91 98765 43210</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon sx={{ color: orangeColor, mr: 2 }} />
                  <Typography variant="body1">
                    info@eminenceadvice.com
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper
                sx={{
                  p: 5,
                  borderRadius: 4,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  borderTop: `4px solid ${orangeColor}`,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: orangeColor }}
                >
                  Send Us a Message
                </Typography>

                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="normal"
                  sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  margin="normal"
                  multiline
                  rows={4}
                  sx={{ "& label.Mui-focused": { color: orangeColor }, "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: orangeColor } }}
                />

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    textTransform: "none",
                    borderRadius: "8px",
                    backgroundColor: orangeColor,
                    "&:hover": { backgroundColor: "#e65c00" },
                    px: 4,
                  }}
                >
                  Submit Message
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
