const { SERVER_ERROR } = require('../../../Helpers/Responses');
const { DeleteVendor } = require('../../../Repository/VendorDAO');


const HandleDeleteVendorProxy = async (id) => {
  try {
    
    const DeletedVendor = await DeleteVendor(id);
    return DeletedVendor;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteVendorProxy };