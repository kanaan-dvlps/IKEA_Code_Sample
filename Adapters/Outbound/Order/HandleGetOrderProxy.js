const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { GetOrder } = require('../../../Repository/OrderDAO');

const HandleGetOrderProxy = async (id) => {
  try {
    
    const Order = await GetOrder(id);
    return Order;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleGetOrderProxy };