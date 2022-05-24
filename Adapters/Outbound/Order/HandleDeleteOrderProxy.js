const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { DeleteOrder } = require('../../../Repository/OrderDAO');

const HandleDeleteOrderProxy = async (id) => {
  try {
    
    const DeletedOrder = await DeleteOrder(id);
    return DeletedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = { HandleDeleteOrderProxy };