// import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Helmet } from 'react-helmet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Blogs() {
  // Placeholder blog data
  const blogPosts = [
    {
      title: 'How to Choose the Right University Abroad',
      summary: 'Tips and strategies to select the best-fit university for your goals.',
    },
    {
      title: 'Scholarships and Financial Aid Opportunities',
      summary: 'Discover how to fund your international education with ease.',
    },
    {
      title: 'Visa Application Process Simplified',
      summary: 'Step-by-step guide to secure your student visa successfully.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Eminence Advice Blogs</title>
        <meta
          name="description"
          content="Read expert advice on studying abroad, scholarships, visa guidance, and more."
        />
      </Helmet>

      <Box sx={{ py: 10, backgroundColor: '#fff7f0' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#FF6600' }}>
              Our Blogs
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Stay updated with the latest tips, guidance, and news for studying abroad
            </Typography>
          </Box>

          <Grid container spacing={5}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={6}
                  sx={{
                    borderRadius: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: '#FF6600' }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.summary}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: '#FF6600',
                        color: '#fff',
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        transition: '0.3s',
                        '&:hover': { backgroundColor: '#e55d00', boxShadow: '0 6px 15px rgba(255, 102, 0, 0.3)' },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
