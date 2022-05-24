const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetAllCategoriesInboundPort } = require('../../../../Ports/Inbound/Category/BoneSubstitute&BoneCement/HandleGetAllBoneSubstitute&BoneCementProductCategoryInboundPort');

const HandleGetAllCategoriesAdapter = async () => {
  try {
    
    const Categories = await HandleGetAllCategoriesInboundPort();
    return Categories;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetAllCategoriesAdapter };