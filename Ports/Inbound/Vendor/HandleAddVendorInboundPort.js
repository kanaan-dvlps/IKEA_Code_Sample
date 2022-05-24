const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { AddNewVendor } = require('../../../DomainLogic/VendorDomainLogic');

const HandleAddVendorInboundPort = async (data) => {
  try {
    
    const NewVendor = await AddNewVendor(data);
    return NewVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleAddVendorInboundPort };