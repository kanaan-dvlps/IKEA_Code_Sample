const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetCategoryInboundPort } = require('../../../../Ports/Inbound/Category/Maxillofacial/HandleGetMaxillofacialProductCategoryInboundPort');

const HandleGetCategoryAdapter = async (id) => {
  try {
    
    const Category = await HandleGetCategoryInboundPort(id);
    return Category;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetCategoryAdapter };