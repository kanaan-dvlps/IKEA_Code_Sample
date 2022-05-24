const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { UpdateOrder } = require('../../../DomainLogic/OrderDomainLogic');

const HandleUpdateOrderInboundPort = async (data) => {
  try {
    
    const UpdatedOrder = await UpdateOrder(data);
    return UpdatedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleUpdateOrderInboundPort };