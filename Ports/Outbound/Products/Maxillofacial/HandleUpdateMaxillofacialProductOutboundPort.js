const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleUpdateProductProxy } = require('../../../../Adapters/Outbound/Products/Maxillofacial/HandleUpdateMaxillofacialProductProxy');

const HandleUpdateProductOutboundPort = async (data) => {
  try {
    
    const UpdatedProduct = await HandleUpdateProductProxy(data);
    return UpdatedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateProductOutboundPort };