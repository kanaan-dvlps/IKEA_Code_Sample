const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetAllCategoriesProxy } = require('../../../../Adapters/Outbound/Category/CageSystem/HandleGetAllCageSystemProductCategoryProxy');

const HandleGetAllCategoriesOutboundPort = async (data) => {
  try {
    
    const Categories = await HandleGetAllCategoriesProxy(data);
    return Categories;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllCategoriesOutboundPort };