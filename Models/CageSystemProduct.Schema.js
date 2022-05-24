const mongoose = require('mongoose');

const CageSystemProductSchema = new mongoose.Schema({
  productName: { type: String },
  productCategory: { type: String },
  productVariant: { type: String },
  productQuantity: { type: Number },
  productInfo: { type: String },
  productSystem: { type: Array },
  productAdvantages: { type: Array },
  price: { type: Number },
  productImages: { type: Array },
  // TODO: Product Video??
});

CageSystemProductSchema.index({
  productVariant: 1,
  productName: 1,
  productCategory: 1,
});

const Product = mongoose.model('CageProduct', CageSystemProductSchema);
module.exports = Product;

/*
  ? @ CageProduct Schema Example
  * productName: "cerv-X™",
  * productVariant: "Cage",
  * productCategory: "Cervical",
  * productQuantity: "100",
  * productInfo: "Universal OCT Spinal Stabilization",
  * productSystem: ["Universal system for dorsal stabilization", "From the occiput to the upper thoracic spine", "Polyaxial and cannulated screws", "Prepared for navigation"],
  * productAdvantages: ["Cervical system for all common placement techniques", "Safety for user and patient by cannulated screws and a navigation option", "Patient-protective, given the minimally invasive access technique"],
*/