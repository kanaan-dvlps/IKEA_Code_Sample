const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleUpdateVendorInboundPort } = require('../../../Ports/Inbound/Vendor/HandleUpdateVendorInboundPort');

const HandleUpdateVendorAdapter = async (data) => {
  try {
    
    const UpdatedVendor = await HandleUpdateVendorInboundPort(data);
    return UpdatedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateVendorAdapter };