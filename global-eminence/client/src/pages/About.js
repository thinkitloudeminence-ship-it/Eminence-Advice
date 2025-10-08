import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
} from "@mui/material";
import { Helmet } from "react-helmet";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublicIcon from "@mui/icons-material/Public";
import AboutImage from "../images/about-team.jpg";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Eminence Advice Global Education Experts</title>
        <meta
          name="description"
          content="Learn more about Eminence Advice Global Education Experts — a trusted study abroad consultancy committed to helping students achieve international academic success through expert guidance and global partnerships."
        />
      </Helmet>

      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box flex={1}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#ec4c0cf1" }}
            >
              Empowering Global Education Dreams
            </Typography>
            <Typography variant="body1" paragraph>
              At <b>Eminence Advice</b>, we believe education has no boundaries. With over 15 years of experience in international education consulting, we’ve successfully guided thousands of students toward top universities across the USA, UK, Canada, Australia, Germany, and beyond.
            </Typography>
            <Typography variant="body1" paragraph>
              Our seasoned counselors and global network of university partners ensure every student receives personalized guidance, transparent processes, and unwavering support — from choosing the right course to achieving visa success.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#ffffffff",
                color: "#000000ff",
                textTransform: "none",
                borderRadius: "10px",
                px: 3,
                "&:hover": { backgroundColor: "#ffffffff" },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Meet Our Experts
            </Button>
          </Box>
          <Box flex={1}>
            <Box
              component="img"
              src={AboutImage}
              alt="Eminence Advice Team"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Who We Are */}
      <Box sx={{ py: 10, backgroundColor: "#f9fbff" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            textAlign="center"
            maxWidth="md"
            mx="auto"
            mb={6}
          >
            Founded by a passionate team of global education professionals, Eminence Advice has become one of India’s most trusted study abroad consultancies. Our expertise spans university admissions, visa support, career counseling, and post-arrival assistance — ensuring a complete journey from aspiration to achievement.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: { xs: "wrap", md: "nowrap" }, gap: 3 }}>
            {[
              {
                title: "Global Presence",
                text: "We collaborate with 500+ universities across 20+ countries, ensuring unmatched access to top-tier programs.",
              },
              {
                title: "Dedicated Counselors",
                text: "Our expert team provides personalized guidance, helping students align academic goals with career ambitions.",
              },
              {
                title: "Proven Track Record",
                text: "With a 99% visa success rate and thousands of successful placements, our results speak volumes.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                sx={{
                  flex: "1 1 30%",
                  minWidth: 250,
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#FF6600" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.text}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Core Values */}
      <Box sx={{ py: 10, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
            Our Core Values
          </Typography>
          <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={6}>
            The foundation that drives our success and defines who we are.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: { xs: "wrap", md: "nowrap" }, gap: 3 }}>
            {[
              { icon: <HandshakeIcon sx={{ fontSize: 55, color: "#FF6600", mb: 2 }} />, title: "Integrity", text: "We offer transparent and honest advice to help students make informed decisions." },
              { icon: <EmojiObjectsIcon sx={{ fontSize: 55, color: "#FF6600", mb: 2 }} />, title: "Innovation", text: "We embrace creativity and technology to make counseling smarter and simpler." },
              { icon: <FavoriteIcon sx={{ fontSize: 55, color: "#FF6600", mb: 2 }} />, title: "Empathy", text: "We treat every student’s dream as our own and provide guidance with genuine care." },
              { icon: <PublicIcon sx={{ fontSize: 55, color: "#FF6600", mb: 2 }} />, title: "Global Outlook", text: "We inspire students to think internationally and prepare for success anywhere in the world." },
            ].map((val, i) => (
              <Card
                key={i}
                sx={{
                  flex: "1 1 22%",
                  minWidth: 220,
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                {val.icon}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#FF6600" }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {val.text}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box sx={{ py: 14, textAlign: "center", backgroundColor: "#f9fbff" }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: 6,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#FF6600", mb: 3 }}
            >
              Start Your Global Journey with Us
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Ready to make your study abroad dream a reality? Our expert counselors guide you through every step — from selecting the perfect university to securing visa approval — ensuring your journey is smooth, confident, and successful.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                px: 6,
                py: 1.5,
                fontSize: "1.15rem",
                borderRadius: "12px",
                textTransform: "none",
                backgroundColor: "#FF6600",
                color: "#fff",
                "&:hover": { backgroundColor: "#ff8533" },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Book a Free Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
