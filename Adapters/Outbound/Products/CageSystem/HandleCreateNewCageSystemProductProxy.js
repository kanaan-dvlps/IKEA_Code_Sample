const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { CreateNewProduct } = require('../../../../Repository/CagesProductDAO');

const HandleCreateNewProductProxy = async (data) => {
  try {
    
    const NewProduct = await CreateNewProduct(data);
    return NewProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleCreateNewProductProxy };