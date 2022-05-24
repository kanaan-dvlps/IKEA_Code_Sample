const mongoose = require('mongoose');

const MaxillofacialProductCategorySchema = new mongoose.Schema({
  mainCategory: { type: String },
  variant: { type: String },
  productCategory: { type: String },
});

const MaxillofacialProductCategory = mongoose.model('MaxillofacialCategory', MaxillofacialProductCategorySchema);
module.exports = MaxillofacialProductCategory;

/*
  @ Category Schema Example
  * {
  *   "_id" : ObjectId("623910964ef73f1bbe91a915"),
  *   "mainCategory" : "head-face",
  *   "variant" : "cranio-maxillofacial",
  *   "productCategory" : "Cranio-Plating-System"
  * }

*/