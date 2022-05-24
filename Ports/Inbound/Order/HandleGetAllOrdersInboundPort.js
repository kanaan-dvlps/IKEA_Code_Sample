const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetAllOrders } = require('../../../DomainLogic/OrderDomainLogic');

const HandleGetAllOrdersInboundPort = async () => {
  try {
    
    const Orders = await GetAllOrders();
    return Orders;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetAllOrdersInboundPort };