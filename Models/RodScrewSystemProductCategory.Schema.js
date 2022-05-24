const mongoose = require('mongoose');

const RodScrewSystemProductCategorySchema = new mongoose.Schema({
  mainCategory: { type: String },
  variant: { type: String },
  productCategory: { type: String },
});

const RodScrewSystemProductCategory = mongoose.model('Category', RodScrewSystemProductCategorySchema);
module.exports = RodScrewSystemProductCategory;

/*
  @ Category Schema Example
  * {
  *   "_id" : ObjectId("623910964ef73f1bbe91a915"),
  *   "mainCategory" : "spine",
  *   "variant" : "rod",
  *   "productCategory" : "Cervical-Thoracic"
  * }

*/