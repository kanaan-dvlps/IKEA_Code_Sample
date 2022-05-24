const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleCreateCategoryInboundPort } = require('../../../../Ports/Inbound/Category/BoneSubstitute&BoneCement/HandleCreateBoneSubstitute&BoneCementProductCategoryInboundPort');

const HandleCreateCategoryAdapter = async (data) => {
  try {
    
    const NewCategory = await HandleCreateCategoryInboundPort(data);
    return NewCategory;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleCreateCategoryAdapter };