const { SERVER_ERROR } = require('../Helpers/Responses');
const { HandleAddVendorOutboundPort } = require('../Ports/Outbound/Vendor/HandleAddVendorOutboundPort');
const { HandleGetAllVendorsOutboundPort } = require('../Ports/Outbound/Vendor/HandleGetAllVendorsOutboundPort');
const { HandleGetVendorOutboundPort } = require('../Ports/Outbound/Vendor/HandleGetVendorOutboundPort');
const { HandleDeleteVendorOutboundPort } = require('../Ports/Outbound/Vendor/HandleDeleteVendorOutboundPort');
const { HandleUpdateVendorOutboundPort } = require('../Ports/Outbound/Vendor/HandleUpdateVendorOutboundPort');

const AddNewVendor = async (data) => {
  try {

    const { username, companyName, companyPhone, companyPostalCode, invoiceAddress, owner, partnershipType, address, phone, fax, email, websiteURL, fieldOfProfession, vendorType, baned, password, avatar } = data;

    const NewVendor = await HandleAddVendorOutboundPort({
      username,
      companyName,
      companyPhone,
      companyPostalCode,
      invoiceAddress,
      owner,
      partnershipType,
      address,
      phone,
      fax,
      email,
      websiteURL,
      fieldOfProfession,
      vendorType,
      baned,
      password,
      avatar
    });
    
    return NewVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetAllVendors = async () => {
  try {

    const Vendors = await HandleGetAllVendorsOutboundPort();
    return Vendors;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetVendor = async (id) => {
  try {

    const Vendor = await HandleGetVendorOutboundPort(id);
    return Vendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const DeleteVendor = async (id) => {
  try {

    const DeletedVendor = await HandleDeleteVendorOutboundPort(id);
    return DeletedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const UpdateVendor = async (data) => {
  try {

    const UpdatedVendor = await HandleUpdateVendorOutboundPort(data);
    return UpdatedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = {
  AddNewVendor,
  GetAllVendors,
  GetVendor,
  DeleteVendor,
  UpdateVendor,
}