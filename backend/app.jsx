// backend/app.js
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

// Set up routes
app.use('/api', bookRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.log('Error syncing database:', error);
  });

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
