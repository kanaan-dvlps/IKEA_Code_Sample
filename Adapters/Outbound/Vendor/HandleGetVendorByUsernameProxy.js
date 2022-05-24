const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetVendorInfoByUsername } = require('../../../Repository/VendorDAO');

const HandleGetVendorByUsernameProxy = async (username) => {
  try {
  
    const VendorInfo = await GetVendorInfoByUsername(username);
    return VendorInfo;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetVendorByUsernameProxy };