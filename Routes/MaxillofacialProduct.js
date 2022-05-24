const { SERVER_ERROR, REQUEST_SUCCESSFUL, ENTITY_CREATED, INVALID_REQUEST, ENTITY_UPDATED } = require('../Helpers/Responses');
const router = require('express').Router();
const Joi = require('joi');
const { HandleGetAllProductsAdapter } = require('../Adapters/Inbound/Products/Maxillofacial/HandleGetAllMaxillofacialProductAdapter');
const { HandleGetProductAdapter } = require('../Adapters/Inbound/Products/Maxillofacial/HandleGetMaxillofacialProductAdapter');
const { HandleCreateNewProductAdapter } = require('../Adapters/Inbound/Products/Maxillofacial/HandleCreateNewMaxillofacialProductAdapter');
const { HandleUpdateProductAdapter } = require('../Adapters/Inbound/Products/Maxillofacial/HandleUpdateMaxillofacialProductAdapter');
const { HandleDeleteProductAdapter } = require('../Adapters/Inbound/Products/Maxillofacial/HandleDeleteMaxillofacialProductAdapter');

// * File Upload Middleware

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/productimages/maxillofacial');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const FileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true); // ? receive the file
  } else {
    cb(null, false);
    // cb(new Error(`The file format should be only "jpeg" or "jpg" or "png"`), false);
  }
};

const upload = multer(
  {
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5 // ? Accepting files only up to 5MB
    },
    fileFilter: FileFilter
  }
);

// * -------------------------------------------

router.get('/en-us/cranio-maxillofacial', async (req, res) => {
  try {

    const Products = await HandleGetAllProductsAdapter();
    if (Products.code > 300) {
      throw Products;
    }
    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: Products
    });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.get('/en-us/cranio-maxillofacial/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const Product = await HandleGetProductAdapter(id);
    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: Product,
    });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.post('/en-us/cranio-maxillofacial', upload.array('maxillofacial', 10), async (req, res) => {
  try {

    let imageUrls = [];
    for (const image of req.files) {
      imageUrls.push(`http://${process.env.IMAGE_URI}/api/v1/${image.path}`);
    }

    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, plates, screws, screwdriver, price } = req.body;

    const validateBody = Joi.object().keys({
      productName: Joi.string(),
      productCategory: Joi.string(),
      productVariant: Joi.string(),
      productQuantity: Joi.number(),
      price: Joi.number(),
      productInfo: Joi.string(),
      productSystem: Joi.array(),
      productAdvantages: Joi.array(),
      plates: Joi.array(),
      screws: Joi.array(),
      screwdriver: Joi.array(),
    });

    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      res.status(406).send({
        code: 406,
        type: INVALID_REQUEST,
        message: `body can't be empty`
      });
    } else if (validateBody.validate(req.body).error !== undefined || null) {
      res.status(406).json({
        code: 406,
        type: INVALID_REQUEST,
        message: validateBody.validate(req.body).error.message
      });
    } else {
      const NewProduct = await HandleCreateNewProductAdapter({
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
        maxillofacialImages: imageUrls,
      });

      res.status(201).send({
        code: 201,
        type: ENTITY_CREATED,
        message: NewProduct,
      });
    }

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.put('/en-us/cranio-maxillofacial/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const { productName, productCategory, productVariant, productQuantity, productInfo, productSystem, productAdvantages, plates, screws, screwdriver, price } = req.body;

    const validateBody = Joi.object().keys({
      productName: Joi.string(),
      productCategory: Joi.string(),
      productVariant: Joi.string(),
      productQuantity: Joi.number(),
      price: Joi.number(),
      productInfo: Joi.string(),
      productSystem: Joi.array(),
      productAdvantages: Joi.array(),
      plates: Joi.array(),
      screws: Joi.array(),
      screwdriver: Joi.array(),
    });

    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      res.status(406).send({
        code: 406,
        type: INVALID_REQUEST,
        message: `body can't be empty`
      });
    } else if (validateBody.validate(req.body).error !== undefined || null) {
      res.status(406).json({
        code: 406,
        type: INVALID_REQUEST,
        message: validateBody.validate(req.body).error.message
      });
    } else {
      const UpdatedProduct = await HandleUpdateProductAdapter({
        id,
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
      });

      res.status(200).send({
        code: 200,
        type: ENTITY_UPDATED,
        message: UpdatedProduct,
      });
    }

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.delete('/en-us/cranio-maxillofacial/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const DeletedProduct = await HandleDeleteProductAdapter(id);
    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: DeletedProduct,
    });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

module.exports = router;