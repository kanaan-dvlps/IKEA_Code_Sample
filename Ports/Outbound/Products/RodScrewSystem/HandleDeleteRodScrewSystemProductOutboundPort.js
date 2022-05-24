const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleDeleteProductProxy } = require('../../../../Adapters/Outbound/Products/RodScrewSystem/HandleDeleteRodScrewSystemProductProxy');

const HandleDeleteProductOutboundPort = async (id) => {
  try {
    
    const DeletedProduct = await HandleDeleteProductProxy(id);
    return DeletedProduct;
    
  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteProductOutboundPort };