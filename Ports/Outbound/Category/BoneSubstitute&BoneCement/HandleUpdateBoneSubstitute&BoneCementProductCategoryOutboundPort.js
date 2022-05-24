const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleUpdateCategoryProxy } = require('../../../../Adapters/Outbound/Category/BoneSubstitute&BoneCement/HandleUpdateBoneSubstitute&BoneCementProductCategoryProxy');

const HandleUpdateCategoryOutboundPort = async (data) => {
  try {
    
    const UpdatedCategory = await HandleUpdateCategoryProxy(data);
    return UpdatedCategory;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleUpdateCategoryOutboundPort };