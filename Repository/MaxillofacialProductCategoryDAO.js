const { SERVER_ERROR, INVALID_REQUEST, ENTITY_ALREADY_EXISTS, REQUEST_REJECTED } = require('../Helpers/Responses');
const MaxillofacialProductCategoryModel = require('../Models/MaxillofacialProductCategory.Schema');

const GetAllCategories = async () => {
  try {

    const Categories = await MaxillofacialProductCategoryModel.find();
    return Categories;

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

    if (id) {
      const Category = await MaxillofacialProductCategoryModel.findOne({ _id: id });
      return Category;
    }

    return {
      code: 406,
      type: REQUEST_REJECTED,
      message: error.message,
    }

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const CreateCategory = async (data) => {
  try {

    const { mainCategory, variant, productCategory, } = data;

    const CategoryExists = await MaxillofacialProductCategoryModel.aggregate([
      {
        $match: {
          productCategory
        }
      }
    ])

    if (CategoryExists.length > 0) {
      return {
        code: 406,
        type: ENTITY_ALREADY_EXISTS,
        message: CategoryExists,
      };
    } else if (mainCategory && variant && productCategory) {
      const NewEntity = await new MaxillofacialProductCategoryModel({
        mainCategory,
        variant,
        productCategory,
      });

      const SavedEntity = NewEntity.save();
      return SavedEntity;
    }

    return {
      code: 406,
      type: REQUEST_REJECTED,
      message: error.message,
    };

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    };
  };
};

const UpdateCategory = async (data) => {
  try {

    const { id, mainCategory, variant, productCategory, } = data;

    if (id && mainCategory && variant && productCategory) {
      const UpdatedCategory = await MaxillofacialProductCategoryModel.findOneAndUpdate({ _id: id }, {
        $set: {
          mainCategory,
          variant,
          productCategory,
        }
      }, {
        new: true,
      });

      return UpdatedCategory;
    }

    return {
      code: 406,
      type: REQUEST_REJECTED,
      message: error.message,
    }

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = {
  GetAllCategories,
  GetCategory,
  CreateCategory,
  UpdateCategory,
};