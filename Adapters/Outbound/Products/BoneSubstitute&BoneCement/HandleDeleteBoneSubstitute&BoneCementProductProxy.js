const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { DeleteProduct } = require('../../../../Repository/BoneSubstitute&BoneCementProductDAO');

const HandleDeleteProductProxy = async (id) => {
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

module.exports = { HandleDeleteProductProxy };