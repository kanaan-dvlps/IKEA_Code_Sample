const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleDeleteOrderInboundPort } = require('../../../Ports/Inbound/Order/HandleDeleteOrderInboundPort');

const HandleDeleteOrderAdapter = async (id) => {
  try {
    
    const DeletedOrder = await HandleDeleteOrderInboundPort(id);
    return DeletedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleDeleteOrderAdapter };