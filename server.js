const express = require('express');

const connectDB = require('./config/db');
const routes = require('./routes/routes');

const app = express();

// Connect Database
connectDB();

// Routes
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
