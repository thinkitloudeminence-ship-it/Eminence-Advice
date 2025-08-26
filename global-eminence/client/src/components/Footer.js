import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Facebook, LinkedIn, Instagram, Email, Phone, LocationOn } from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// ✅ Import logo
import Logo from "../images/EminenceAdvice logo.png";

// Animation for subtle floating effect
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff",
        color: "#0f172a",
        pt: 8,   
        pb: 3,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
        }
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-25px",
          left: "-25px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(0,0,0,0) 70%)",
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={10} textAlign={{ xs: "center", md: "left" }}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            {/* ✅ Logo */}
            <Box 
              sx={{ 
                mb: 2,
                animation: `${float} 6s ease-in-out infinite`,
                display: "inline-block"
              }}
            >
              <img
                src={Logo}
                alt="Eminence Advice Logo"
                style={{ width: "160px", height: "auto" }}
              />
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mt: 2 }}>
              {[
                { Icon: Facebook, color: "#1877F2", href: "https://www.facebook.com/eminenceadvice" },
                { Icon: LinkedIn, color: "#0077B5", href: "https://www.linkedin.com/company/eminence-advice-the-counselling-cafe/" },
                { Icon: Instagram, color: "#E4405F", href: "https://www.instagram.com/eminenceadvice/" },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    color: "#0f172a",
                    mx: 0.5,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: social.color,
                      color: "#fff",
                      transform: "translateY(-3px)",
                      boxShadow: `0 5px 15px ${social.color}40`,
                    },
                  }}
                >
                  <social.Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2, color: "#0f172a" }}
            >
              Quick Links
            </Typography>
            {["Home", "About Us", "Services", "Contact"].map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                underline="none"
                color="#0f172a"
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: "0.95rem",
                  opacity: 0.8,
                  "&:hover": { color: "#06b6d4", opacity: 1, pl: 1 },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2, color: "#0f172a" }}
            >
              Services
            </Typography>
            {["Study Abroad", "Test Preparation", "Visa Assistance", "Career Counseling"].map((service, i) => (
              <Link
                key={i}
                href={`#${service.toLowerCase().replace(" ", "-")}`}
                underline="none"
                color="#0f172a"
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: "0.95rem",
                  opacity: 0.8,
                  "&:hover": { color: "#8b5cf6", opacity: 1, pl: 1 },
                }}
              >
                {service}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2, color: "#0f172a" }}
            >
              Contact Info
            </Typography>
            
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
              <LocationOn sx={{ mr: 1, color: "#06b6d4", fontSize: "20px" }} />
              <Typography variant="body2" sx={{ opacity: 0.8, color: "#0f172a" }}>
                Indore, Madhya Pradesh, India
              </Typography>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1, color: "#3b82f6", fontSize: "20px" }} />
              <Link 
                href="mailto:hello@eminenceadvice.com" 
                underline="none" 
                color="#0f172a"
                sx={{ opacity: 0.8, "&:hover": { opacity: 1, color: "#3b82f6" } }}
              >
                hello@eminenceadvice.com
              </Link>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 1, color: "#8b5cf6", fontSize: "20px" }} />
              <Link 
                href="tel:+919826667279" 
                underline="none" 
                color="#0f172a"
                sx={{ opacity: 0.8, "&:hover": { opacity: 1, color: "#8b5cf6" } }}
              >
                +91 9826-667-279
              </Link>
            </Box>
            
            <Button
              variant="outlined"
              sx={{
                color: "#06b6d4",
                borderColor: "#06b6d4",
                borderRadius: "25px",
                px: 3,
                py: 0.7,
                fontSize: "0.85rem",
                fontWeight: "bold",
                "&:hover": { borderColor: "#3b82f6", color: "#3b82f6" },
              }}
            >
              Get Free Consultation
            </Button>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ my: 2, borderColor: "rgba(0,0,0,0.1)" }} />
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(0,0,0,0.7)", fontSize: "0.85rem", mb: { xs: 1, md: 0 } }}
          >
            © {new Date().getFullYear()} Eminence Advice. All rights reserved.
          </Typography>
          
          <Box>
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                underline="none"
                color="rgba(0,0,0,0.7)"
                sx={{ mx: 1, fontSize: "0.85rem", opacity: 0.7, "&:hover": { color: "#06b6d4", opacity: 1 } }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
