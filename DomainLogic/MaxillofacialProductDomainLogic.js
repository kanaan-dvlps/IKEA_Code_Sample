const { SERVER_ERROR } = require('../Helpers/Responses');
const { HandleGetAllProductsOutboundPort } = require('../Ports/Outbound/Products/Maxillofacial/HandleGetAllMaxillofacialProductsOutboundPort');
const { HandleGetProductOutboundPort } = require('../Ports/Outbound/Products/Maxillofacial/HandleGetMaxillofacialProductOutboundPort');
const { HandleCreateNewProductOutboundPort } = require('../Ports/Outbound/Products/Maxillofacial/HandleCreateNewMaxillofacialProductOutboundProt');
const { HandleUpdateProductOutboundPort } = require('../Ports/Outbound/Products/Maxillofacial/HandleUpdateMaxillofacialProductOutboundPort');
const { HandleDeleteProductOutboundPort } = require('../Ports/Outbound/Products/Maxillofacial/HandleDeleteMaxillofacialProductOutboundPort');


const GetAllProducts = async () => {
  try {

    const Products = await HandleGetAllProductsOutboundPort();
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

    const Product = await HandleGetProductOutboundPort(id);
    return Product;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
}

const CreateNewProduct = async (DATA) => {
  try {
    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, plates, screws, screwdriver, price, maxillofacialImages } = DATA;

    const NewProduct = await HandleCreateNewProductOutboundPort({
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
    // console.log(NewProduct);
    return NewProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
}

const UpdateProduct = async (data) => {
  try {

    const UpdatedProduct = await HandleUpdateProductOutboundPort(data);
    return UpdatedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
}

const DeleteProduct = async (id) => {
  try {

    const DeletedProduct = await HandleDeleteProductOutboundPort(id);
    return DeletedProduct;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
}

module.exports = {
  GetAllProducts,
  GetProduct,
  CreateNewProduct,
  UpdateProduct,
  DeleteProduct,
};