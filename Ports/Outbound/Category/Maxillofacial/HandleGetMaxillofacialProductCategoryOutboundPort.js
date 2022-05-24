const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleGetCategoryProxy } = require('../../../../Adapters/Outbound/Category/Maxillofacial/HandleGetMaxillofacialProductCategoryProxy');

const HandleGetCategoryOutboundPort = async (id) => {
  try {
    
    const Category = await HandleGetCategoryProxy(id);
    return Category;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleGetCategoryOutboundPort };