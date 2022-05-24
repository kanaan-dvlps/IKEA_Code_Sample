const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { GetAllProducts } = require('../../../../DomainLogic/BoneSubstitute&BoneCementDomainLogic');

const HandleGetAllProductsPort = async () => {
  try {
    
    const Products = await GetAllProducts();
    return Products;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllProductsPort };