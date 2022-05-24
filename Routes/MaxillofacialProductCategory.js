const { SERVER_ERROR, REQUEST_SUCCESSFUL, ENTITY_CREATED, INVALID_REQUEST, ENTITY_UPDATED } = require('../Helpers/Responses');
const router = require('express').Router();
const Joi = require('joi');
const { HandleCreateCategoryAdapter } = require('../Adapters/Inbound/Category/Maxillofacial/HandleCreateMaxillofacialProductCategoryAdapter');
const { HandleGetAllCategoriesAdapter } = require('../Adapters/Inbound/Category/Maxillofacial/HandleGetAllMaxillofacialProductsCategoriesAdapter');
const { HandleGetCategoryAdapter } = require('../Adapters/Inbound/Category/Maxillofacial/HandleGetMaxillofacialProductCategoryAdapter');
const { HandleUpdateCategoryAdapter } = require('../Adapters/Inbound/Category/Maxillofacial/HandleUpdateMaxillofacialProductCategoryAdapter');

router.get('/en-us/cranio-maxillofacial-category', async (req, res) => {
  try {

    const result = await HandleGetAllCategoriesAdapter();

    if (result.code > 300) {
      throw result;
    }

    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: result
    });

  } catch (error) {
    res.status(error.code).send({
      code: error.code,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.get('/en-us/cranio-maxillofacial-category/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await HandleGetCategoryAdapter(id);

    if (result.code > 300) {
      throw result;
    }

    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: result
    });

  } catch (error) {
    res.status(error.code).send({
      code: error.code,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.post('/en-us/cranio-maxillofacial-category', async (req, res) => {
  try {

    const { mainCategory, variant, productCategory } = req.body;
    const validateBody = Joi.object().keys({
      mainCategory: Joi.string(),
      variant: Joi.string(),
      productCategory: Joi.string(),
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

      const result = await HandleCreateCategoryAdapter({
        mainCategory,
        variant,
        productCategory
      });

      if (result.code > 300) {
        throw result;
      }

      res.status(200).send({
        code: 200,
        type: REQUEST_SUCCESSFUL,
        message: result
      });

    }


  } catch (error) {
    res.status(error.code).send({
      code: error.code,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

router.put('/en-us/cranio-maxillofacial-category/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const { mainCategory, variant, productCategory } = req.body;

    const validateBody = Joi.object().keys({
      mainCategory: Joi.string(),
      variant: Joi.string(),
      productCategory: Joi.string(),
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

      const result = await HandleUpdateCategoryAdapter({
        id,
        mainCategory,
        variant,
        productCategory
      });

      if (result.code > 300) {
        throw result;
      }

      res.status(200).send({
        code: 200,
        type: REQUEST_SUCCESSFUL,
        message: result
      });

    }

  } catch (error) {
    res.status(error.code).send({
      code: error.code,
      type: SERVER_ERROR,
      message: error.message,
    })
  }
});

module.exports = router;