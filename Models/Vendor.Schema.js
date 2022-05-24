const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  username: { type: String },
  companyName: { type: String },
  companyPhone: { type: String },
  companyPostalCode: { type: String },
  invoiceAddress: { type: String },
  owner: { type: String },
  partnershipType: { type: String },
  address: { type: String },
  phone: { type: String },
  fax: { type: String },
  email: { type: String },
  websiteURL: { type: String },
  fieldOfProfession: { type: String },
  vendorType: { type: String },
  baned: { type: Boolean, default: false },
  password: { type: String },
  avatar: { type: String },
});

VendorSchema.index({
  companyName: 1,
  vendorType: 1,
  owner: 1,
});

const Vendor = mongoose.model('Vendor', VendorSchema);
module.exports = Vendor;