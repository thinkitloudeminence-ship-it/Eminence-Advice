// // client/src/pages/BlogList.jsx
// import React, { useEffect, useState } from 'react';
// import api from '../api/axios';
// import { Link } from 'react-router-dom';

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   useEffect(() => {
//     api.get('/blogs').then(r => setBlogs(r.data)); // ✅ REMOVED /api
//   }, []);

//   return (
//     <div style={{ maxWidth: 1100, margin: '2rem auto' }}>
//       <h2>Blogs</h2>
//       {blogs.map(b => (
//         <div key={b._id} style={{ border: '1px solid #eee', padding: 16, marginBottom: 12 }}>
//           {b.featuredImage && <img src={`${process.env.REACT_APP_API_URL}${b.featuredImage}`} alt="" style={{ width: 200 }} />}
//           <h3><Link to={`/blogs/${b.slug}`}>{b.title}</Link></h3>
//           <p>{(b.content || '').replace(/<[^>]+>/g, '').slice(0, 150)}...</p>
//         </div>
//       ))}
//     </div>
//   );
// }



// // client/src/pages/BlogList.jsx
// import React, { useEffect, useState } from 'react';
// import api from '../api/axios';
// import { Link } from 'react-router-dom';

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await api.get('/blogs');
//         setBlogs(response.data);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading blogs...</div>;

//   return (
//     <div style={{ maxWidth: 1100, margin: '2rem auto', padding: '0 1rem' }}>
//       <h1>Our Blogs</h1>
//       {blogs.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '2rem' }}>
//           <p>No blogs published yet.</p>
//         </div>
//       ) : (
//         blogs.map(blog => (
//           <div key={blog._id} style={{ 
//             border: '1px solid #eee', 
//             padding: 20, 
//             marginBottom: 16,
//             borderRadius: 8,
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//           }}>
//             {blog.featuredImage && (
//               <img 
//                 src={`http://localhost:5000${blog.featuredImage}`} 
//                 alt={blog.title}
//                 style={{ 
//                   width: '100%', 
//                   maxWidth: 300,
//                   height: 200,
//                   objectFit: 'cover',
//                   borderRadius: 4,
//                   marginBottom: 12
//                 }} 
//               />
//             )}
//             <h3 style={{ margin: '0 0 8px 0' }}>
//               <Link 
//                 to={`/blogs/${blog.slug}`}
//                 style={{ 
//                   textDecoration: 'none', 
//                   color: '#1976d2',
//                   fontSize: '1.4rem'
//                 }}
//               >
//                 {blog.title}
//               </Link>
//             </h3>
//             <div style={{ 
//               color: '#666', 
//               fontSize: '0.9rem',
//               marginBottom: 12
//             }}>
//               {blog.category} • {new Date(blog.createdAt).toLocaleDateString()}
//             </div>
//             <p style={{ 
//               color: '#555',
//               lineHeight: 1.6,
//               margin: 0
//             }}>
//               {(blog.content || '').replace(/<[^>]+>/g, '').slice(0, 200)}...
//             </p>
//             {blog.tags && blog.tags.length > 0 && (
//               <div style={{ marginTop: 12 }}>
//                 {blog.tags.map((tag, index) => (
//                   <span 
//                     key={index}
//                     style={{
//                       background: '#f0f0f0',
//                       padding: '2px 8px',
//                       borderRadius: 12,
//                       fontSize: '0.8rem',
//                       marginRight: 8,
//                       color: '#666'
//                     }}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }



// client/src/pages/BlogList.jsx - UPDATED
import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/imageUrl'; // ✅ ADD IMPORT

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading blogs...</div>;

  return (
    <div style={{ maxWidth: 1100, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Our Blogs</h1>
      {blogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>No blogs published yet.</p>
        </div>
      ) : (
        blogs.map(blog => (
          <div key={blog._id} style={{ 
            border: '1px solid #eee', 
            padding: 20, 
            marginBottom: 16,
            borderRadius: 8,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {blog.featuredImage && (
              <img 
                src={getImageUrl(blog.featuredImage)} // ✅ UPDATED
                alt={blog.title}
                style={{ 
                  width: '100%', 
                  maxWidth: 300,
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 4,
                  marginBottom: 12
                }} 
              />
            )}
            <h3 style={{ margin: '0 0 8px 0' }}>
              <Link 
                to={`/blogs/${blog.slug}`}
                style={{ 
                  textDecoration: 'none', 
                  color: '#1976d2',
                  fontSize: '1.4rem'
                }}
              >
                {blog.title}
              </Link>
            </h3>
            <div style={{ 
              color: '#666', 
              fontSize: '0.9rem',
              marginBottom: 12
            }}>
              {blog.category} • {new Date(blog.createdAt).toLocaleDateString()}
            </div>
            <p style={{ 
              color: '#555',
              lineHeight: 1.6,
              margin: 0
            }}>
              {(blog.content || '').replace(/<[^>]+>/g, '').slice(0, 200)}...
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <div style={{ marginTop: 12 }}>
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    style={{
                      background: '#f0f0f0',
                      padding: '2px 8px',
                      borderRadius: 12,
                      fontSize: '0.8rem',
                      marginRight: 8,
                      color: '#666'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}