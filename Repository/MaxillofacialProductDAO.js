const { SERVER_ERROR } = require('../Helpers/Responses');
const MaxillofacialProductModel = require('../Models/MaxillofacialProduct.Schema');
const MaxillofacialProductCategoryModel = require('../Models/MaxillofacialProductCategory.Schema');

const CreateNewProduct = async (data) => {
  try {
    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, plates, screws, screwdriver, price, maxillofacialImages } = data;

    const NewProduct = await new MaxillofacialProductModel({
      productName,
      productCategory,
      productVariant,
      productQuantity,
      price,
      productInfo,
      productSystem,
      productAdvantages,
      plates,
      screws,
      screwdriver,
      maxillofacialImages,
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

    const Products = await MaxillofacialProductCategoryModel.aggregate([{
      $lookup: {
        from: 'maxillofacialproducts',
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

    const Product = await MaxillofacialProductModel.findOne({ _id: id });
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

    const imageEtag = await MaxillofacialProductModel.findOne({ productImageEtag: etag });
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

    const { id, productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, plates, screws, screwdriver, price } = data;
    console.log(id);
    const UpdatedProduct = await MaxillofacialProductModel.findOneAndUpdate({ _id: id }, {
      $set: {
        productName,
        productCategory,
        productVariant,
        productQuantity,
        price,
        productInfo,
        productSystem,
        productAdvantages,
        plates,
        screws,
        screwdriver,
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

    const DeletedProduct = await MaxillofacialProductModel.findByIdAndDelete({ _id: id });
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