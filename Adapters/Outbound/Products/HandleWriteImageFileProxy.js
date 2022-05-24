const { SERVER_ERROR, ENTITY_ALREADY_EXISTS } = require('../../../Helpers/Responses');
const { EditProduct, GetProductImageEtag } = require('../../../Repository/RodScrewSystemProductDAO');

const HandleWriteImageFileProxy = async (DATA) => {
  try {
    const { id, productImageEtag, productImageName, productImageCategory } = DATA;
    const imageExists = await GetProductImageEtag(productImageEtag);

    if (imageExists) {
      return ENTITY_ALREADY_EXISTS;
    } else {
      const NewProductImage = await EditProduct(DATA);
      return NewProductImage;
    };

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleWriteImageFileProxy };