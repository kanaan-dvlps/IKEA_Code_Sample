const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleCreateOrderProxy } = require('../../../Adapters/Outbound/Order/HandleCreateOrderProxy');

const HandleCreateOrderOutboundPort = async (data) => {
  try {
    
    const NewOrder = await HandleCreateOrderProxy(data);
    return NewOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleCreateOrderOutboundPort };