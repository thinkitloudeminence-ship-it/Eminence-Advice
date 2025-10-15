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

//           <Box 
//             sx={{ 
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               gap: { xs: 2, sm: 3 },
//             }}
//           >
//             {colleges.map((college, index) => (
//               <Card
//                 key={index}
//                 elevation={6}
//                 sx={{
//                   borderRadius: 3,
//                   width: { 
//                     xs: '100%', 
//                     sm: 'calc(50% - 12px)', // 2 cards per row on small screens
//                     md: 'calc(33.33% - 16px)' // 3 cards per row on medium+ screens
//                   },
//                   maxWidth: { xs: '100%', sm: 400, md: 350 },
//                   height: { xs: 120, sm: 140, md: 150 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                     boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                   },
//                 }}
//               >
//                 <CardContent sx={{ 
//                   height: '100%', 
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   justifyContent: 'center', // Centers vertically
//                   alignItems: 'center', // Centers horizontally
//                   textAlign: 'center', // Centers text
//                   overflow: 'hidden',
//                   p: { xs: 2, sm: 3 },
//                   '&:last-child': { 
//                     pb: { xs: 2, sm: 3 } 
//                   }
//                 }}>
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     gutterBottom
//                     sx={{ 
//                       color: '#FF6600',
//                       display: '-webkit-box',
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden',
//                       lineHeight: '1.3',
//                       fontSize: { 
//                         xs: '1rem', 
//                         sm: '1.1rem', 
//                         md: '1.25rem' 
//                       },
//                       minHeight: { xs: '2.6em', sm: '2.8em', md: '3em' },
//                       width: '100%', // Ensures full width for proper centering
//                     }}
//                   >
//                     {college.name}
//                   </Typography>
//                   <Typography 
//                     variant="body2" 
//                     color="textSecondary"
//                     sx={{ 
//                       fontSize: { xs: '0.8rem', sm: '0.875rem' },
//                       width: '100%', // Ensures full width for proper centering
//                     }}
//                   >
//                     {college.country}
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

// import React from 'react';
// import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
// import { Helmet } from 'react-helmet';

// // Expanded list of colleges with images
// const colleges = [
//   // USA
//   { name: 'Harvard University', country: 'USA', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'MIT', country: 'USA', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop' },
//   { name: 'Stanford University', country: 'USA', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'California Institute of Technology', country: 'USA', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'Princeton University', country: 'USA', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },

//   // UK
//   { name: 'University of Oxford', country: 'UK', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'University of Cambridge', country: 'UK', image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300&h=200&fit=crop' },
//   { name: 'Imperial College London', country: 'UK', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },
//   { name: 'London School of Economics', country: 'UK', image: 'https://images.unsplash.com/photo-1622551048194-785c4086d359?w=300&h=200&fit=crop' },
//   { name: 'University College London', country: 'UK', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },

//   // Canada
//   { name: 'University of Toronto', country: 'Canada', image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=300&h=200&fit=crop' },
//   { name: 'McGill University', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=300&h=200&fit=crop' },
//   { name: 'University of British Columbia', country: 'Canada', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=300&h=200&fit=crop' },
//   { name: 'University of Waterloo', country: 'Canada', image: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=300&h=200&fit=crop' },
//   { name: 'McMaster University', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=300&h=200&fit=crop' },

//   // Australia
//   { name: 'University of Melbourne', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'University of Sydney', country: 'Australia', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'Australian National University', country: 'Australia', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'University of Queensland', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'Monash University', country: 'Australia', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },

//   // Germany
//   { name: 'Technical University of Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'LMU Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'Heidelberg University', country: 'Germany', image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300&h=200&fit=crop' },
//   { name: 'Humboldt University Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'Free University of Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },

//   // Singapore
//   { name: 'National University of Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },
//   { name: 'Nanyang Technological University', country: 'Singapore', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'Singapore Management University', country: 'Singapore', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },

//   // Japan
//   { name: 'University of Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'Kyoto University', country: 'Japan', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'Osaka University', country: 'Japan', image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300&h=200&fit=crop' },

//   // France
//   { name: 'Sorbonne University', country: 'France', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'École Polytechnique', country: 'France', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },
//   { name: 'PSL University', country: 'France', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },

//   // Switzerland
//   { name: 'ETH Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'EPFL', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'University of Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },

//   // Netherlands
//   { name: 'University of Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'Delft University of Technology', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },
//   { name: 'Utrecht University', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },

//   // China
//   { name: 'Tsinghua University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'Peking University', country: 'China', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'Fudan University', country: 'China', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },

//   // South Korea
//   { name: 'Seoul National University', country: 'South Korea', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'KAIST', country: 'South Korea', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },
//   { name: 'Yonsei University', country: 'South Korea', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },

//   // India
//   { name: 'Indian Institute of Technology Delhi', country: 'India', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },
//   { name: 'Indian Institute of Science', country: 'India', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'University of Delhi', country: 'India', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },

//   // New Zealand
//   { name: 'University of Auckland', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'University of Otago', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },

//   // Sweden
//   { name: 'Karolinska Institute', country: 'Sweden', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'Uppsala University', country: 'Sweden', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },

//   // Denmark
//   { name: 'University of Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'Aarhus University', country: 'Denmark', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },

//   // Norway
//   { name: 'University of Oslo', country: 'Norway', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'University of Bergen', country: 'Norway', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },

//   // Finland
//   { name: 'University of Helsinki', country: 'Finland', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'Aalto University', country: 'Finland', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },

//   // Italy
//   { name: 'University of Bologna', country: 'Italy', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },
//   { name: 'Sapienza University of Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },

//   // Spain
//   { name: 'University of Barcelona', country: 'Spain', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
//   { name: 'Complutense University of Madrid', country: 'Spain', image: 'https://images.unsplash.com/photo-1629978002388-1d8d15b4d0b9?w=300&h=200&fit=crop' },

//   // Brazil
//   { name: 'University of São Paulo', country: 'Brazil', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=300&h=200&fit=crop' },
//   { name: 'State University of Campinas', country: 'Brazil', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=300&h=200&fit=crop' },

//   // Mexico
//   { name: 'National Autonomous University of Mexico', country: 'Mexico', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop' },

//   // South Africa
//   { name: 'University of Cape Town', country: 'South Africa', image: 'https://images.unsplash.com/photo-152305962303-aa56c58da7d7?w=300&h=200&fit=crop' },
//   { name: 'University of Witwatersrand', country: 'South Africa', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop' },
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

//           <Box 
//             sx={{ 
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               gap: { xs: 2, sm: 3 },
//             }}
//           >
//             {colleges.map((college, index) => (
//               <Card
//                 key={index}
//                 elevation={6}
//                 sx={{
//                   borderRadius: 3,
//                   width: { 
//                     xs: '100%', 
//                     sm: 'calc(50% - 12px)', 
//                     md: 'calc(33.33% - 16px)',
//                     lg: 'calc(25% - 18px)' // 4 cards per row on large screens
//                   },
//                   maxWidth: { xs: '100%', sm: 400, md: 350, lg: 300 },
//                   height: { xs: 140, sm: 160, md: 180 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   overflow: 'hidden',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                     boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     height: { xs: 80, sm: 90, md: 100 },
//                     backgroundImage: `url(${college.image})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     position: 'relative',
//                   }}
//                 />
//                 <CardContent sx={{ 
//                   flex: 1,
//                   display: 'flex', 
//                   flexDirection: 'column', 
//                   justifyContent: 'center',
//                   alignItems: 'center', 
//                   textAlign: 'center',
//                   p: { xs: 1.5, sm: 2 },
//                   '&:last-child': { 
//                     pb: { xs: 1.5, sm: 2 } 
//                   }
//                 }}>
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     gutterBottom
//                     sx={{ 
//                       color: '#FF6600',
//                       display: '-webkit-box',
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden',
//                       lineHeight: '1.3',
//                       fontSize: { 
//                         xs: '0.9rem', 
//                         sm: '1rem', 
//                         md: '1.1rem' 
//                       },
//                       minHeight: { xs: '2.6em', sm: '2.8em', md: '3em' },
//                       width: '100%',
//                     }}
//                   >
//                     {college.name}
//                   </Typography>
//                   <Typography 
//                     variant="body2" 
//                     color="textSecondary"
//                     sx={{ 
//                       fontSize: { xs: '0.75rem', sm: '0.8rem' },
//                       width: '100%',
//                       fontWeight: 'medium'
//                     }}
//                   >
//                     {college.country}
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


// import React from 'react';
// import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import { Helmet } from 'react-helmet';

// // Expanded list of colleges with images
// const colleges = [
//   // USA
//   { name: 'Harvard University', country: 'USA', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=300&fit=crop' },
//   { name: 'MIT', country: 'USA', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop' },
//   { name: 'Stanford University', country: 'USA', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'California Institute of Technology', country: 'USA', image: 'https://images.unsplash.com/photo-1576495199011-ebf36cd7fb68?w=400&h=300&fit=crop' },
//   { name: 'Princeton University', country: 'USA', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=300&fit=crop' },

//   // UK
//   { name: 'University of Oxford', country: 'UK', image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=400&h=300&fit=crop' },
//   { name: 'University of Cambridge', country: 'UK', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop' },
//   { name: 'Imperial College London', country: 'UK', image: 'https://images.unsplash.com/photo-1620336655055-bd87c7d7d73f?w=400&h=300&fit=crop' },
//   { name: 'London School of Economics', country: 'UK', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop' },
//   { name: 'University College London', country: 'UK', image: 'https://images.unsplash.com/photo-1620336655055-bd87c7d7d73f?w=400&h=300&fit=crop' },

//   // Canada
//   { name: 'University of Toronto', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=400&h=300&fit=crop' },
//   { name: 'McGill University', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=400&h=300&fit=crop' },
//   { name: 'University of British Columbia', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=400&h=300&fit=crop' },
//   { name: 'University of Waterloo', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=400&h=300&fit=crop' },
//   { name: 'McMaster University', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?w=400&h=300&fit=crop' },

//   // Australia
//   { name: 'University of Melbourne', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'University of Sydney', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'Australian National University', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'University of Queensland', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'Monash University', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },

//   // Germany
//   { name: 'Technical University of Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?w=400&h=300&fit=crop' },
//   { name: 'LMU Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?w=400&h=300&fit=crop' },
//   { name: 'Heidelberg University', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?w=400&h=300&fit=crop' },
//   { name: 'Humboldt University', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?w=400&h=300&fit=crop' },
//   { name: 'Free University of Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?w=400&h=300&fit=crop' },

//   // Singapore
//   { name: 'National University of Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop' },
//   { name: 'Nanyang Technological University', country: 'Singapore', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop' },
//   { name: 'Singapore Management University', country: 'Singapore', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop' },

//   // France
//   { name: 'Sorbonne University', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop' },
//   { name: 'École Polytechnique', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop' },
//   { name: 'PSL University', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop' },

//   // Japan
//   { name: 'University of Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'Kyoto University', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'Osaka University', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },

//   // Switzerland
//   { name: 'ETH Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop' },
//   { name: 'EPFL', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop' },
//   { name: 'University of Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop' },

//   // Netherlands
//   { name: 'University of Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1599661046284-8dc0b65c3e98?w=400&h=300&fit=crop' },
//   { name: 'Delft University', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1599661046284-8dc0b65c3e98?w=400&h=300&fit=crop' },
//   { name: 'Utrecht University', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1599661046284-8dc0b65c3e98?w=400&h=300&fit=crop' },

//   // China
//   { name: 'Tsinghua University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'Peking University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },
//   { name: 'Fudan University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop' },

//   // South Korea
//   { name: 'Seoul National University', country: 'South Korea', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab291?w=400&h=300&fit=crop' },
//   { name: 'KAIST', country: 'South Korea', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab291?w=400&h=300&fit=crop' },
//   { name: 'Yonsei University', country: 'South Korea', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab291?w=400&h=300&fit=crop' },

//   // India
//   { name: 'IIT Bombay', country: 'India', image: 'https://images.unsplash.com/photo-1619451333384-6e9c69c44649?w=400&h=300&fit=crop' },
//   { name: 'IIT Delhi', country: 'India', image: 'https://images.unsplash.com/photo-1619451333384-6e9c69c44649?w=400&h=300&fit=crop' },
//   { name: 'University of Delhi', country: 'India', image: 'https://images.unsplash.com/photo-1619451333384-6e9c69c44649?w=400&h=300&fit=crop' },

//   // New Zealand
//   { name: 'University of Auckland', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop' },
//   { name: 'University of Otago', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop' },

//   // Sweden
//   { name: 'Karolinska Institute', country: 'Sweden', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop' },
//   { name: 'Uppsala University', country: 'Sweden', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop' },

//   // Denmark
//   { name: 'University of Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop' },
//   { name: 'Aarhus University', country: 'Denmark', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop' },
// ];

// export default function AbroadColleges() {
//   return (
//     <>
//       <Helmet>
//         <title>Study Abroad Colleges Worldwide</title>
//         <meta
//           name="description"
//           content="Explore top universities and colleges from around the world to plan your study abroad journey. Find the best institutions in USA, UK, Canada, Australia, and more."
//         />
//       </Helmet>

//       <Box sx={{
//         py: { xs: 6, sm: 8, md: 10 },
//         backgroundColor: '#fff7f0',
//         minHeight: '100vh'
//       }}>
//         <Container maxWidth="xl">
//           <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
//             <Typography
//               variant="h3"
//               fontWeight="bold"
//               gutterBottom
//               sx={{
//                 color: '#FF6600',
//                 fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
//               }}
//             >
//               Top Study Abroad Colleges Worldwide
//             </Typography>
//             <Typography
//               variant="h6"
//               color="textSecondary"
//               sx={{
//                 fontSize: { xs: '1rem', sm: '1.2rem' },
//                 px: { xs: 2, sm: 0 },
//                 maxWidth: '600px',
//                 margin: '0 auto'
//               }}
//             >
//               Discover premier universities across 15+ countries for your international education journey
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: {
//                 xs: '1fr',
//                 sm: 'repeat(2, 1fr)',
//                 md: 'repeat(3, 1fr)',
//                 lg: 'repeat(4, 1fr)'
//               },
//               gap: { xs: 2, sm: 3 },
//             }}
//           >
//             {colleges.map((college, index) => (
//               <Card
//                 key={index}
//                 elevation={6}
//                 sx={{
//                   borderRadius: 3,
//                   height: { xs: 280, sm: 300, md: 320 },
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                     boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={college.image}
//                   alt={college.name}
//                   sx={{
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <CardContent sx={{
//                   flexGrow: 1,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   textAlign: 'center',
//                   p: { xs: 2, sm: 2.5 },
//                   '&:last-child': {
//                     pb: { xs: 2, sm: 2.5 }
//                   }
//                 }}>
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     gutterBottom
//                     sx={{
//                       color: '#FF6600',
//                       display: '-webkit-box',
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden',
//                       lineHeight: '1.3',
//                       fontSize: {
//                         xs: '1rem',
//                         sm: '1.1rem',
//                         md: '1.2rem'
//                       },
//                       minHeight: { xs: '2.6em', sm: '2.8em', md: '3em' },
//                       width: '100%',
//                     }}
//                   >
//                     {college.name}
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       gap: 1,
//                       mt: 1
//                     }}
//                   >
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       sx={{
//                         fontSize: { xs: '0.8rem', sm: '0.875rem' },
//                         fontWeight: 'medium'
//                       }}
//                     >
//                       {college.country}
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>

//           <Box textAlign="center" mt={6}>
//             <Typography
//               variant="body1"
//               color="textSecondary"
//               sx={{ fontStyle: 'italic' }}
//             >
//               Showing {colleges.length} top universities from around the globe
//             </Typography>
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }


import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Helmet } from 'react-helmet';

// Expanded list of colleges with better quality images
const colleges = [
  // USA
  { name: 'Harvard University', country: 'USA', image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'MIT', country: 'USA', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Stanford University', country: 'USA', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'California Institute of Technology', country: 'USA', image: 'https://images.unsplash.com/photo-1576495199011-ebf36cd7fb68?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Princeton University', country: 'USA', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // UK
  { name: 'University of Oxford', country: 'UK', image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Cambridge', country: 'UK', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Imperial College London', country: 'UK', image: 'https://images.unsplash.com/photo-1620336655055-bd87c7d7d73f?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'London School of Economics', country: 'UK', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University College London', country: 'UK', image: 'https://images.unsplash.com/photo-1620336655055-bd87c7d7d73f?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Canada
  { name: 'University of Toronto', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'McGill University', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of British Columbia', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Waterloo', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'McMaster University', country: 'Canada', image: 'https://images.unsplash.com/photo-1571167366136-b57e07761693?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Australia
  { name: 'University of Melbourne', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Sydney', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Australian National University', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Queensland', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Monash University', country: 'Australia', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Germany
  { name: 'Technical University of Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'LMU Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Heidelberg University', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Humboldt University', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Free University of Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1618826415127-0b0fa729f521?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Singapore
  { name: 'National University of Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Nanyang Technological University', country: 'Singapore', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Singapore Management University', country: 'Singapore', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // France
  { name: 'Sorbonne University', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'École Polytechnique', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'PSL University', country: 'France', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Japan
  { name: 'University of Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Kyoto University', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Osaka University', country: 'Japan', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Switzerland
  { name: 'ETH Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'EPFL', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Netherlands
  { name: 'University of Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1599661046284-8dc0b65c3e98?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Delft University', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1599661046284-8dc0b65c3e98?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Utrecht University', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1599661046284-8dc0b65c3e98?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // China
  { name: 'Tsinghua University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Peking University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Fudan University', country: 'China', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // South Korea
  { name: 'Seoul National University', country: 'South Korea', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab291?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'KAIST', country: 'South Korea', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab291?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Yonsei University', country: 'South Korea', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab291?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // India
  { name: 'IIT Bombay', country: 'India', image: 'https://images.unsplash.com/photo-1619451333384-6e9c69c44649?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'IIT Delhi', country: 'India', image: 'https://images.unsplash.com/photo-1619451333384-6e9c69c44649?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Delhi', country: 'India', image: 'https://images.unsplash.com/photo-1619451333384-6e9c69c44649?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // New Zealand
  { name: 'University of Auckland', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'University of Otago', country: 'New Zealand', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Sweden
  { name: 'Karolinska Institute', country: 'Sweden', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Uppsala University', country: 'Sweden', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },

  // Denmark
  { name: 'University of Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
  { name: 'Aarhus University', country: 'Denmark', image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&w=400&h=300&fit=crop' },
];

// Fallback image component
const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [loading, setLoading] = React.useState(true);

  const handleError = () => {
    setImgSrc('https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&w=400&h=300&fit=crop');
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <Box
          sx={{
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5'
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Loading...
          </Typography>
        </Box>
      )}
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        sx={{
          objectFit: 'cover',
          display: loading ? 'none' : 'block'
        }}
        {...props}
      />
    </>
  );
};

export default function AbroadColleges() {
  return (
    <>
      <Helmet>
        <title>Study Abroad Colleges Worldwide</title>
        <meta
          name="description"
          content="Explore top universities and colleges from around the world to plan your study abroad journey. Find the best institutions in USA, UK, Canada, Australia, and more."
        />
      </Helmet>

      <Box sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: '#fff7f0',
        minHeight: '100vh'
      }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: '#FF6600',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Top Study Abroad Colleges Worldwide
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                px: { xs: 2, sm: 0 },
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Discover premier universities across 15+ countries for your international education journey
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              gap: { xs: 2, sm: 3 },
            }}
          >
            {colleges.map((college, index) => (
              <Card
                key={index}
                elevation={6}
                sx={{
                  borderRadius: 3,
                  height: { xs: 280, sm: 300, md: 320 },
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 25px rgba(255, 102, 0, 0.25)',
                  },
                }}
              >
                <ImageWithFallback
                  src={college.image}
                  alt={college.name}
                />
                <CardContent sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: { xs: 2, sm: 2.5 },
                  '&:last-child': {
                    pb: { xs: 2, sm: 2.5 }
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
                        md: '1.2rem'
                      },
                      minHeight: { xs: '2.6em', sm: '2.8em', md: '3em' },
                      width: '100%',
                    }}
                  >
                    {college.name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mt: 1
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        fontWeight: 'medium'
                      }}
                    >
                      {college.country}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}