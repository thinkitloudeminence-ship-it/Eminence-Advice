// // server/server.js
// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const connectDB = require('./config/db');

// connectDB();

// const app = express();

// app.use(helmet());
// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploads
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/blogs', require('./routes/blogRoutes'));       // add blogs route
// app.use('/api/contact', require('./routes/contactRoutes')); // add contact route ✅

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// // server/server.js
// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const connectDB = require('./config/db');


// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://www.eminenceadvice.com"
// ];

// // Connect to database
// connectDB();

// const app = express();

// // Security middleware
// app.use(helmet());

// // CORS configuration
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error(`CORS blocked from origin: ${origin}`));
//       }
//     },
//     credentials: true,
//   })
// );
// // Logging middleware
// app.use(morgan('dev'));

// // Body parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // API Routes
// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/blogs', require('./routes/blogRoutes'));
// app.use('/api/contact', require('./routes/contactRoutes'));

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//     res.status(200).json({
//         status: 'OK',
//         message: 'Server is running successfully',
//         timestamp: new Date().toISOString()
//     });
// });

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//     });
// }

// // Error handling middleware for undefined routes
// app.use(/.*/, (req, res) => {
//     res.status(404).json({
//         success: false,
//         message: `Route ${req.originalUrl} not found`
//     });
// });
// // Global error handler
// app.use((err, req, res, next) => {
//     console.error('Error:', err.stack);
//     res.status(500).json({
//         success: false,
//         message: 'Something went wrong!',
//         error: process.env.NODE_ENV === 'development' ? err.message : {}
//     });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
//     console.log(`🌐 Client URL: ${process.env.CLIENT_URL || 'http://localhost:3000'}`);
// });


// // server/server.js
// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const connectDB = require('./config/db');

// // Connect to database
// connectDB();

// const app = express();

// // Security middleware
// app.use(helmet({
//   crossOriginResourcePolicy: { policy: "cross-origin" }
// }));

// // CORS configuration - works for both local + production
// const allowedOrigins = [
//   "https://www.eminenceadvice.com",
//   "http://localhost:3000",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );


// // Logging middleware
// app.use(morgan('dev'));

// // Body parsing middleware - size limit increase kiya
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Serve static files - proper path fix
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // API Routes
// app.use('/api/admin', require('./routes/adminRoutes'));
// app.use('/api/blogs', require('./routes/blogRoutes'));
// app.use('/api/contact', require('./routes/contactRoutes'));

// // Health check endpoint
// app.get('/api/health', (req, res) => {
//     res.status(200).json({
//         status: 'OK',
//         message: 'Server is running successfully',
//         timestamp: new Date().toISOString(),
//         environment: process.env.NODE_ENV
//     });
// });

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));

//   // ✅ Use regex pattern instead of '*'
//   app.get(/.*/, (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });
// }

// // ✅ Error handling middleware for undefined API routes (non-production or fall-through)
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: `Route ${req.originalUrl} not found`
//   });
// });



// // Global error handler
// app.use((err, req, res, next) => {
//     console.error('Error:', err.stack);
    
//     // CORS error handle karna
//     if (err.message.includes('CORS')) {
//         return res.status(403).json({
//             success: false,
//             message: 'CORS Error: Access not allowed from this origin'
//         });
//     }
    
//     res.status(500).json({
//         success: false,
//         message: 'Something went wrong!',
//         error: process.env.NODE_ENV === 'development' ? err.message : {}
//     });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
//     console.log(`🌐 Allowed Origins: http://localhost:3000, https://www.eminenceadvice.com`);
// });


require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

// Connect MongoDB
connectDB();

// Security
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  process.env.RENDER_URL,
];

app.use(
  cors({
    origin: function (origin, callback) {
      // local dev ke liye origin null bhi aa sakta hai (Postman ya local)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Logging
app.use(morgan('dev'));

// Body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Uploads
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOADS_DIR || 'uploads')));

// Routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Health
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server running',
    environment: process.env.NODE_ENV
  });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global error
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.message.includes('CORS')) {
    return res.status(403).json({ success: false, message: 'CORS Error: Access denied' });
  }
  res.status(500).json({ success: false, message: 'Server error', error: process.env.NODE_ENV === 'development' ? err.message : {} });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Env: ${process.env.NODE_ENV}`);
  console.log(`🌐 Allowed Origins: ${allowedOrigins.join(', ')}`);
});
