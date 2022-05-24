const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetVendorByUsernameProxy } = require('../../../Adapters/Outbound/Vendor/HandleGetVendorByUsernameProxy');

const HandleGetVendorByUsernameOutboundPort = async (username) => {
  try {
  
    const vendorInfo = await HandleGetVendorByUsernameProxy(username);
    return vendorInfo;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetVendorByUsernameOutboundPort };