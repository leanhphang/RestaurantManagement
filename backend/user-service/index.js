const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối database
connectDB();

// Route mẫu
app.get('/', (req, res) => {
  res.json({ message: 'User Service is running!' });
});

// Lắng nghe server
app.listen(PORT, () => {
  console.log(`User Service đang chạy tại http://localhost:${PORT}`);
}); 