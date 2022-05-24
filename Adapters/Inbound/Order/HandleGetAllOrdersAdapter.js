const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetAllOrdersInboundPort } = require('../../../Ports/Inbound/Order/HandleGetAllOrdersInboundPort');

const HandleGetAllOrdersAdapter = async () => {
  try {
    
    const Orders = await HandleGetAllOrdersInboundPort();
    return Orders;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetAllOrdersAdapter };