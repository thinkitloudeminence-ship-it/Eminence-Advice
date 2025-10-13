// // client/src/pages/BlogDetail.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../api/axios';
// import DOMPurify from 'dompurify';

// export default function BlogDetail() {
//   const { slug } = useParams(); // instead of id
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     api.get(`/blogs/${slug}`).then(r => setBlog(r.data)).catch(() => { });
//   }, [slug]);

//   if (!blog) return <div>Loading...</div>;
//   return (
//     <div style={{ maxWidth: 900, margin: '2rem auto' }}>
//       <h1>{blog.title}</h1>
//       <div>Published: {new Date(blog.createdAt).toLocaleDateString()}</div>
//       {blog.featuredImage && <img src={`${process.env.REACT_APP_API_URL}${blog.featuredImage}`} alt="" style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />}
//       <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} />
//     </div>
//   );
// }



// client/src/pages/BlogDetail.jsx - UPDATED WITH DEBUGGING
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Alert,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import api from '../api/axios';
import DOMPurify from 'dompurify';

const ContentContainer = styled(Container)(({ theme }) => ({
  maxWidth: 800,
  margin: '2rem auto',
  padding: '2rem',
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
}));

const BlogImage = styled('img')({
  width: '100%',
  maxHeight: 400,
  objectFit: 'cover',
  borderRadius: 8,
  marginBottom: '2rem',
});

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        console.log('🔍 Fetching blog with slug:', slug);
        
        const response = await api.get(`/blogs/${slug}`);
        console.log('✅ Blog data received:', response.data);
        
        if (!response.data) {
          throw new Error('Blog not found');
        }
        
        setBlog(response.data);
      } catch (err) {
        console.error('❌ Error fetching blog:', err);
        console.error('Error details:', err.response?.data);
        setError(err.response?.data?.message || 'Blog not found or failed to load');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    } else {
      setError('Invalid blog URL');
      setLoading(false);
    }
  }, [slug]);

  // Debug info component
  const DebugInfo = () => (
    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1, mt: 2 }}>
      <Typography variant="h6" color="error">DEBUG INFO:</Typography>
      <Typography variant="body2">
        Slug: {slug} | 
        Blog Data: {blog ? '✅ Loaded' : '❌ Not loaded'} |
        Loading: {loading ? 'Yes' : 'No'} |
        Error: {error || 'None'}
      </Typography>
      {blog && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption">
            Blog ID: {blog._id} | 
            Title: {blog.title} | 
            Status: {blog.status} | 
            Content Length: {blog.content?.length || 0}
          </Typography>
        </Box>
      )}
    </Box>
  );

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading blog...</Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <DebugInfo />
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="warning">
          Blog not found. It may have been removed or the URL is incorrect.
        </Alert>
        <DebugInfo />
      </Container>
    );
  }

  return (
    <ContentContainer>
      {/* Debug Info - Remove after fixing */}
      <DebugInfo />

      {/* Blog Header */}
      <Box sx={{ mb: 3 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            color: '#333',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          {blog.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 2 }}>
          {blog.category && (
            <Chip 
              label={blog.category.replace(/-/g, ' ')}
              sx={{ 
                backgroundColor: '#FF6600', 
                color: 'white',
                textTransform: 'capitalize',
                fontWeight: 'bold'
              }}
            />
          )}
          <Typography variant="body1" color="textSecondary">
            Published: {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Typography>
        </Box>

        {blog.tags && blog.tags.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {blog.tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                color="primary"
              />
            ))}
          </Box>
        )}
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Featured Image */}
      {blog.featuredImage && (
        <BlogImage 
          src={`http://localhost:5000${blog.featuredImage}`}
          alt={blog.title}
          onError={(e) => {
            console.error('❌ Image failed to load:', blog.featuredImage);
            e.target.style.display = 'none';
          }}
        />
      )}

      {/* Blog Content */}
      <Box 
        sx={{ 
          '& h2': { 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            mt: 4, 
            mb: 2,
            color: '#333'
          },
          '& h3': { 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            mt: 3, 
            mb: 1,
            color: '#444'
          },
          '& p': { 
            fontSize: '1.1rem', 
            lineHeight: 1.8, 
            mb: 2,
            color: '#555'
          },
          '& ul, & ol': {
            pl: 3,
            mb: 2
          },
          '& li': {
            mb: 1,
            fontSize: '1.1rem',
            lineHeight: 1.6
          },
          '& blockquote': {
            borderLeft: '4px solid #FF6600',
            pl: 2,
            ml: 0,
            fontStyle: 'italic',
            backgroundColor: '#fff7f0',
            p: 2,
            borderRadius: '0 4px 4px 0',
            mb: 2
          },
          '& img': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 4,
            my: 2
          }
        }}
        dangerouslySetInnerHTML={{ 
          __html: DOMPurify.sanitize(blog.content || '<p>No content available.</p>') 
        }}
      />

      {/* Fallback if content is empty */}
      {(!blog.content || blog.content.trim() === '') && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="textSecondary">
            No content available for this blog.
          </Typography>
        </Box>
      )}
    </ContentContainer>
  );
}