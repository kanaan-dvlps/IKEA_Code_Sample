const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetAllProductsPort } = require('../../../../Ports/Inbound/Products/RodScrewSystem/HandleGettAllRodScrewSystemProductsInboundPort');

const HandleGetAllProductsAdapter = async () => {
  try {
    
    const Products = await HandleGetAllProductsPort();
    return Products;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllProductsAdapter };