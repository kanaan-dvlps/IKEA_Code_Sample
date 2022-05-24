const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetOrderInboundPort } = require('../../../Ports/Inbound/Order/HandleGetOrderInboundPort');

const HandleGetOrderAdapter = async (id) => {
  try {
    
    const Order = await HandleGetOrderInboundPort(id);
    return Order;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetOrderAdapter };