const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetVendor } = require('../../../DomainLogic/VendorDomainLogic');

const HandleGetVendorInboundPort = async (id) => {
  try {
    
    const Vendor = await GetVendor(id);
    return Vendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetVendorInboundPort };