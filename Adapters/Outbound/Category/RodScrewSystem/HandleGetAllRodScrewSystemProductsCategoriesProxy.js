const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { GetAllCategories } = require('../../../../Repository/RodScrewSystemProductCategoryDAO');

const HandleGetAllCategoriesProxy = async (data) => {
  try {
    
    const Categories = await GetAllCategories(data);
    return Categories;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllCategoriesProxy };