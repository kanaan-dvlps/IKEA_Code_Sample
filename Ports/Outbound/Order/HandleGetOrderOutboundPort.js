const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetOrderProxy } = require('../../../Adapters/Outbound/Order/HandleGetOrderProxy');

const HandleGetOrderOutboundPort = async (id) => {
  try {
    
    const Order = await HandleGetOrderProxy(id);
    return Order;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetOrderOutboundPort };