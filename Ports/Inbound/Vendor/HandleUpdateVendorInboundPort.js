const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { UpdateVendor } = require('../../../DomainLogic/VendorDomainLogic');

const HandleUpdateVendorInboundPort = async (data) => {
  try {
    
    const UpdatedVendor = await UpdateVendor(data);
    return UpdatedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateVendorInboundPort };