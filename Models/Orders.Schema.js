const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  companyName: { type: String },
  companyPhone: { type: String },
  companyPostalCode: { type: String },
  companyEmail: { type: String },
  invoiceAddress: { type: String },
  companyId: { type: String },
  orderDate: { type: Date },
  orderDetail: { type: Array },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;