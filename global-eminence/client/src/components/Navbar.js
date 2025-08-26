// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useScrollTrigger,
//   Slide,
//   Box,
//   useTheme,
//   useMediaQuery,
//   Container,
//   Typography
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// // Import the logo from the correct path
// import EminenceAdviceLogo from '../images/EminenceAdvicelogo.png';

// // Hide on scroll function
// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// const Navbar = (props) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/about' },
//     { label: 'Services', path: '/services' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   const drawer = (
//     <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #eee' }}>
//         <img
//           src={EminenceAdviceLogo}
//           alt="Eminence Advice Logo"
//           style={{ height: '80px' }}
//         />
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List sx={{ flexGrow: 1, pt: 2 }}>
//         {navItems.map((item) => (
//           <ListItem
//             button
//             key={item.label}
//             sx={{
//               py: 1.5,
//               px: 3,
//               '&:hover': {
//                 backgroundColor: 'rgba(0, 0, 0, 0.98)'
//               }
//             }}
//           >
//             <ListItemText
//               primary={
//                 <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
//                   {item.label}
//                 </Typography>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
//       <Box sx={{ p: 2 }}>
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{
//             py: 1.5,
//             backgroundColor: '#ff6b00',
//             color: 'white',
//             fontWeight: 'bold',
//             fontSize: '1rem',
//             '&:hover': {
//               backgroundColor: '#e55d00',
//             },
//           }}
//         >
//           Free Consultation
//         </Button>
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       <HideOnScroll {...props}>
//         <AppBar
//           position="sticky"
//           sx={{
//             backgroundColor: '#ffffff',
//             boxShadow: '0 1px 10px rgba(0,0,0,0.05)',
//             py: 0.5
//           }}
//         >
//           <Container maxWidth="lg">
//             <Toolbar sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               minHeight: { xs: '60px', md: '70px' }
//             }}>
//               <Box display="flex" alignItems="center">
//                 <img
//                   src={EminenceAdviceLogo}
//                   alt="Eminence Advice Logo"
//                   style={{
//                     height: isMobile ? '45px' : '55px',
//                     width: 'auto'
//                   }}
//                 />
//               </Box>

//               {!isMobile ? (
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   {navItems.map((item) => (
//                     <Button
//                       key={item.label}
//                       sx={{
//                         mx: 0.5,
//                         px: 2,
//                         color: '#1a1a1a',
//                         fontSize: '1rem',
//                         fontWeight: 500,
//                         textTransform: 'none',
//                         borderRadius: 2,
//                         '&:hover': {
//                           backgroundColor: 'rgba(0, 0, 0, 0.04)',
//                         },
//                       }}
//                     >
//                       {item.label}
//                     </Button>
//                   ))}
//                   <Button
//                     variant="contained"
//                     sx={{
//                       ml: 2,
//                       px: 3,
//                       py: 1,
//                       backgroundColor: '#ff6b00',
//                       color: 'white',
//                       fontWeight: 'bold',
//                       fontSize: '1rem',
//                       textTransform: 'none',
//                       borderRadius: 2,
//                       '&:hover': {
//                         backgroundColor: '#e55d00',
//                         boxShadow: '0 4px 12px rgba(255, 107, 0, 0.2)'
//                       },
//                     }}
//                   >
//                     Free Consultation
//                   </Button>
//                 </Box>
//               ) : (
//                 <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   edge="start"
//                   onClick={handleDrawerToggle}
//                   sx={{ color: '#1a1a1a' }}
//                 >
//                   <MenuIcon fontSize={isSmallMobile ? "medium" : "large"} />
//                 </IconButton>
//               )}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>

//       {/* Mobile drawer */}
//       <Drawer
//         variant="temporary"
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile
//         }}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: 280,
//             boxShadow: '0 0 20px rgba(0,0,0,0.1)'
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Import the logo from the correct path
import EminenceAdviceLogo from '../images/EminenceAdvice logo.png';

// Hide on scroll function
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #eee' }}>
        <img 
          src={EminenceAdviceLogo} 
          alt="Eminence Advice Logo" 
          style={{ height: '100px' }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.label} 
            sx={{ 
              py: 1.5,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <ListItemText 
              primary={
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                  {item.label}
                </Typography>
              } 
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button 
          fullWidth
          variant="contained" 
          sx={{ 
            py: 1.5,
            backgroundColor: '#ff6b00',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#e55d00',
            },
          }}
        >
          Free Consultation
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar 
          position="sticky" 
          sx={{ 
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 10px rgba(0,0,0,0.05)',
            py: 0.5
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              minHeight: { xs: '70px', md: '80px' } // Increased height for better logo visibility
            }}>
              <Box display="flex" alignItems="center">
                <img 
                  src={EminenceAdviceLogo} 
                  alt="Eminence Advice Logo" 
                  style={{ 
                    height: isMobile ? '55px' : '65px', // Increased logo size
                    width: 'auto'
                  }}
                />
              </Box>

              {!isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <Button 
                      key={item.label}
                      sx={{ 
                        mx: 0.5,
                        px: 2,
                        color: '#1a1a1a',
                        fontSize: '1rem',
                        fontWeight: 500,
                        textTransform: 'none',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button 
                    variant="contained" 
                    sx={{ 
                      ml: 2,
                      px: 3,
                      py: 1,
                      backgroundColor: '#ff6b00',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#e55d00',
                        boxShadow: '0 4px 12px rgba(255, 107, 0, 0.2)'
                      },
                    }}
                  >
                    Free Consultation
                  </Button>
                </Box>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: '#1a1a1a' }}
                >
                  <MenuIcon fontSize={isSmallMobile ? "medium" : "large"} />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;