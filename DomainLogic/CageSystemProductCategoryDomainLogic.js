const { SERVER_ERROR } = require('../Helpers/Responses');
const { HandleCreateCategoryOutboundPort } = require('../Ports/Outbound/Category/CageSystem/HandleCreateCageSystemProductCategoryOutboundPort');
const { HandleGetAllCategoriesOutboundPort } = require('../Ports/Outbound/Category/CageSystem/HandleGetAllCageSystemProductCategoryOutboundPort');
const { HandleGetCategoryOutboundPort } = require('../Ports/Outbound/Category/CageSystem/HandleGetCageSystemProductCategoryOutboundPort');
const { HandleUpdateCategoryOutboundPort } = require('../Ports/Outbound/Category/CageSystem/HandleUpdateCageSystemProductCategoryOutboundPort');

const CreateCategory = async (data) => {
  try {

    const result = await HandleCreateCategoryOutboundPort(data);
    if (result.code > 300 && result.code < 400) {
      throw result;
    }
    return result;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const DeleteCategory = async (id) => { };

const GetAllCatogries = async () => {
  try {

    const result = await HandleGetAllCategoriesOutboundPort();
    if (result.code > 300 && result.code < 400) {
      throw result;
    }
    return result;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetCategory = async (id) => {
  try {

    const result = await HandleGetCategoryOutboundPort(id);
    if (result.code > 300 && result.code < 400) {
      throw result;
    }
    return result;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const UpdateCategory = async (data) => {
  try {

    const result = await HandleUpdateCategoryOutboundPort(data);
    if (result.code > 300 && result.code < 400) {
      throw result;
    }
    return result;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = {
  CreateCategory,
  GetAllCatogries,
  GetCategory,
  UpdateCategory,
};