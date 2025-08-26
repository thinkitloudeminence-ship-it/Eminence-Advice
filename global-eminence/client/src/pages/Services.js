import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Services
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ mt: 4 }}>
        For Students
      </Typography>
      
      <Grid container spacing={4} sx={{ my: 2 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                University Selection
              </Typography>
              <Typography variant="body2">
                We help you identify the best universities and programs that match your 
                academic background, career goals, and personal preferences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Application Assistance
              </Typography>
              <Typography variant="body2">
                Complete support with application forms, document preparation, statement of 
                purpose, letters of recommendation, and meeting deadlines.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Visa Guidance
              </Typography>
              <Typography variant="body2">
                Expert advice on visa requirements, documentation, interview preparation, 
                and follow-up to ensure successful visa approval.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Pre-Departure Orientation
              </Typography>
              <Typography variant="body2">
                Comprehensive briefing on what to expect, how to prepare, cultural adjustment, 
                and settling in your new country.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" component="h2" gutterBottom color="primary" sx={{ mt: 6 }}>
        For Working Professionals
      </Typography>
      
      <Box sx={{ my: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Career Counseling</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Assessment of your skills, qualifications, and experience to identify suitable 
              international career opportunities and pathways.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Job Search Assistance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Access to our network of international employers, job portals, and recruitment 
              agencies to find opportunities that match your profile.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Resume & Cover Letter Preparation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Crafting professional resumes and cover letters tailored to international 
              standards and specific job requirements.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Interview Preparation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mock interviews, common question practice, cultural briefing, and techniques 
              to excel in international job interviews.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Relocation Support</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Assistance with work permits, housing, banking, transportation, and other 
              logistics for a smooth transition to your new country.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Services;