const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { UpdateOrder } = require('../../../Repository/OrderDAO');

const HandleUpdateOrderProxy = async (data) => {
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

module.exports = { HandleUpdateOrderProxy };