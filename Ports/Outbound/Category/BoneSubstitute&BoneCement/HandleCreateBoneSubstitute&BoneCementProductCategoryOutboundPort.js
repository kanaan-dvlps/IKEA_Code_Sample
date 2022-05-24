const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleCreateCategoryProxy } = require('../../../../Adapters/Outbound/Category/BoneSubstitute&BoneCement/HandleCreateBoneSubstitute&BoneCementProductCategoryProxy');

const HandleCreateCategoryOutboundPort = async (data) => {
  try {
    
    const NewCategory = await HandleCreateCategoryProxy(data);
    return NewCategory;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleCreateCategoryOutboundPort };