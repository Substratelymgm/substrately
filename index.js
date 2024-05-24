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

const articleRoutes = require('./routes/article');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book')
const collaboratorRoutes = require('./routes/collaborator')
const followerRoutes = require('./routes/follower')
const linkNotificationRoutes = require('./routes/linkNotification')
const noteRoutes = require('./routes/note')
const sectionRoutes = require('./routes/section')
const userRoutes = require('./routes/user');
const workSpaceRoutes = require('./routes/workSpace')



app.use('/api/article', articleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/collaborator', collaboratorRoutes);
app.use('/api/follower', followerRoutes);
app.use('/api/linkNotification', linkNotificationRoutes);
app.use('/api/note', noteRoutes);
app.use('/api/section', sectionRoutes);
app.use('/api/user', userRoutes);
app.use('/api/workSpace', workSpaceRoutes);


app.use(errorHandler);

connectDB(process.env.MONGO_URL);


//production script
app.use(express.static('./frontend/build'))
app.get("*", () => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})


app.listen(port, (error) => {
  if (error) throw error
  console.log(`Server is running on port ${port}`);
});
