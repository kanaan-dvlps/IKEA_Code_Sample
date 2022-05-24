const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleDeleteOrderProxy } = require('../../../Adapters/Outbound/Order/HandleDeleteOrderProxy');

const HandleDeleteOrderOutboundPort = async (id) => {
  try {
    
    const DeletedOrder = await HandleDeleteOrderProxy(id);
    return DeletedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleDeleteOrderOutboundPort };