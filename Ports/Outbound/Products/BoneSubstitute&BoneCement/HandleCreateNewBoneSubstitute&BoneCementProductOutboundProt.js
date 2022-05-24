const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleCreateNewProductProxy } = require('../../../../Adapters/Outbound/Products/BoneSubstitute&BoneCement/HandleCreateNewBoneSubstitute&BoneCementProductProxy');

const HandleCreateNewProductOutboundPort = async (data) => {
  try {
    
    const NewProduct = await HandleCreateNewProductProxy(data);
    return NewProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleCreateNewProductOutboundPort };