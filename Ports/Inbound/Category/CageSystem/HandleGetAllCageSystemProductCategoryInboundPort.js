const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { GetAllCatogries } = require('../../../../DomainLogic/CageSystemProductCategoryDomainLogic');

const HandleGetAllCategoriesInboundPort = async () => {
  try {
    
    const Categories = await GetAllCatogries();
    return Categories;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllCategoriesInboundPort };