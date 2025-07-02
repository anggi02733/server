const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const profileRoutes = require('./routes/profile');


// Middleware
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req,res) =>{
  res.json({message:"Server berhasil berjalan"});
});
// Routes
app.use('/api/profile', profileRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});