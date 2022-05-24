const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { CreateOrder } = require('../../../DomainLogic/OrderDomainLogic');

const HandleCreateOrderInboundPort = async (data) => {
  try {
    
    const NewOrder = await CreateOrder(data);
    return NewOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleCreateOrderInboundPort };