const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleCreateNewProductInboundPort } = require('../../../../Ports/Inbound/Products/BoneSubstitute&BoneCement/HandleCreateNewBoneSubstitute&BoneCementProductInboundPort');

const HandleCreateNewProductAdapter = async (data) => {
  try {
    
    const NewProduct = await HandleCreateNewProductInboundPort(data);
    return NewProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleCreateNewProductAdapter };