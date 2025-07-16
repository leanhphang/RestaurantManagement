const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: 'Food', required: true },
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  quantity: { type: Number, required: true },
  note: { type: String },
  price: { type: mongoose.Types.Decimal128, required: true },
  status: { type: String, enum: ['pending', 'preparing', 'ready_to_serve', 'served', 'cancelled'], default: 'pending' },
  statusHistory: [{
    status: { type: String, enum: ['pending', 'preparing', 'ready_to_serve', 'served', 'cancelled'] },
    changedAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OrderItem', OrderItemSchema); 