const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { GetProduct } = require('../../../../Repository/BoneSubstitute&BoneCementProductDAO');

const HandleGetProductProxy = async (id) => {
  try {
    
    const Product = await GetProduct(id);
    return Product;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetProductProxy };