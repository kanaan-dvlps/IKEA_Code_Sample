const { SERVER_ERROR } = require('../Helpers/Responses');
const CageSystemProductModel = require('../Models/CageSystemProduct.Schema');
const CageSystemProductCategoryModel = require('../Models/CageSystemProductCategory.Schema');

const CreateNewProduct = async (data) => {
  try {
    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, price, productImages } = data;

    const NewProduct = await new CageSystemProductModel({
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

    const Products = await CageSystemProductCategoryModel.aggregate([{
      $lookup: {
        from: 'cageproducts',
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

    const Product = await CageSystemProductModel.findOne({ _id: id });
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

    const imageEtag = await CageSystemProductModel.findOne({ productImageEtag: etag });
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
    console.log(id);
    const UpdatedProduct = await CageSystemProductModel.findOneAndUpdate({ _id: id }, {
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

    const DeletedProduct = await CageSystemProductModel.findByIdAndDelete({ _id: id });
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