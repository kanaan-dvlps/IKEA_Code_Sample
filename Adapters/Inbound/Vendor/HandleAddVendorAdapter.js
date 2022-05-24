const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleAddVendorInboundPort } = require('../../../Ports/Inbound/Vendor/HandleAddVendorInboundPort');

const HandleAddVendorAdapter = async (data) => {
  try {
    
    const NewVendor = await HandleAddVendorInboundPort(data);
    return NewVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleAddVendorAdapter };