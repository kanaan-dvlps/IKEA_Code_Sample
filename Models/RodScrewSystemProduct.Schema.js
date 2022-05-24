const mongoose = require('mongoose');

const RodScrewSystemProductSchema = new mongoose.Schema({
  productName: { type: String },
  productCategory: { type: String },
  productVariant: { type: String },
  productQuantity: { type: Number },
  productInfo: { type: String },
  productSystem: { type: Array },
  productAdvantages: { type: Array },
  productInstrumentation: { type: Array },
  productCombination: { type: Array },
  productMaterial: { type: String },
  price: { type: Number },
  productImages: { type: Array }
  // TODO: Product Video??
});

RodScrewSystemProductSchema.index({
  productVariant: 1,
  productName: 1,
  productCategory: 1,
});

const Product = mongoose.model('Product', RodScrewSystemProductSchema);
module.exports = Product;

/*
  ? @ Product Schema Example
  productName: "Piltan",
  productCategory: "Cervical-Thoracic",
  productVariant: "RodAndScrewSystem",
  productQuantity: "100",
  productInfo: "Universal OCT Spinal Stabilization",
  productSystem: ["Universal system for dorsal stabilization", "From the occiput to the upper thoracic spine", "Polyaxial and cannulated screws", "Prepared for navigation"],
  productAdvantages: ["Cervical system for all common placement techniques", "Safety for user and patient by cannulated screws and a navigation option", "Patient-protective, given the minimally invasive access technique"],
  productInstrumentation: ["OC stabilization", "Different variants of lateral mass screws", "Magerl transarticular C1-C2 instrumentation", "Transpedicular instrumentation", "Wright trans-laminar instrumentation"],
  productCombination: ["Hybrid rod Ø 4,0 mm/6,0 mm,", "Rod-rod-connector, parallel and axial"],
  productMaterial: "Titanium Alloy",
  productImageEtag: "092jhf092jf20jfi0j322okj3fp",
  productImageName: "Piltan.jpeg",
  productImageCategory: "Cervical-Thoracic",
*/