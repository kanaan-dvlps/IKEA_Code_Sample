const mongoose = require('mongoose');

const CageSystemProductCategorySchema = new mongoose.Schema({
  mainCategory: { type: String },
  variant: { type: String },
  productCategory: { type: String },
});

const CageSystemProductCategory = mongoose.model('CageCategory', CageSystemProductCategorySchema);
module.exports = CageSystemProductCategory;

/*
  ? @ CageCategory Schema Example
  * {
  *   "_id" : ObjectId("623910964ef73f1bbe91a915"),
  *   "mainCategory" : "spine",
  *   "variant" : "Cage",
  *   "productCategory" : "Cervical"
  * }

*/