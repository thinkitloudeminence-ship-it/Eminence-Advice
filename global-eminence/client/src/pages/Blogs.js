// import React, { useEffect, useState } from 'react';
// import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import API from '../api/axios';

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const { data } = await API.get('/blogs'); // ✅ REMOVED /api
//       setBlogs(data.filter(b => b.status === 'published'));
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Grid container spacing={3}>
//         {blogs.map(blog => (
//           <Grid item xs={12} sm={6} md={4} key={blog._id}>
//             <Card>
//               <CardActionArea onClick={() => navigate(`/blogs/${blog.slug}`)}>
//                 <CardMedia component="img" height="140" image={blog.featuredImage} alt={blog.title} />
//                 <CardContent>
//                   <Typography variant="h6">{blog.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">{blog.category} | {blog.tags}</Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }


// client/src/pages/Blogs.jsx
import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActionArea,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/blogs');
        
        // Filter only published blogs
        const publishedBlogs = data.filter(blog => 
          blog.status === 'published' || blog.isPublished === true
        );
        
        setBlogs(publishedBlogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading blogs...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Latest Blogs
      </Typography>

      {blogs.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="textSecondary">
            No blogs published yet. Check back soon!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {blogs.map(blog => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}>
                <CardActionArea 
                  onClick={() => navigate(`/blogs/${blog.slug}`)}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  {blog.featuredImage && (
                    <CardMedia 
                      component="img"
                      height="200"
                      image={`http://localhost:5000${blog.featuredImage}`}
                      alt={blog.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography 
                      variant="h6" 
                      component="h2" 
                      gutterBottom
                      sx={{ 
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {blog.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="textSecondary" 
                      sx={{ mb: 1 }}
                    >
                      {blog.category && (
                        <Box 
                          component="span" 
                          sx={{ 
                            backgroundColor: '#FF6600', 
                            color: 'white', 
                            px: 1, 
                            py: 0.5, 
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            textTransform: 'capitalize'
                          }}
                        >
                          {blog.category.replace('-', ' ')}
                        </Box>
                      )}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.5
                      }}
                    >
                      {blog.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                    </Typography>

                    {blog.tags && blog.tags.length > 0 && (
                      <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <Typography 
                            key={index}
                            variant="caption" 
                            color="primary"
                            sx={{ 
                              backgroundColor: 'primary.light', 
                              px: 1, 
                              borderRadius: 1,
                              fontSize: '0.7rem'
                            }}
                          >
                            {tag}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}