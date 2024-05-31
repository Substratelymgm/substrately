require('dotenv/config');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db/db');
const path = require('path');
const port = process.env.PORT || 4000;

const app = express();

// Enable CORS for all origins
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};



app.use(cors(corsOptions));

app.use(express.json());

// Connect to database
connectDB(process.env.MONGO_URL);

// API Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Error handling middleware
app.use(errorHandler);

app.get('/test', (req, res) => {
  res.send('Hello from the minimal route!');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server is running on port ${port}`);
});
