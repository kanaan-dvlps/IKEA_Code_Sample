const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { UpdateProduct } = require('../../../../DomainLogic/MaxillofacialProductDomainLogic');

const HandleUpdateProductInboundPort = async (data) => {
  try {
    
    const UpdatedProduct = await UpdateProduct(data);
    return UpdatedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateProductInboundPort };
