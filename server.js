const express = require('express');
const path = require('path');

const connectDB = require('./config/db');
const routes = require('./routes/routes');

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/', routes);

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
