import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X"; // Twitter (X)

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff", // White background
        color: "#0f172a", // Dark text
        pt: 12,
        pb: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={12} textAlign={{ xs: "center", md: "left" }}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "bold",
                mb: 3,
                background: "linear-gradient(90deg,#3b82f6,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Eminence Advice
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 4, lineHeight: 1.8, maxWidth: "280px" }}
            >
              Your gateway to global opportunities.
            </Typography>
            <Box>
              {[Facebook, XIcon, LinkedIn, Instagram].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "#0f172a",
                    mx: 1,
                    transition: "0.3s",
                    "&:hover": {
                      color: "#3b82f6",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Quick Links
            </Typography>
            {["Home", "About Us", "Services", "Contact"].map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                underline="none"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 2,
                  fontSize: "1rem",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#06b6d4",
                    pl: 1,
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              📍 27/A, Vijay Nagar, Indore, Madhya Pradesh, India
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              ✉️ hello@eminenceadvice.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              ☎️ +91 731 123 4567
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider
          sx={{
            my: 5,
            borderColor: "rgba(0,0,0,0.1)",
          }}
        />
        <Box textAlign="center">
          <Typography
            variant="body2"
            sx={{
              color: "rgba(0,0,0,0.7)",
              fontSize: "0.9rem",
              letterSpacing: "0.3px",
            }}
          >
            © {new Date().getFullYear()} Eminence Advice. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
