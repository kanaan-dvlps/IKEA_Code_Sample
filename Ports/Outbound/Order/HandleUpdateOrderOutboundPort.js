const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleUpdateOrderProxy } = require('../../../Adapters/Outbound/Order/HandleUpdateOrderProxy');

const HandleUpdateOrderOutboundPort = async (data) => {
  try {
    
    const UpdatedOrder = await HandleUpdateOrderProxy(data);
    return UpdatedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleUpdateOrderOutboundPort };