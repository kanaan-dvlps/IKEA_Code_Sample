const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { EditProduct } = require('../../../../Repository/BoneSubstitute&BoneCementProductDAO');

const HandleUpdateProductProxy = async (data) => {
  try {
    
    const UpdatedProduct = await EditProduct(data);
    return UpdatedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateProductProxy };