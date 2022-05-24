const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleCreateOrderInboundPort } = require('../../../Ports/Inbound/Order/HandleCreateOrderInboundPort');

const HandleCreateOrderAdapter = async (data) => {
  try {
    
    const NewOrder = await HandleCreateOrderInboundPort(data);
    return NewOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleCreateOrderAdapter };