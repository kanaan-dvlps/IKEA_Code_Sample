const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetAllProductsPort } = require('../../../../Ports/Inbound/Products/CagesSystem/HandleGettAllCagesSystemProductInboundPort');

const HandleGetAllProductsAdapter = async () => {
  try {
    
    const Contacts = await HandleGetAllProductsPort();
    return Contacts;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllProductsAdapter };