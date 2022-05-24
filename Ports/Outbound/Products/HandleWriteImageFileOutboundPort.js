const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { HandleWriteImageFileProxy } = require('../../../Adapters/Outbound/Products/HandleWriteImageFileProxy');

const HandlePersistImageOutboundPort = async (data) => {
  try {
    
    const NewProductImage = await HandleWriteImageFileProxy(data);
    return NewProductImage;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandlePersistImageOutboundPort };