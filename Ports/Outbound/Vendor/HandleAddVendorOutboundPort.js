const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleAddVendorProxy } = require('../../../Adapters/Outbound/Vendor/HandleAddVendorProxy');

const HandleAddVendorOutboundPort = async (data) => {
  try {
    
    const NewVendor = await HandleAddVendorProxy(data);
    return NewVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleAddVendorOutboundPort };