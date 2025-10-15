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

// import React from "react";
// import { Box, Container, Typography, Card, CardContent } from "@mui/material";
// import { Helmet } from "react-helmet";
// import SchoolIcon from "@mui/icons-material/School";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import GTranslateIcon from "@mui/icons-material/GTranslate";

// export default function Services() {
//   const orangeColor = "#FF6600"; // define orange color

//   return (
//     <>
//       <Helmet>
//         <title>Services | Eminence Advice Global Education Experts</title>
//         <meta
//           name="description"
//           content="Explore the wide range of study abroad services offered by Eminence Advice, including counseling, test preparation, visa assistance, scholarship support, and pre-departure guidance."
//         />
//       </Helmet>

//       <Box sx={{ py: 8, backgroundColor: "#fff" }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h3"
//             textAlign="center"
//             fontWeight="bold"
//             gutterBottom
//           >
//             Our Comprehensive Services
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             textAlign="center"
//             color="textSecondary"
//             mb={6}
//           >
//             Your complete study abroad journey — expertly handled from start to finish.
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//               gap: 4,
//             }}
//           >
//             {[
//               {
//                 icon: <SchoolIcon sx={{ fontSize: 50, color: orangeColor }} />,
//                 title: "Career & University Counseling",
//                 text: "Personalized guidance to help you choose the ideal course, university, and country aligned with your academic goals and budget.",
//               },
//               {
//                 icon: <GTranslateIcon sx={{ fontSize: 50, color: orangeColor }} />,
//                 title: "Test Preparation",
//                 text: "Expert training for IELTS, TOEFL, PTE, GRE, GMAT, and SAT — helping you achieve your target scores with confidence.",
//               },
//               {
//                 icon: <WorkspacePremiumIcon sx={{ fontSize: 50, color: orangeColor }} />,
//                 title: "Scholarship & Financial Aid Assistance",
//                 text: "We help you identify and apply for the best scholarships, grants, and financial support to make studying abroad affordable.",
//               },
//               {
//                 icon: <FlightTakeoffIcon sx={{ fontSize: 50, color: orangeColor }} />,
//                 title: "Visa & Pre-Departure Support",
//                 text: "From documentation to mock visa interviews and travel guidance — we ensure a smooth transition to your dream destination.",
//               },
//             ].map((service, index) => (
//               <Card
//                 key={index}
//                 elevation={3}
//                 sx={{
//                   borderRadius: 3,
//                   p: 3,
//                   textAlign: "center",
//                   transition: "transform 0.3s",
//                   "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
//                 }}
//               >
//                 <CardContent>
//                   {service.icon}
//                   <Typography variant="h5" fontWeight="bold" gutterBottom>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body1" color="textSecondary">
//                     {service.text}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }


// import React from "react";
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Card, 
//   CardContent, 
//   Button, 
//   Grid,
//   Chip,
//   alpha 
// } from "@mui/material";
// import { Helmet } from "react-helmet";
// import SchoolIcon from "@mui/icons-material/School";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import GTranslateIcon from "@mui/icons-material/GTranslate";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ContactSupportIcon from "@mui/icons-material/ContactSupport";
// import GroupsIcon from "@mui/icons-material/Groups";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// export default function Services() {
//   const orangeColor = "#FF6600";
//   const gradient = `linear-gradient(135deg, ${orangeColor} 0%, #FF8C42 100%)`;

//   const services = [
//     {
//       icon: <SchoolIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Career & University Counseling",
//       text: "Personalized guidance to help you choose the ideal course, university, and country aligned with your academic goals and budget.",
//       features: ["Profile Assessment", "University Shortlisting", "Career Pathway Planning", "Budget Planning"]
//     },
//     {
//       icon: <GTranslateIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Test Preparation",
//       text: "Expert training for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with customized study plans and mock tests.",
//       features: ["Customized Study Plans", "Mock Tests", "Score Improvement", "Expert Trainers"]
//     },
//     {
//       icon: <AssignmentIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Application Processing",
//       text: "End-to-end support for university applications including document preparation and submission tracking.",
//       features: ["Document Preparation", "Essay Editing", "Application Tracking", "Deadline Management"]
//     },
//     {
//       icon: <WorkspacePremiumIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Scholarship Assistance",
//       text: "Identify and apply for the best scholarships, grants, and financial support to make studying abroad affordable.",
//       features: ["Scholarship Search", "Application Support", "Financial Planning", "Grant Assistance"]
//     },
//     {
//       icon: <DescriptionIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Documentation & SOP",
//       text: "Professional help with Statement of Purpose, Letters of Recommendation, and all required documentation.",
//       features: ["SOP Writing", "LOR Preparation", "Document Review", "Portfolio Building"]
//     },
//     {
//       icon: <FlightTakeoffIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Visa & Pre-Departure",
//       text: "Comprehensive visa support and pre-departure guidance for a smooth transition to your dream destination.",
//       features: ["Visa Documentation", "Mock Interviews", "Travel Guidance", "Accommodation Help"]
//     },
//     {
//       icon: <ContactSupportIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Post-Arrival Assistance",
//       text: "Continuous support after you reach your destination including airport pickup and local orientation.",
//       features: ["Airport Pickup", "Accommodation", "Local Setup", "Cultural Orientation"]
//     },
//     {
//       icon: <GroupsIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Student Mentorship",
//       text: "Connect with current international students and alumni for firsthand insights and guidance.",
//       features: ["Alumni Network", "Peer Mentoring", "Cultural Integration", "Career Guidance"]
//     },
//     {
//       icon: <LibraryBooksIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Course & Country Research",
//       text: "In-depth research on courses, universities, and countries to help you make informed decisions.",
//       features: ["Market Research", "University Analysis", "Course Comparison", "Employment Trends"]
//     },
//     {
//       icon: <ApartmentIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "University Partnerships",
//       text: "Direct access to our partner universities worldwide with faster processing and exclusive benefits.",
//       features: ["Direct Admissions", "Fast-track Processing", "Exclusive Offers", "Priority Consideration"]
//     },
//     {
//       icon: <ConnectWithoutContactIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "Interview Preparation",
//       text: "Comprehensive coaching for university and scholarship interviews with mock sessions.",
//       features: ["Mock Interviews", "Feedback Sessions", "Confidence Building", "Body Language Tips"]
//     },
//     {
//       icon: <SupportAgentIcon sx={{ fontSize: 48, color: orangeColor }} />,
//       title: "24/7 Student Support",
//       text: "Round-the-clock support for all your queries throughout your study abroad journey.",
//       features: ["Dedicated Counselor", "Emergency Support", "Quick Response", "Multi-language Support"]
//     }
//   ];

//   const processSteps = [
//     {
//       step: "01",
//       title: "Initial Consultation",
//       description: "Free profile assessment and career counseling session",
//       icon: "🎯"
//     },
//     {
//       step: "02",
//       title: "University Shortlisting",
//       description: "Personalized university recommendations based on your profile",
//       icon: "🏫"
//     },
//     {
//       step: "03",
//       title: "Test Preparation",
//       description: "Customized coaching for required entrance exams",
//       icon: "📚"
//     },
//     {
//       step: "04",
//       title: "Application & Documentation",
//       description: "Complete application processing and document preparation",
//       icon: "📝"
//     },
//     {
//       step: "05",
//       title: "Admission & Visa",
//       description: "Admission processing and visa application support",
//       icon: "✈️"
//     },
//     {
//       step: "06",
//       title: "Pre-Departure & Beyond",
//       description: "Travel preparation and post-arrival assistance",
//       icon: "🌍"
//     }
//   ];

//   const stats = [
//     { number: "10,000+", label: "Students Guided" },
//     { number: "500+", label: "University Partners" },
//     { number: "95%", label: "Visa Success Rate" },
//     { number: "50+", label: "Countries Covered" }
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Comprehensive Study Abroad Services | Eminence Advice Global Education Experts</title>
//         <meta
//           name="description"
//           content="Explore our complete range of study abroad services including university counseling, test preparation, visa assistance, scholarship support, application processing, and post-arrival guidance."
//         />
//       </Helmet>

//       {/* Hero Section */}
//       <Box sx={{ 
//         py: { xs: 6, md: 10 },
//         background: gradient,
//         color: 'white',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={4}>
//             <Chip 
//               label="Comprehensive Solutions" 
//               sx={{ 
//                 backgroundColor: 'rgba(255,255,255,0.2)', 
//                 color: 'white', 
//                 mb: 3,
//                 px: 2,
//                 py: 1
//               }} 
//             />
//             <Typography
//               variant="h1"
//               fontWeight="bold"
//               gutterBottom
//               sx={{ 
//                 fontSize: { xs: '2.5rem', md: '3.75rem' },
//                 lineHeight: 1.2,
//                 mb: 3
//               }}
//             >
//               Your Complete Study Abroad
//               <Box component="span" sx={{ display: 'block', color: '#FFE4B5' }}>
//                 Journey Starts Here
//               </Box>
//             </Typography>
//             <Typography
//               variant="h5"
//               sx={{ 
//                 maxWidth: '800px', 
//                 margin: '0 auto', 
//                 mb: 4,
//                 opacity: 0.9,
//                 fontWeight: 400
//               }}
//             >
//               End-to-end expert guidance from university selection to post-arrival support. 
//               Your dream education abroad is just a consultation away.
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <Button 
//                 variant="contained" 
//                 size="large"
//                 sx={{
//                   backgroundColor: 'white',
//                   color: orangeColor,
//                   '&:hover': { 
//                     backgroundColor: '#f5f5f5',
//                     transform: 'translateY(-2px)'
//                   },
//                   px: 4,
//                   py: 1.5,
//                   fontSize: '1.1rem',
//                   fontWeight: 'bold',
//                   borderRadius: 3,
//                   transition: 'all 0.3s ease'
//                 }}
//                 endIcon={<ArrowForwardIcon />}
//               >
//                 Book Free Consultation
//               </Button>
//               <Button 
//                 variant="outlined" 
//                 size="large"
//                 sx={{
//                   borderColor: 'white',
//                   color: 'white',
//                   '&:hover': { 
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                     borderColor: 'white'
//                   },
//                   px: 4,
//                   py: 1.5,
//                   fontSize: '1.1rem',
//                   borderRadius: 3,
//                   transition: 'all 0.3s ease'
//                 }}
//                 startIcon={<PlayArrowIcon />}
//               >
//                 Watch Demo
//               </Button>
//             </Box>
//           </Box>

//           {/* Stats Section */}
//           <Box sx={{ mt: 8 }}>
//             <Grid container spacing={3} justifyContent="center">
//               {stats.map((stat, index) => (
//                 <Grid item xs={6} sm={3} key={index}>
//                   <Box textAlign="center">
//                     <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
//                       {stat.number}
//                     </Typography>
//                     <Typography variant="body1" sx={{ opacity: 0.9 }}>
//                       {stat.label}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Container>
//       </Box>

//       {/* Services Grid Section */}
//       <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fafafa" }}>
//         <Container maxWidth="xl">
//           <Box textAlign="center" mb={8}>
//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{ 
//                 fontSize: { xs: '2.25rem', md: '3rem' },
//                 color: '#333'
//               }}
//             >
//               Comprehensive Study Abroad Solutions
//             </Typography>
//             <Typography
//               variant="h6"
//               color="textSecondary"
//               sx={{ 
//                 maxWidth: '800px', 
//                 margin: '0 auto',
//                 fontSize: { xs: '1.1rem', md: '1.25rem' }
//               }}
//             >
//               From dream to destination - we provide expert support at every step of your international education journey
//             </Typography>
//           </Box>

//           <Grid container spacing={3}>
//             {services.map((service, index) => (
//               <Grid item xs={12} sm={6} lg={4} key={index}>
//                 <Card
//                   elevation={1}
//                   sx={{
//                     borderRadius: 4,
//                     p: 3,
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: "all 0.3s ease-in-out",
//                     border: '1px solid #e0e0e0',
//                     backgroundColor: 'white',
//                     "&:hover": { 
//                       transform: "translateY(-8px)", 
//                       boxShadow: `0 20px 40px ${alpha(orangeColor, 0.15)}`,
//                       borderColor: orangeColor
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     flexGrow: 1, 
//                     textAlign: "left",
//                     p: 0,
//                     '&:last-child': { pb: 0 }
//                   }}>
//                     <Box sx={{ 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       mb: 3,
//                       padding: 2,
//                       backgroundColor: alpha(orangeColor, 0.05),
//                       borderRadius: 3,
//                       width: 'fit-content'
//                     }}>
//                       {service.icon}
//                     </Box>

//                     <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 2, color: '#333' }}>
//                       {service.title}
//                     </Typography>

//                     <Typography variant="body1" color="textSecondary" sx={{ mb: 3, lineHeight: 1.6 }}>
//                       {service.text}
//                     </Typography>

//                     <Box>
//                       {service.features.map((feature, idx) => (
//                         <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
//                           <CheckCircleIcon sx={{ fontSize: 20, color: orangeColor, mr: 2 }} />
//                           <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
//                             {feature}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Process Section */}
//       <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={8}>
//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{ 
//                 fontSize: { xs: '2.25rem', md: '3rem' },
//                 color: '#333'
//               }}
//             >
//               Our 6-Step Success Blueprint
//             </Typography>
//             <Typography
//               variant="h6"
//               color="textSecondary"
//               sx={{ 
//                 maxWidth: '800px', 
//                 margin: '0 auto',
//                 fontSize: { xs: '1.1rem', md: '1.25rem' }
//               }}
//             >
//               A proven, structured approach that has helped thousands of students achieve their study abroad dreams
//             </Typography>
//           </Box>

//           <Grid container spacing={3}>
//             {processSteps.map((step, index) => (
//               <Grid item xs={12} md={6} lg={4} key={index}>
//                 <Box
//                   sx={{
//                     textAlign: 'center',
//                     p: 4,
//                     borderRadius: 4,
//                     backgroundColor: index % 2 === 0 ? '#fff7f0' : '#f8f9fa',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     transition: 'all 0.3s ease',
//                     border: `2px solid ${index % 2 === 0 ? alpha(orangeColor, 0.1) : 'transparent'}`,
//                     '&:hover': {
//                       transform: 'translateY(-5px)',
//                       boxShadow: 3,
//                     }
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, width: '100%' }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         borderRadius: '50%',
//                         backgroundColor: orangeColor,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: 'white',
//                         fontSize: '1.25rem',
//                         fontWeight: 'bold',
//                         mr: 2
//                       }}
//                     >
//                       {step.step}
//                     </Box>
//                     <Typography variant="h4" sx={{ fontSize: '2.5rem' }}>
//                       {step.icon}
//                     </Typography>
//                   </Box>

//                   <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 2, color: '#333' }}>
//                     {step.title}
//                   </Typography>
//                   <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.6 }}>
//                     {step.description}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box sx={{ 
//         py: { xs: 6, md: 10 }, 
//         backgroundColor: '#333',
//         backgroundImage: 'linear-gradient(135deg, #333 0%, #555 100%)',
//         color: 'white'
//       }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center">
//             <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2.25rem', md: '3rem' } }}>
//               Ready to Begin Your Journey?
//             </Typography>
//             <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
//               Join thousands of successful students who achieved their study abroad dreams with our expert guidance
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   backgroundColor: orangeColor,
//                   color: 'white',
//                   '&:hover': { 
//                     backgroundColor: '#e55a00',
//                     transform: 'translateY(-2px)'
//                   },
//                   px: 4,
//                   py: 1.5,
//                   fontSize: '1.1rem',
//                   fontWeight: 'bold',
//                   borderRadius: 3,
//                   transition: 'all 0.3s ease'
//                 }}
//                 endIcon={<ArrowForwardIcon />}
//               >
//                 Start Your Application
//               </Button>
//               <Button
//                 variant="outlined"
//                 size="large"
//                 sx={{
//                   borderColor: 'white',
//                   color: 'white',
//                   '&:hover': { 
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                     borderColor: 'white'
//                   },
//                   px: 4,
//                   py: 1.5,
//                   fontSize: '1.1rem',
//                   borderRadius: 3,
//                   transition: 'all 0.3s ease'
//                 }}
//               >
//                 Download Brochure
//               </Button>
//             </Box>
//             <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
//               ⚡ Get instant response within 2 hours
//             </Typography>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }


// import React from "react";
// import { Box, Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";
// import { Helmet } from "react-helmet";
// import SchoolIcon from "@mui/icons-material/School";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import GTranslateIcon from "@mui/icons-material/GTranslate";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ContactSupportIcon from "@mui/icons-material/ContactSupport";
// import GroupsIcon from "@mui/icons-material/Groups";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import ApartmentIcon from "@mui/icons-material/Apartment";
// import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// export default function Services() {
//   const orangeColor = "#FF6600";
//   const whiteColor = "#ffffffff"; // define orange color

//   const services = [
//     {
//       icon: <SchoolIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Career & University Counseling",
//       text: "Personalized guidance to help you choose the ideal course, university, and country aligned with your academic goals and budget. Our experts analyze your profile to recommend the best-fit options.",
//       features: ["Profile Assessment", "University Shortlisting", "Career Pathway Planning"]
//     },
//     {
//       icon: <GTranslateIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Test Preparation",
//       text: "Expert training for IELTS, TOEFL, PTE, GRE, GMAT, and SAT — helping you achieve your target scores with confidence through customized study plans and mock tests.",
//       features: ["Customized Study Plans", "Mock Tests", "Score Improvement Guarantee"]
//     },
//     {
//       icon: <AssignmentIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Application Processing",
//       text: "End-to-end support for university applications including document preparation, essay editing, recommendation letters, and submission tracking.",
//       features: ["Document Preparation", "Essay Editing", "Application Tracking"]
//     },
//     {
//       icon: <WorkspacePremiumIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Scholarship & Financial Aid Assistance",
//       text: "We help you identify and apply for the best scholarships, grants, and financial support to make studying abroad affordable. Maximize your funding opportunities.",
//       features: ["Scholarship Search", "Application Support", "Financial Planning"]
//     },
//     {
//       icon: <DescriptionIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Documentation & SOP Assistance",
//       text: "Professional help with Statement of Purpose (SOP), Letters of Recommendation (LOR), and all required documentation to make your application stand out.",
//       features: ["SOP Writing", "LOR Preparation", "Document Review"]
//     },
//     {
//       icon: <FlightTakeoffIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Visa & Pre-Departure Support",
//       text: "From documentation to mock visa interviews and travel guidance — we ensure a smooth transition to your dream destination with comprehensive pre-departure briefings.",
//       features: ["Visa Documentation", "Mock Interviews", "Travel Guidance"]
//     },
//     {
//       icon: <ContactSupportIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Post-Arrival Assistance",
//       text: "Continuous support after you reach your destination including airport pickup, accommodation help, bank account setup, and local orientation.",
//       features: ["Airport Pickup", "Accommodation", "Local Setup"]
//     },
//     {
//       icon: <GroupsIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Student Mentorship Program",
//       text: "Connect with current international students and alumni for firsthand insights and guidance about university life and cultural adaptation.",
//       features: ["Alumni Network", "Peer Mentoring", "Cultural Integration"]
//     },
//     {
//       icon: <LibraryBooksIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Course & Country Research",
//       text: "In-depth research on courses, universities, and countries to help you make informed decisions about your study abroad journey.",
//       features: ["Market Research", "University Analysis", "Course Comparison"]
//     },
//     {
//       icon: <ApartmentIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "University Partnership Access",
//       text: "Direct access to our partner universities worldwide with faster processing times and exclusive application benefits.",
//       features: ["Direct Admissions", "Fast-track Processing", "Exclusive Offers"]
//     },
//     {
//       icon: <ConnectWithoutContactIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "Interview Preparation",
//       text: "Comprehensive coaching for university and scholarship interviews with mock sessions and personalized feedback.",
//       features: ["Mock Interviews", "Feedback Sessions", "Confidence Building"]
//     },
//     {
//       icon: <SupportAgentIcon sx={{ fontSize: 50, color: orangeColor }} />,
//       title: "24/7 Student Support",
//       text: "Round-the-clock support for all your queries and concerns throughout your study abroad journey.",
//       features: ["Dedicated Counselor", "Emergency Support", "Quick Response"]
//     }
//   ];

//   const processSteps = [
//     {
//       step: "01",
//       title: "Initial Consultation",
//       description: "Free profile assessment and career counseling session"
//     },
//     {
//       step: "02",
//       title: "University Shortlisting",
//       description: "Personalized university recommendations based on your profile"
//     },
//     {
//       step: "03",
//       title: "Test Preparation",
//       description: "Customized coaching for required entrance exams"
//     },
//     {
//       step: "04",
//       title: "Application & Documentation",
//       description: "Complete application processing and document preparation"
//     },
//     {
//       step: "05",
//       title: "Admission & Visa",
//       description: "Admission processing and visa application support"
//     },
//     {
//       step: "06",
//       title: "Pre-Departure & Beyond",
//       description: "Travel preparation and post-arrival assistance"
//     }
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Comprehensive Study Abroad Services | Eminence Advice Global Education Experts</title>
//         <meta
//           name="description"
//           content="Explore our complete range of study abroad services including university counseling, test preparation, visa assistance, scholarship support, application processing, and post-arrival guidance."
//         />
//       </Helmet>

//       {/* Hero Section */}
//       <Box sx={{ py: 8, backgroundColor: "#fff7f0" }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={6}>
//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 color: orangeColor,
//                 fontSize: { xs: '2.5rem', md: '3.5rem' }
//               }}
//             >
//               Our Comprehensive Services
//             </Typography>
//             <Typography
//               variant="h5"
//               textAlign="center"
//               color="textSecondary"
//               sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}
//             >
//               Your complete study abroad journey — expertly handled from start to finish with our end-to-end solutions.
//             </Typography>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: orangeColor,
//                 '&:hover': { backgroundColor: '#e55a00' },
//                 px: 4,
//                 py: 1.5,
//                 fontSize: '1.1rem'
//               }}
//             >
//               Book Free Consultation
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {/* Services Grid Section */}
//       <Box sx={{ py: 8, backgroundColor: "#fff" }}>
//         <Container maxWidth="xl">
//           <Typography
//             variant="h3"
//             textAlign="center"
//             fontWeight="bold"
//             gutterBottom
//             sx={{ mb: 2 }}
//           >
//             End-to-End Study Abroad Solutions
//           </Typography>
//           <Typography
//             variant="h6"
//             textAlign="center"
//             color="textSecondary"
//             sx={{ maxWidth: '800px', margin: '0 auto', mb: 6 }}
//           >
//             We provide comprehensive support at every step of your international education journey
//           </Typography>

//           <Box
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 4,
//               justifyContent: 'center'
//             }}
//           >
//             {services.map((service, index) => (
//               <Card
//                 key={index}
//                 elevation={3}
//                 sx={{
//                   borderRadius: 3,
//                   p: 3,
//                   width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 22px)' },
//                   maxWidth: { md: 400 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: "transform 0.3s, box-shadow 0.3s",
//                   "&:hover": {
//                     transform: "translateY(-8px)",
//                     boxShadow: `0 12px 25px ${orangeColor}25`
//                   },
//                 }}
//               >
//                 <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
//                   {service.icon}
//                   <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
//                     {service.text}
//                   </Typography>
//                   <Box sx={{ textAlign: 'left' }}>
//                     {service.features.map((feature, idx) => (
//                       <Typography key={idx} variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                         <AutoAwesomeIcon sx={{ fontSize: 16, color: orangeColor, mr: 1 }} />
//                         {feature}
//                       </Typography>
//                     ))}
//                   </Box>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* Process Section */}
//       <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
//         <Container maxWidth="xl">
//           <Typography
//             variant="h3"
//             textAlign="center"
//             fontWeight="bold"
//             gutterBottom
//           >
//             Our 6-Step Success Process
//           </Typography>
//           <Typography
//             variant="h6"
//             textAlign="center"
//             color="textSecondary"
//             sx={{ maxWidth: '800px', margin: '0 auto', mb: 6 }}
//           >
//             A structured approach to ensure your study abroad success
//           </Typography>

//           <Box
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 4,
//               justifyContent: 'center'
//             }}
//           >
//             {processSteps.map((step, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   textAlign: 'center',
//                   p: 3,
//                   borderRadius: 3,
//                   backgroundColor: 'white',
//                   boxShadow: 2,
//                   width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 22px)' },
//                   maxWidth: { md: 400 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center'
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 60,
//                     height: 60,
//                     borderRadius: '50%',
//                     backgroundColor: orangeColor,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'white',
//                     fontSize: '1.5rem',
//                     fontWeight: 'bold',
//                     mb: 2
//                   }}
//                 >
//                   {step.step}
//                 </Box>
//                 <Typography variant="h5" fontWeight="bold" gutterBottom>
//                   {step.title}
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary">
//                   {step.description}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box sx={{ py: 8, backgroundColor: whiteColor }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" color="#f38303ff">
//             <Typography variant="h3" fontWeight="bold" gutterBottom>
//               Ready to Start Your Journey?
//             </Typography>
//             <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
//               Get free personalized counseling and take the first step towards your dream education
//             </Typography>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: 'white',
//                 color: orangeColor,
//                 '&:hover': { backgroundColor: '#f5f5f5' },
//                 px: 4,
//                 py: 1.5,
//                 fontSize: '1.1rem',
//                 fontWeight: 'bold'
//               }}
//             >
//               Get Started Today
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }


import React from "react";
import { Box, Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import GroupsIcon from "@mui/icons-material/Groups";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Services() {
  const orangeColor = "#FF6600";
  const whiteColor = "#ffffffff";
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle navigation to Contact page
  const handleContactRedirect = () => {
    navigate("/contact");
  };

  const services = [
    {
      icon: <SchoolIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Career & University Counseling",
      text: "Personalized guidance to help you choose the ideal course, university, and country aligned with your academic goals and budget. Our experts analyze your profile to recommend the best-fit options.",
      features: ["Profile Assessment", "University Shortlisting", "Career Pathway Planning"]
    },
    {
      icon: <GTranslateIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Test Preparation",
      text: "Expert training for IELTS, TOEFL, PTE, GRE, GMAT, and SAT — helping you achieve your target scores with confidence through customized study plans and mock tests.",
      features: ["Customized Study Plans", "Mock Tests", "Score Improvement Guarantee"]
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Application Processing",
      text: "End-to-end support for university applications including document preparation, essay editing, recommendation letters, and submission tracking.",
      features: ["Document Preparation", "Essay Editing", "Application Tracking"]
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Scholarship & Financial Aid Assistance",
      text: "We help you identify and apply for the best scholarships, grants, and financial support to make studying abroad affordable. Maximize your funding opportunities.",
      features: ["Scholarship Search", "Application Support", "Financial Planning"]
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Documentation & SOP Assistance",
      text: "Professional help with Statement of Purpose (SOP), Letters of Recommendation (LOR), and all required documentation to make your application stand out.",
      features: ["SOP Writing", "LOR Preparation", "Document Review"]
    },
    {
      icon: <ConnectWithoutContactIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Interview Preparation",
      text: "Comprehensive coaching for university and scholarship interviews with mock sessions and personalized feedback.",
      features: ["Mock Interviews", "Feedback Sessions", "Confidence Building"]
    },
    {
      icon: <LibraryBooksIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "Course & Country Research",
      text: "In-depth research on courses, universities, and countries to help you make informed decisions about your study abroad journey.",
      features: ["Market Research", "University Analysis", "Course Comparison"]
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 50, color: orangeColor }} />,
      title: "24/7 Student Support",
      text: "Round-the-clock support for all your queries and concerns throughout your study abroad journey.",
      features: ["Dedicated Counselor", "Emergency Support", "Quick Response"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free profile assessment and career counseling session"
    },
    {
      step: "02",
      title: "University Shortlisting",
      description: "Personalized university recommendations based on your profile"
    },
    {
      step: "03",
      title: "Test Preparation",
      description: "Customized coaching for required entrance exams"
    },
    {
      step: "04",
      title: "Application & Documentation",
      description: "Complete application processing and document preparation"
    },
    {
      step: "05",
      title: "Admission & Visa",
      description: "Admission processing and visa application support"
    },
    {
      step: "06",
      title: "Pre-Departure & Beyond",
      description: "Travel preparation and post-arrival assistance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive Study Abroad Services | Eminence Advice Global Education Experts</title>
        <meta
          name="description"
          content="Explore our complete range of study abroad services including university counseling, test preparation, visa assistance, scholarship support, application processing, and post-arrival guidance."
        />
      </Helmet>

      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff7f0" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: orangeColor,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Our Comprehensive Services
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="textSecondary"
              sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}
            >
              Your complete study abroad journey — expertly handled from start to finish with our end-to-end solutions.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleContactRedirect} // Added onClick handler
              sx={{
                backgroundColor: orangeColor,
                '&:hover': { backgroundColor: '#e55a00' },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Book Free Consultation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Grid Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2 }}
          >
            End-to-End Study Abroad Solutions
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="textSecondary"
            sx={{ maxWidth: '800px', margin: '0 auto', mb: 6 }}
          >
            We provide comprehensive support at every step of your international education journey
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center'
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                elevation={3}
                sx={{
                  borderRadius: 3,
                  p: 2,
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 12px)',
                    md: 'calc(25% - 16px)' // 4 cards per row on medium+ screens
                  },
                  maxWidth: { md: 280 }, // Reduced max width
                  height: 320, // Fixed height for consistency
                  display: 'flex',
                  flexDirection: 'column',
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: `0 8px 20px ${orangeColor}20`
                  },
                }}
              >
                <CardContent sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  p: 2,
                  '&:last-child': { pb: 2 }
                }}>
                  {service.icon}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      mt: 1.5,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      minHeight: '3em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      fontSize: '0.875rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {service.text}
                  </Typography>
                  <Box sx={{ textAlign: 'left' }}>
                    {service.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="caption"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 0.5,
                          fontSize: '0.75rem'
                        }}
                      >
                        <AutoAwesomeIcon sx={{ fontSize: 14, color: orangeColor, mr: 0.5 }} />
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Our 6-Step Success Process
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="textSecondary"
            sx={{ maxWidth: '800px', margin: '0 auto', mb: 6 }}
          >
            A structured approach to ensure your study abroad success
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center'
            }}
          >
            {processSteps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: 2,
                  width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 22px)' },
                  maxWidth: { md: 400 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: orangeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  {step.step}
                </Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: whiteColor }}>
        <Container maxWidth="lg">
          <Box textAlign="center" color="#f38303ff">
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Get free personalized counseling and take the first step towards your dream education
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleContactRedirect} // Added onClick handler
              sx={{
                backgroundColor: orangeColor,
                color: 'white',
                '&:hover': { backgroundColor: '#e55a00' },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}