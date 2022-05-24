const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleUpdateCategoryInboundPort } = require('../../../../Ports/Inbound/Category/Maxillofacial/HandleUpdateMaxillofacialProductCategoryInboundPort');

const HandleUpdateCategoryAdapter = async (data) => {
  try {
    
    const UpdatedCategory = await HandleUpdateCategoryInboundPort(data);
    return UpdatedCategory;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateCategoryAdapter };