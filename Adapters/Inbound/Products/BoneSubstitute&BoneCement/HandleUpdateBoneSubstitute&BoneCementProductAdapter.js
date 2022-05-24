const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleUpdateProductInboundPort } = require('../../../../Ports/Inbound/Products/BoneSubstitute&BoneCement/HandleUpdateBoneSubstitute&BoneCementProductInboundPort');

const HandleUpdateProductAdapter = async (data) => {
  try {
    
    const UpdatedProduct = await HandleUpdateProductInboundPort(data);
    return UpdatedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateProductAdapter };