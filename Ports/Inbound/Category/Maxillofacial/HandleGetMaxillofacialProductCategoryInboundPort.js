const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { GetCategory } = require('../../../../DomainLogic/MaxillofacialProductCategoryDomainLogic');

const HandleGetCategoryInboundPort = async (id) => {
  try {
    
    const Category = await GetCategory(id);
    return Category;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetCategoryInboundPort };