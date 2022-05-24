const { SERVER_ERROR } = require('../Helpers/Responses');
const BoneSubstituteAndBoneCementModel = require('../Models/BoneSubstitute&BoneCement.Schema');
const BoneSubstituteAndBoneCementProductCategoryModel = require('../Models/BoneSubstitute&BoneCementProductCategory.Schema');

const CreateNewProduct = async (data) => {
  try {

    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, price, productImages } = data;

    const NewProduct = await new BoneSubstituteAndBoneCementModel({
      productName,
      productCategory,
      productVariant,
      productQuantity,
      price,
      productInfo,
      productSystem,
      productAdvantages,
      productImages,
    });

    const SavedProduct = await NewProduct.save();
    return SavedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
}

const GetAllProducts = async () => {
  try {

    const Products = await BoneSubstituteAndBoneCementProductCategoryModel.aggregate([{
      $lookup: {
        from: 'bonesubstituteandbonecementproducts',
        localField: 'productCategory',
        foreignField: 'productCategory',
        as: 'products'
      }
    }]);
    return Products;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetProduct = async (id) => {
  try {

    const Product = await BoneSubstituteAndBoneCementModel.findOne({ _id: id });
    return Product;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetProductImageEtag = async (etag) => {
  try {

    const imageEtag = await BoneSubstituteAndBoneCementModel.findOne({ productImageEtag: etag });
    return imageEtag;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const EditProduct = async (data) => {
  try {

    const { id, productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, price } = data;

    const UpdatedProduct = await BoneSubstituteAndBoneCementModel.findOneAndUpdate({ _id: id }, {
      $set: {
        productName,
        productCategory,
        productVariant,
        productQuantity,
        price,
        productInfo,
        productSystem,
        productAdvantages,
      }
    }, {
      new: true
    });

    return UpdatedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const DeleteProduct = async (id) => {
  try {

    const DeletedProduct = await BoneSubstituteAndBoneCementModel.findByIdAndDelete({ _id: id });
    return DeletedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = {
  CreateNewProduct,
  GetAllProducts,
  GetProduct,
  GetProductImageEtag,
  EditProduct,
  DeleteProduct,
};