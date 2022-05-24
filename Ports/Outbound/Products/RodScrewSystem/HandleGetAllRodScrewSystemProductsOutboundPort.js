const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetAllProductsProxy } = require('../../../../Adapters/Outbound/Products/RodScrewSystem/HandleGetAllRodScrewSystemProductsProxy');

const HandleGetAllProductsOutboundPort = async () => {
  try {

    const Products = await HandleGetAllProductsProxy();
    return Products;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllProductsOutboundPort };