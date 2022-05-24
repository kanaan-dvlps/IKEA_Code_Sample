const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetProductInboundPort } = require('../../../../Ports/Inbound/Products/RodScrewSystem/HandleGetRodScrewSystemProductInboundPort');

const HandleGetProductAdapter = async (id) => {
  try {
    
    const Product = await HandleGetProductInboundPort(id);
    return Product;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetProductAdapter };