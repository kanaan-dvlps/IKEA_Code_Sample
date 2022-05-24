const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleDeleteProductInboundPort } = require('../../../../Ports/Inbound/Products/RodScrewSystem/HandleDeleteRodScrewSystemProductInboundPort');

const HandleDeleteProductAdapter = async (id) => {
  try {
    
    const DeletedProduct = await HandleDeleteProductInboundPort(id);
    return DeletedProduct;
    
  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteProductAdapter };