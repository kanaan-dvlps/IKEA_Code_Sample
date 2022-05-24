const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetVendorProxy } = require('../../../Adapters/Outbound/Vendor/HandleGetVendorProxy');

const HandleGetVendorOutboundPort = async (id) => {
  try {
    
    const Vendor = await HandleGetVendorProxy(id);
    return Vendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetVendorOutboundPort };