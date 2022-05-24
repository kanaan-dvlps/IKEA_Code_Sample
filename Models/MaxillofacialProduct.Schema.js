const mongoose = require('mongoose');

const MaxillofacialProductSchema = new mongoose.Schema({
  productName: { type: String },
  productCategory: { type: String },
  productVariant: { type: String },
  productQuantity: { type: Number },
  productInfo: { type: String },
  productSystem: { type: Array },
  productAdvantages: { type: Array },
  plates: { type: Array },
  screws: { type: Array },
  screwdriver: { type: Array },
  price: { type: Number },
});

const Product = mongoose.model('MaxillofacialProduct', MaxillofacialProductSchema);
module.exports = Product;