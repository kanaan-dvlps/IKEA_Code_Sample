const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetAllOrders } = require('../../../Repository/OrderDAO');

const HandleGetAllOrdersProxy = async () => {
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

module.exports = { HandleGetAllOrdersProxy };