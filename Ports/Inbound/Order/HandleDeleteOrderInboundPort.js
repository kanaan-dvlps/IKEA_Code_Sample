const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { DeleteOrder } = require('../../../DomainLogic/OrderDomainLogic');

const HandleDeleteOrderInboundPort = async (id) => {
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

module.exports = { HandleDeleteOrderInboundPort };