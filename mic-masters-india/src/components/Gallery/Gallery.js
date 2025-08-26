import React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    'https://source.unsplash.com/random/600x400/?concert,audience',
    'https://source.unsplash.com/random/600x400/?singer',
    'https://source.unsplash.com/random/600x400/?music,performance',
    'https://source.unsplash.com/random/600x400/?microphone',
    'https://source.unsplash.com/random/600x400/?stage',
    'https://source.unsplash.com/random/600x400/?crowd',
  ];

  return (
    <div className="section">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" className="gold-text">
          Gallery
        </Typography>
        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  className="gallery-image"
                  image={image}
                  alt={`Gallery image ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Gallery;