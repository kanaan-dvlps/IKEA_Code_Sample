const { SERVER_ERROR, ENTITY_NOT_FOUND, ENTITY_ALREADY_EXISTS, WRONG_CREDENTIALS } = require('../Helpers/Responses');
const VendorModel = require('../Models/Vendor.Schema');
const bcrypt = require('bcryptjs');

const AddVendor = async (data) => {
  try {

    const { username, companyName, companyPhone, companyPostalCode, invoiceAddress, owner, partnershipType, address, phone, fax, email, websiteURL, fieldOfProfession, vendorType, baned, password, avatar } = data;

    const CompanyExists = await VendorModel.aggregate([
      {
        $match: {
          username,
        }
      }
    ]);

    if (CompanyExists.length > 0) {
      return {
        code: 406,
        type: ENTITY_ALREADY_EXISTS,
        message: CompanyExists
      }
    } else {

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const NewVendor = await new VendorModel({
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
        password: hashedPassword,
        avatar,
      });

      // ? This function will return true which indicates that the hash and the password actually match hence the user has entered the password correctly
      // const test = await bcrypt.compare(password, hashedPassword);
      // console.log('test', test);

      const SavedVendor = await NewVendor.save();
      return SavedVendor;

    }

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetVendorByUsername = async (username, password) => {
  try {

    const Vendor = await VendorModel.findOne({ username: username });

    if (Vendor === null) { // If the vendor doesn't exist it means they're not authorized to enter the order part
      return {
        code: 401,
        type: ENTITY_NOT_FOUND,
        message: 'Unauthorized'
      }
    } else if (Vendor !== null) { // If the Vendor is not null (since password of null doesn't exist we should check) it will compare the entered password with the existing one in the DB
      const isPasswordCorrect = await bcrypt.compare(password, Vendor.password);
      if (isPasswordCorrect !== false) { // If the compared passwords match the token will be generated in the domain logic
        return Vendor;
      } else {
        return {
          code: 401,
          type: WRONG_CREDENTIALS,
          message: 'Unauthorized'
        }
      }
    }


  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetVendorInfoByUsername = async (username) => {
  try {

    const Vendor = await VendorModel.findOne({ username: username });

    if (Vendor === null) {

      return ENTITY_NOT_FOUND;

    } else if (Vendor !== null) {

      return Vendor;

    }

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

    const Vendor = await VendorModel.findOne({ _id: id }).lean();
    return Vendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetVendors = async () => {
  try {

    const Vendors = await VendorModel.find();
    return Vendors;

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

    const { id, username, companyName, companyPhone, companyPostalCode, invoiceAddress, owner, partnershipType, address, phone, fax, email, websiteURL, fieldOfProfession, vendorType, baned } = data;

    const UpdatedVendor = await VendorModel.findOneAndUpdate({ _id: id }, {
      $set: {
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
      }
    },
      {
        new: true,
      });

    return UpdatedVendor;

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

    const DeletedVendor = await VendorModel.findByIdAndDelete({ _id: id });
    return DeletedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = {
  AddVendor,
  GetVendor,
  GetVendorByUsername,
  GetVendorInfoByUsername,
  GetVendors,
  UpdateVendor,
  DeleteVendor,
}