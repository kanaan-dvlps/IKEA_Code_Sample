const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetProductProxy } = require('../../../../Adapters/Outbound/Products/RodScrewSystem/HandleGetRodScrewSystemProductProxy');

const HandleGetProductOutboundPort = async (id) => {
  try {
    
    const Product = await HandleGetProductProxy(id);
    return Product;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetProductOutboundPort };