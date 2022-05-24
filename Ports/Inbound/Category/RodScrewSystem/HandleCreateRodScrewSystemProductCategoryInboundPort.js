const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { CreateCategory } = require('../../../../DomainLogic/RodScrewSystemProductCategoryDomainLogic');

const HandleCreateCategoryInboundPort = async (data) => {
  try {
    
    const NewCategory = await CreateCategory(data);
    return NewCategory;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleCreateCategoryInboundPort };