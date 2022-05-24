const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleUpdateVendorProxy } = require('../../../Adapters/Outbound/Vendor/HandleUpdateVendorProxy');

const HandleUpdateVendorOutboundPort = async (data) => {
  try {
    
    const UpdatedVendor = await HandleUpdateVendorProxy(data);
    return UpdatedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateVendorOutboundPort };