const { SERVER_ERROR } = require('../Helpers/Responses');
const RodScrewSystemProductModel = require('../Models/RodScrewSystemProduct.Schema');
const RodScrewSystemProductCategoryModel = require('../Models/RodScrewSystemProductCategory.Schema');

const CreateNewProduct = async (data) => {
  try {
    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, productInstrumentation, productCombination, productMaterial, price, productImages } = data;

    const NewProduct = await new RodScrewSystemProductModel({
      productName,
      productCategory,
      productVariant,
      productQuantity,
      price,
      productInfo,
      productSystem,
      productAdvantages,
      productInstrumentation,
      productCombination,
      productMaterial,
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

    const Products = await RodScrewSystemProductCategoryModel.aggregate([{
      $lookup: {
        from: 'products',
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

    const Product = await RodScrewSystemProductModel.findOne({ _id: id });
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

    const imageEtag = await RodScrewSystemProductModel.findOne({ productImageEtag: etag });
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

    const { id, productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, productInstrumentation, productCombination, productMaterial, price } = data;
    console.log(id);
    const UpdatedProduct = await RodScrewSystemProductModel.findOneAndUpdate({ _id: id }, {
      $set: {
        productName,
        productCategory,
        productVariant,
        productQuantity,
        price,
        productInfo,
        productSystem,
        productAdvantages,
        productInstrumentation,
        productCombination,
        productMaterial,
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

    const DeletedProduct = await RodScrewSystemProductModel.findByIdAndDelete({ _id: id });
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