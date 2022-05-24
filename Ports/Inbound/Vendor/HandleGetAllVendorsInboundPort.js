const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetAllVendors } = require('../../../DomainLogic/VendorDomainLogic');

const HandleGetAllVendorsInboundPort = async () => {
  try {
    
    const Vendors = await GetAllVendors();
    return Vendors;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllVendorsInboundPort };