// import React from 'react';
// import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
// import { Helmet } from 'react-helmet';

// // Expanded list of colleges
// const colleges = [
//   { name: 'Harvard University', country: 'USA' },
//   { name: 'MIT', country: 'USA' },
//   { name: 'Stanford University', country: 'USA' },
//   { name: 'University of Oxford', country: 'UK' },
//   { name: 'University of Cambridge', country: 'UK' },
//   { name: 'Imperial College London', country: 'UK' },
//   { name: 'University of Toronto', country: 'Canada' },
//   { name: 'McGill University', country: 'Canada' },
//   { name: 'University of British Columbia', country: 'Canada' },
//   { name: 'University of Melbourne', country: 'Australia' },
//   { name: 'University of Sydney', country: 'Australia' },
//   { name: 'Australian National University', country: 'Australia' },
//   { name: 'Technical University of Munich', country: 'Germany' },
//   { name: 'LMU Munich', country: 'Germany' },
//   { name: 'Heidelberg University', country: 'Germany' },
//   { name: 'National University of Singapore', country: 'Singapore' },
//   { name: 'Nanyang Technological University', country: 'Singapore' },
//   { name: 'Singapore Management University', country: 'Singapore' },
// ];

// export default function AbroadColleges() {
//   return (
//     <>
//       <Helmet>
//         <title>Study Abroad Colleges</title>
//         <meta
//           name="description"
//           content="Explore top universities and colleges around the world to plan your study abroad journey."
//         />
//       </Helmet>

//       <Box sx={{ 
//         py: { xs: 6, sm: 8, md: 10 }, 
//         backgroundColor: '#fff7f0',
//         minHeight: '100vh'
//       }}>
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
//             <Typography 
//               variant="h4" 
//               fontWeight="bold" 
//               gutterBottom 
//               sx={{ 
//                 color: '#FF6600',
//                 fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
//               }}
//             >
//               Top Study Abroad Colleges
//             </Typography>
//             <Typography 
//               variant="subtitle1" 
//               color="textSecondary"
//               sx={{
//                 fontSize: { xs: '0.9rem', sm: '1rem' },
//                 px: { xs: 2, sm: 0 }
//               }}
//             >
//               Find the best universities worldwide for your international education journey
//             </Typography>
//           </Box>

//           {/* Using flex container with controlled wrapping */}
//           <Box 
//             sx={{ 
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: { xs: 2, sm: 3 },
//               justifyContent: 'center'
//             }}
//           >
//             {colleges.map((college, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   width: {
//                     xs: '100%', // Full width on extra small screens
//                     sm: 'calc(50% - 12px)', // 2 cards per row on small screens
//                     md: 'calc(33.333% - 16px)' // 3 cards per row on medium+ screens
//                   },
//                   minWidth: { md: '300px' }, // Ensure cards don't get too small
//                   maxWidth: { md: '350px' }, // Limit maximum width
//                   flexShrink: 0
//                 }}
//               >
//                 <Card
//                   elevation={6}
//                   sx={{
//                     borderRadius: 3,
//                     width: '100%',
//                     height: { xs: 120, sm: 140, md: 150 },
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                       boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                     },
//                   }}
//                 >
//                   <CardContent sx={{ 
//                     height: '100%', 
//                     display: 'flex', 
//                     flexDirection: 'column', 
//                     justifyContent: 'center',
//                     overflow: 'hidden',
//                     p: { xs: 2, sm: 3 },
//                     '&:last-child': { 
//                       pb: { xs: 2, sm: 3 } 
//                     }
//                   }}>
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{ 
//                         color: '#FF6600',
//                         display: '-webkit-box',
//                         WebkitLineClamp: 2,
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                         lineHeight: '1.3',
//                         fontSize: { 
//                           xs: '1rem', 
//                           sm: '1.1rem', 
//                           md: '1.25rem' 
//                         },
//                         minHeight: { xs: '2.6em', sm: '2.8em', md: '3em' }
//                       }}
//                     >
//                       {college.name}
//                     </Typography>
//                     <Typography 
//                       variant="body2" 
//                       color="textSecondary"
//                       sx={{ 
//                         mt: 'auto',
//                         fontSize: { xs: '0.8rem', sm: '0.875rem' }
//                       }}
//                     >
//                       {college.country}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Box>
//             ))}
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }



import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';

// Expanded list of colleges
const colleges = [
  { name: 'Harvard University', country: 'USA' },
  { name: 'MIT', country: 'USA' },
  { name: 'Stanford University', country: 'USA' },
  { name: 'University of Oxford', country: 'UK' },
  { name: 'University of Cambridge', country: 'UK' },
  { name: 'Imperial College London', country: 'UK' },
  { name: 'University of Toronto', country: 'Canada' },
  { name: 'McGill University', country: 'Canada' },
  { name: 'University of British Columbia', country: 'Canada' },
  { name: 'University of Melbourne', country: 'Australia' },
  { name: 'University of Sydney', country: 'Australia' },
  { name: 'Australian National University', country: 'Australia' },
  { name: 'Technical University of Munich', country: 'Germany' },
  { name: 'LMU Munich', country: 'Germany' },
  { name: 'Heidelberg University', country: 'Germany' },
  { name: 'National University of Singapore', country: 'Singapore' },
  { name: 'Nanyang Technological University', country: 'Singapore' },
  { name: 'Singapore Management University', country: 'Singapore' },
];

export default function AbroadColleges() {
  return (
    <>
      <Helmet>
        <title>Study Abroad Colleges</title>
        <meta
          name="description"
          content="Explore top universities and colleges around the world to plan your study abroad journey."
        />
      </Helmet>

      <Box sx={{ 
        py: { xs: 6, sm: 8, md: 10 }, 
        backgroundColor: '#fff7f0',
        minHeight: '100vh'
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                color: '#FF6600',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
              }}
            >
              Top Study Abroad Colleges
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="textSecondary"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                px: { xs: 2, sm: 0 }
              }}
            >
              Find the best universities worldwide for your international education journey
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, sm: 3 },
            }}
          >
            {colleges.map((college, index) => (
              <Card
                key={index}
                elevation={6}
                sx={{
                  borderRadius: 3,
                  width: { 
                    xs: '100%', 
                    sm: 'calc(50% - 12px)', // 2 cards per row on small screens
                    md: 'calc(33.33% - 16px)' // 3 cards per row on medium+ screens
                  },
                  maxWidth: { xs: '100%', sm: 400, md: 350 },
                  height: { xs: 120, sm: 140, md: 150 },
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
                  },
                }}
              >
                <CardContent sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', // Centers vertically
                  alignItems: 'center', // Centers horizontally
                  textAlign: 'center', // Centers text
                  overflow: 'hidden',
                  p: { xs: 2, sm: 3 },
                  '&:last-child': { 
                    pb: { xs: 2, sm: 3 } 
                  }
                }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ 
                      color: '#FF6600',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: '1.3',
                      fontSize: { 
                        xs: '1rem', 
                        sm: '1.1rem', 
                        md: '1.25rem' 
                      },
                      minHeight: { xs: '2.6em', sm: '2.8em', md: '3em' },
                      width: '100%', // Ensures full width for proper centering
                    }}
                  >
                    {college.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary"
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      width: '100%', // Ensures full width for proper centering
                    }}
                  >
                    {college.country}
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