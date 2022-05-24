const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetAllVendorsInboundPort } = require('../../../Ports/Inbound/Vendor/HandleGetAllVendorsInboundPort');

const HandleGetAllVendorsAdapter = async () => {
  try {
    
    const Vendors = await HandleGetAllVendorsInboundPort();
    return Vendors;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllVendorsAdapter };