const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetVendorInboundPort } = require('../../../Ports/Inbound/Vendor/HandleGetVendorInboundPort');

const HandleGetVendorAdapter = async (id) => {
  try {
    
    const Vendor = await HandleGetVendorInboundPort(id);
    return Vendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetVendorAdapter };