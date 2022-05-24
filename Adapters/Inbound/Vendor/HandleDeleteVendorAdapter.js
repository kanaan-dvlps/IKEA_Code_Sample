const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleDeleteVendorInboundPort } = require('../../../Ports/Inbound/Vendor/HandleDeleteVendorInboundPort');

const HandleDeleteVendorAdapter = async (id) => {
  try {
    
    const DeletedVendor = await HandleDeleteVendorInboundPort(id);
    return DeletedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteVendorAdapter };