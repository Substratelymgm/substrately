require('dotenv/config');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db/db');
const port = process.env.PORT || 4000;
const path = require('path')

const app = express();

const allowedOrigins = ['https://bingo-samp-2.vercel.app', `http://localhost:5173`];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}


app.use(cors(corsOptions));

app.use(express.json());


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');



app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);



app.use(errorHandler);

connectDB(process.env.MONGO_URL);


//production script
app.use(express.static('./frontend/dist'))
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


app.listen(port, (error) => {
  if (error) throw error
  console.log(`Server is running on port ${port}`);
});
