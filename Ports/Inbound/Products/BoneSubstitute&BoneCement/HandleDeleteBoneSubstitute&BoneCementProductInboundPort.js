const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { DeleteProduct } = require('../../../../DomainLogic/BoneSubstitute&BoneCementDomainLogic');

const HandleDeleteProductInboundPort = async (id) => {
  try {
    
    const DeletedProduct = await DeleteProduct(id);
    return DeletedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteProductInboundPort };