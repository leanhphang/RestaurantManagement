const express = require('express');
const router = express.Router();
const { mockUsers, mockReservations, mockTables } = require('../mockData');

// Mock API lấy danh sách user
router.get('/users', (req, res) => {
  res.json(mockUsers);
});

// Mock API lấy danh sách reservation
router.get('/reservations', (req, res) => {
  res.json(mockReservations);
});

// Mock API lấy danh sách table
router.get('/tables', (req, res) => {
  res.json(mockTables);
});

module.exports = router; 