// Mock data cho User
exports.mockUsers = [
  {
    _id: '660000000000000000000001',
    name: 'Nguyen Van A',
    password: 'hashedpassword',
    dob: '1990-01-01',
    phoneNumber: 123456789,
    email: 'a@example.com',
    gender: 'Male',
    status: 'Active',
    role: 'Waiter',
    createdAt: new Date()
  },
  {
    _id: '660000000000000000000002',
    name: 'Tran Thi B',
    password: 'hashedpassword',
    dob: '1995-05-05',
    phoneNumber: 987654321,
    email: 'b@example.com',
    gender: 'Female',
    status: 'Active',
    role: 'Chef',
    createdAt: new Date()
  }
];

// Mock data cho Reservation
exports.mockReservations = [
  {
    _id: '670000000000000000000001',
    customerId: '680000000000000000000001',
    quantity: 4,
    checkInTime: new Date(),
    status: 'Pending',
    statusHistory: [new Date()],
    deposit: 100000,
    createdAt: new Date(),
    isWalkIn: false,
    note: 'Bàn gần cửa sổ'
  },
  {
    _id: '670000000000000000000002',
    customerId: '680000000000000000000002',
    quantity: 2,
    checkInTime: new Date(),
    status: 'Pending',
    statusHistory: [new Date()],
    deposit: 0,
    createdAt: new Date(),
    isWalkIn: false,
    note: null
  }
];

// Mock data cho Table
exports.mockTables = [
  {
    _id: '690000000000000000000001',
    capacity: 4,
    tableName: 'A1',
    type: 'Normal',
    historyId: [],
    status: 'Available',
    createdAt: new Date()
  },
  {
    _id: '690000000000000000000002',
    capacity: 6,
    tableName: 'B2',
    type: 'Vip',
    historyId: [],
    status: 'Reserved',
    createdAt: new Date()
  }
]; 