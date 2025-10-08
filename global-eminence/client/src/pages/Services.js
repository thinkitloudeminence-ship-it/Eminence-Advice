// import React from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const Services = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h3" component="h1" gutterBottom align="center">
//         Our Services
//       </Typography>

//       <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ mt: 4 }}>
//         For Students
//       </Typography>

//       <Grid container spacing={4} sx={{ my: 2 }}>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3} sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" component="h3" gutterBottom>
//                 University Selection
//               </Typography>
//               <Typography variant="body2">
//                 We help you identify the best universities and programs that match your 
//                 academic background, career goals, and personal preferences.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3} sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" component="h3" gutterBottom>
//                 Application Assistance
//               </Typography>
//               <Typography variant="body2">
//                 Complete support with application forms, document preparation, statement of 
//                 purpose, letters of recommendation, and meeting deadlines.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3} sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" component="h3" gutterBottom>
//                 Visa Guidance
//               </Typography>
//               <Typography variant="body2">
//                 Expert advice on visa requirements, documentation, interview preparation, 
//                 and follow-up to ensure successful visa approval.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3} sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" component="h3" gutterBottom>
//                 Pre-Departure Orientation
//               </Typography>
//               <Typography variant="body2">
//                 Comprehensive briefing on what to expect, how to prepare, cultural adjustment, 
//                 and settling in your new country.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ mt: 6 }}>
//         For Working Professionals
//       </Typography>

//       <Box sx={{ my: 2 }}>
//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6">Career Counseling</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Assessment of your skills, qualifications, and experience to identify suitable 
//               international career opportunities and pathways.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6">Job Search Assistance</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Access to our network of international employers, job portals, and recruitment 
//               agencies to find opportunities that match your profile.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6">Resume & Cover Letter Preparation</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Crafting professional resumes and cover letters tailored to international 
//               standards and specific job requirements.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6">Interview Preparation</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Mock interviews, common question practice, cultural briefing, and techniques 
//               to excel in international job interviews.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography variant="h6">Relocation Support</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Assistance with work permits, housing, banking, transportation, and other 
//               logistics for a smooth transition to your new country.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Container>
//   );
// };

// export default Services;



// import React from "react";
// import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
// import { Helmet } from "react-helmet";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
// import SchoolIcon from "@mui/icons-material/School";
// import TranslateIcon from "@mui/icons-material/Translate";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// export default function Services() {
//   return (
//     <>
//       <Helmet>
//         <title>Services | Eminence Advice Study Abroad Experts</title>
//         <meta
//           name="description"
//           content="Eminence Advice offers expert services for study abroad aspirants — from university selection, test prep, and visa guidance to scholarships and pre-departure support."
//         />
//       </Helmet>

//       <Box sx={{ py: 8, backgroundColor: "#fff" }}>
//         <Container maxWidth="lg">
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             Our <span style={{ color: "#FF6600" }}>Services</span>
//           </Typography>
//           <Typography variant="h6" color="textSecondary" paragraph>
//             End-to-end assistance for your international education dreams — because your journey deserves expert care.
//           </Typography>

//           <Grid container spacing={4} sx={{ mt: 2 }}>
//             {[
//               {
//                 icon: <AssignmentTurnedInIcon sx={{ fontSize: 50, color: "primary.main" }} />,
//                 title: "University & Course Selection",
//                 desc: "Personalized recommendations to match your academic goals, budget, and interests.",
//               },
//               {
//                 icon: <TranslateIcon sx={{ fontSize: 50, color: "primary.main" }} />,
//                 title: "Test Preparation",
//                 desc: "Expert-led IELTS, TOEFL, GRE, GMAT, and SAT training to help you achieve your target scores.",
//               },
//               {
//                 icon: <SchoolIcon sx={{ fontSize: 50, color: "primary.main" }} />,
//                 title: "Admission Assistance",
//                 desc: "End-to-end help with applications, SOPs, LORs, and documentation for successful university admissions.",
//               },
//               {
//                 icon: <SupportAgentIcon sx={{ fontSize: 50, color: "primary.main" }} />,
//                 title: "Visa & Pre-Departure",
//                 desc: "Comprehensive visa file preparation, interview guidance, and travel orientation.",
//               },
//               {
//                 icon: <FlightTakeoffIcon sx={{ fontSize: 50, color: "primary.main" }} />,
//                 title: "Post-Arrival Support",
//                 desc: "Accommodation guidance, airport pickup coordination, and onshore counseling support.",
//               },
//             ].map((service, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Card
//                   elevation={3}
//                   sx={{
//                     textAlign: "center",
//                     p: 4,
//                     borderRadius: 3,
//                     transition: "transform 0.3s",
//                     "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
//                   }}
//                 >
//                   <CardContent>
//                     {service.icon}
//                     <Typography variant="h6" fontWeight="bold" gutterBottom>
//                       {service.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {service.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }

import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { Helmet } from "react-helmet";
import SchoolIcon from "@mui/icons-material/School";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GTranslateIcon from "@mui/icons-material/GTranslate";

export default function Services() {
  const orangeColor = "#FF6600"; // define orange color

  return (
    <>
      <Helmet>
        <title>Services | Eminence Advice Global Education Experts</title>
        <meta
          name="description"
          content="Explore the wide range of study abroad services offered by Eminence Advice, including counseling, test preparation, visa assistance, scholarship support, and pre-departure guidance."
        />
      </Helmet>

      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Our Comprehensive Services
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="textSecondary"
            mb={6}
          >
            Your complete study abroad journey — expertly handled from start to finish.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
            }}
          >
            {[
              {
                icon: <SchoolIcon sx={{ fontSize: 50, color: orangeColor }} />,
                title: "Career & University Counseling",
                text: "Personalized guidance to help you choose the ideal course, university, and country aligned with your academic goals and budget.",
              },
              {
                icon: <GTranslateIcon sx={{ fontSize: 50, color: orangeColor }} />,
                title: "Test Preparation",
                text: "Expert training for IELTS, TOEFL, PTE, GRE, GMAT, and SAT — helping you achieve your target scores with confidence.",
              },
              {
                icon: <WorkspacePremiumIcon sx={{ fontSize: 50, color: orangeColor }} />,
                title: "Scholarship & Financial Aid Assistance",
                text: "We help you identify and apply for the best scholarships, grants, and financial support to make studying abroad affordable.",
              },
              {
                icon: <FlightTakeoffIcon sx={{ fontSize: 50, color: orangeColor }} />,
                title: "Visa & Pre-Departure Support",
                text: "From documentation to mock visa interviews and travel guidance — we ensure a smooth transition to your dream destination.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                elevation={3}
                sx={{
                  borderRadius: 3,
                  p: 3,
                  textAlign: "center",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  {service.icon}
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {service.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
