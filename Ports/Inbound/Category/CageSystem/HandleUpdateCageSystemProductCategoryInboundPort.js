const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { UpdateCategory } = require('../../../../DomainLogic/CageSystemProductCategoryDomainLogic');

const HandleUpdateCategoryInboundPort = async (data) => {
  try {
    
    const UpdatedCategory = await UpdateCategory(data);
    return UpdatedCategory;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateCategoryInboundPort };