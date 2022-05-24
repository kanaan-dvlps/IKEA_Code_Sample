const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleUpdateOrderInboundPort } = require('../../../Ports/Inbound/Order/HandleUpdateOrderInboundPort');

const HandleUpdateOrderAdapter = async (data) => {
  try {
    
    const UpdatedOrder = await HandleUpdateOrderInboundPort(data);
    return UpdatedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleUpdateOrderAdapter };