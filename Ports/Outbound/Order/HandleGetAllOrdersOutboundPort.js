const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleGetAllOrdersProxy } = require('../../../Adapters/Outbound/Order/HandleGetAllOrdersProxy');

const HandleGetAllOrdersOutboundPort = async () => {
  try {
    
    const Orders = await HandleGetAllOrdersProxy();
    return Orders;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetAllOrdersOutboundPort };