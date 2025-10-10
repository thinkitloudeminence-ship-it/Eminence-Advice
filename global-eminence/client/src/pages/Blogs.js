import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await API.get('/blogs');
      setBlogs(data.filter(b => b.status === 'published'));
    };
    fetchBlogs();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card>
              <CardActionArea onClick={() => navigate(`/blogs/${blog.slug}`)}>
                <CardMedia component="img" height="140" image={blog.featuredImage} alt={blog.title} />
                <CardContent>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{blog.category} | {blog.tags}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
