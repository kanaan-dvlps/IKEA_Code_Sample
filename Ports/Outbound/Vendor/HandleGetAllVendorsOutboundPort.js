const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetAllVendorsProxy } = require('../../../Adapters/Outbound/Vendor/HandleGetAllVendorsProxy');

const HandleGetAllVendorsOutboundPort = async () => {
  try {
    
    const Vendors = await HandleGetAllVendorsProxy();
    return Vendors;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllVendorsOutboundPort };