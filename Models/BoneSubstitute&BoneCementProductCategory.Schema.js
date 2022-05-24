const mongoose = require('mongoose');

const BoneSubstituteAndBoneCementProductCategorySchema = new mongoose.Schema({
  mainCategory: { type: String },
  variant: { type: String },
  productCategory: { type: String },
});

const Product = mongoose.model('BoneSubstituteAndBoneCementProductCategory', BoneSubstituteAndBoneCementProductCategorySchema);
module.exports = Product;

/*
  ? @ CageCategory Schema Example
  * {
  *   "_id" : ObjectId("623910964ef73f1bbe91a915"),
  *   "mainCategory" : "spine",
  *   "variant" : "Cage",
  *   "productCategory" : "Cervical"
  * }

*/