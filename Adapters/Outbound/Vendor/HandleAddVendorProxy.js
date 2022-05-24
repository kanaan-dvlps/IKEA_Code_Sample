const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { AddVendor } = require('../../../Repository/VendorDAO');

const HandleAddVendorProxy = async (data) => {
  try {
    
    const NewVendor = await AddVendor(data);
    return NewVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleAddVendorProxy };