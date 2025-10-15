import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Helmet } from "react-helmet";

// Replace with your actual image
import heroImage from "../images/hero-student.jpg";
import StudyAbroadImage from '../images/study-abroad-campus.jpg';
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const primaryColor = "#FF6600"; // Updated primary color to orange

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Eminence Advice Global Education Experts</title>
        <meta
          name="description"
          content="Eminence Advice Global Education Experts offers personalized guidance for students aspiring to study abroad. With deep expertise in international education systems, they simplify admissions, visas, and career planning. Their dedicated team ensures a smooth academic journey from start to finish. Empowering futures through global opportunities is their core mission."
        />
        <meta
          name="keywords"
          content="Study Abroad Consultants, Overseas Education Experts, International Education Guidance, Student Visa Assistance, Global Education Opportunities, Career Planning for Abroad Studies, Admissions Support for Foreign Universities, Personalized Study Abroad Guidance, Education Consultancy Services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Eminence Advice Global Education Experts" />
        <meta property="og:description" content="Eminence Advice Global Education Experts offers personalized guidance for students aspiring to study abroad. With deep expertise in international education systems, they simplify admissions, visas, and career planning. Their dedicated team ensures a smooth academic journey from start to finish." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          py: 8,
          color: "black",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box flex={1}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Global Education <span style={{ color: primaryColor }}>Experts</span>
            </Typography>

            <Typography variant="h5" gutterBottom>
              Dream. Discover. Achieve.
            </Typography>

            <Typography variant="body1" paragraph>
              Step into a world of boundless opportunities with Eminence Advice —
              your trusted partners for studying abroad. Our expert counselors
              guide you at every step: from university selection to visa approval
              to travel readiness.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "white",
                color: "#000000",
                borderRadius: "10px",
                textTransform: "none",
                px: 3,
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Free Expert Consultation
            </Button>
          </Box>

          <Box flex={1}>
            <Box
              component="img"
              src={heroImage}
              alt="Graduation Student"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why Choose Eminence Advice?
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Unmatched success rate, global university network, and comprehensive support
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Card
              elevation={3}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 30%" },
                maxWidth: { md: "350px" },
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center", flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <PeopleIcon sx={{ fontSize: 50, color: primaryColor }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Expert Counseling
                </Typography>
                <Typography variant="body1">
                  One-on-one sessions with seasoned counselors to explore the
                  best-fit country, university, and course.
                </Typography>
              </CardContent>
            </Card>

            <Card
              elevation={3}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 30%" },
                maxWidth: { md: "350px" },
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center", flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <SupportAgentIcon sx={{ fontSize: 50, color: primaryColor }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  End-to-End Support
                </Typography>
                <Typography variant="body1">
                  From university selection to visa processing and pre-departure
                  orientation, we provide comprehensive support at every step of
                  your journey.
                </Typography>
              </CardContent>
            </Card>

            <Card
              elevation={3}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 30%" },
                maxWidth: { md: "350px" },
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center", flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <PublicIcon sx={{ fontSize: 50, color: primaryColor }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Global Network
                </Typography>
                <Typography variant="body1">
                  With partnerships with universities across 20+ countries, we
                  can help you find the perfect program that matches your
                  aspirations and goals.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: "#f9fbff" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Trusted by Thousands of Students
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Our track record speaks for itself. Join the thousands of students who have
              successfully started their international education journey with us.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
              gap: 4,
            }}
          >
            {[
              { value: "15+", label: "Years of Excellence", desc: "Decades of collective experience" },
              { value: "10,000+", label: "Success Stories", desc: "Students successfully placed worldwide" },
              { value: "99%", label: "Visa Success Rate", desc: "Unmatched approval rate" },
              { value: "500+", label: "Partner Universities", desc: "Global network of institutions" },
            ].map((stat, index) => (
              <Card key={index} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
                <Typography variant="h4" fontWeight="bold" color={primaryColor}>
                  {stat.value}
                </Typography>
                <Typography variant="h6">{stat.label}</Typography>
                <Typography variant="body2" color="textSecondary">{stat.desc}</Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* University Partnerships Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Top-tier University Partnerships Worldwide
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Access to hundreds of renowned international institutions
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
          >
            {[
              {
                country: "USA",
                flag: "🇺🇸",
                universities: "500+ Universities",
                description: "Top American universities and colleges",
                bgImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                country: "UK",
                flag: "🇬🇧",
                universities: "300+ Universities",
                description: "Prestigious British institutions",
                bgImage: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                country: "Canada",
                flag: "🇨🇦",
                universities: "200+ Universities",
                description: "World-class Canadian universities",
                bgImage: "https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                country: "Australia",
                flag: "🇦🇺",
                universities: "150+ Universities",
                description: "Leading Australian institutions",
                bgImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                country: "Germany",
                flag: "🇩🇪",
                universities: "100+ Universities",
                description: "Renowned German universities",
                bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                country: "Singapore",
                flag: "🇸🇬",
                universities: "50+ Universities",
                description: "Premier Asian education hub",
                bgImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
            ].map((item, index) => (
              <Card
                key={index}
                elevation={3}
                sx={{
                  borderRadius: 3,
                  height: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.4s ease-in-out",
                  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    "& .country-content": {
                      transform: "translateY(-10px)"
                    },
                    "& .country-flag": {
                      transform: "scale(1.2)"
                    }
                  },
                }}
              >
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(45deg, rgba(255,102,0,0.1) 0%, rgba(255,102,0,0.05) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    }
                  }}
                />

                <CardContent
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                    color: "white",
                  }}
                  className="country-content"
                >
                  {/* Country Flag */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "4rem",
                      mb: 2,
                      transition: "transform 0.3s ease",
                    }}
                    className="country-flag"
                  >
                    {item.flag}
                  </Typography>

                  {/* Country Name */}
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      background: "linear-gradient(45deg, #FFFFFF, #FFD700)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      mb: 1,
                    }}
                  >
                    {item.country}
                  </Typography>

                  {/* University Count */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: "#FF6600",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      mb: 1,
                    }}
                  >
                    {item.universities}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      maxWidth: "200px",
                      margin: "0 auto",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>

                {/* Hover Effect Border */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: "2px solid transparent",
                    borderRadius: 3,
                    background: "linear-gradient(45deg, #FF6600, #FFD700, #FF6600) border-box",
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    }
                  }}
                />
              </Card>
            ))}
          </Box>

          {/* Additional Stats Row */}

        </Container>
      </Box>

      {/* Test Prep & Services Section */}
      <Box sx={{ py: 8, backgroundColor: "#f9fbff" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          <Box flex={1}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Test Prep, Scholarships, Visa Support & More
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Comprehensive services to support your entire study abroad journey,
              from test preparation to visa approval and travel readiness.
            </Typography>

            <Box sx={{ mt: 2 }}>
              {[
                "IELTS, TOEFL, PTE, GRE, GMAT, SAT, ACT preparation",
                "Scholarships and financial aid guidance",
                "99% visa success rate with expert guidance",
                "Travel and forex support services",
              ].map((text, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      backgroundColor: primaryColor,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    ✓
                  </Box>
                  <Typography variant="body1">{text}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: primaryColor,
                color: "white",
                borderRadius: "8px",
                textTransform: "none",
                px: 3,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Explore Our Services
            </Button>
          </Box>

          <Box flex={1}>
            <Box
              component="img"
              src={StudyAbroadImage}
              alt="Study Abroad"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
