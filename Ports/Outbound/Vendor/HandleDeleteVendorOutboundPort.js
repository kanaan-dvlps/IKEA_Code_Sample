const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleDeleteVendorProxy } = require('../../../Adapters/Outbound/Vendor/HandleDeleteVendorProxy');

const HandleDeleteVendorOutboundPort = async (id) => {
  try {
    
    const DeletedVendor = await HandleDeleteVendorProxy(id);
    return DeletedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteVendorOutboundPort };