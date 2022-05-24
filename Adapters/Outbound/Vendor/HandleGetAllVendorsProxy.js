const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetVendors } = require('../../../Repository/VendorDAO');


const HandleGetAllVendorsProxy = async () => {
  try {
    
    const Vendors = await GetVendors();
    return Vendors;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllVendorsProxy };