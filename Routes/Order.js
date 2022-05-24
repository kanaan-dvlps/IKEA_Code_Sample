const { SERVER_ERROR, REQUEST_SUCCESSFUL, INVALID_REQUEST } = require('../Helpers/Responses');
const router = require('express').Router();
const { HandleCreateOrderAdapter } = require('../Adapters/Inbound/Order/HandleCreateOrderAdapter');
const { HandleDeleteOrderAdapter } = require('../Adapters/Inbound/Order/HandleDeleteOrderAdapter');
const { HandleGetAllOrdersAdapter } = require('../Adapters/Inbound/Order/HandleGetAllOrdersAdapter');
const { HandleGetOrderAdapter } = require('../Adapters/Inbound/Order/HandleGetOrderAdapter');
const { HandleUpdateOrderAdapter } = require('../Adapters/Inbound/Order/HandleUpdateOrderAdapter');
const Joi = require('joi');
const EnsureAuthenticated = require('../Middleware/Verifier');

router.get('/en-us', EnsureAuthenticated, async (req, res) => {
  try {

    const result = await HandleGetAllOrdersAdapter();

    if (result.code > 300) {
      throw result;
    }

    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: result
    });

  } catch (error) {
    if (error.code === 500) {

      res.status(500).send({
        code: 500,
        type: SERVER_ERROR,
        message: error.message
      });

    } else {

      res.status(500).send({
        code: error.code,
        type: error.type,
        message: error.message
      });

    }
  }
});

router.get('/en-us/:id', EnsureAuthenticated, async (req, res) => {
  try {

    const { id } = req.params;
    const result = await HandleGetOrderAdapter(id);

    if (result.code > 300) {
      throw result;
    }

    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: result
    });

  } catch (error) {
    if (error.code === 500) {

      res.status(500).send({
        code: 500,
        type: SERVER_ERROR,
        message: error.message
      });

    } else {

      res.status(500).send({
        code: error.code,
        type: error.type,
        message: error.message
      });

    }
  }
});

router.post('/en-us', EnsureAuthenticated, async (req, res) => {
  try {

    // * Get username from token payload
    const { payload } = req.user;

    const { orderDetail } = req.body;

    const validateBody = Joi.object().keys({
      orderDetail: Joi.array(),
    })

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
      const result = await HandleCreateOrderAdapter({
        orderDetail,
        payload,
      });

      res.status(200).send({
        code: 200,
        type: REQUEST_SUCCESSFUL,
        message: result
      });

    }

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    });
  }
});


router.put('/en-us/:id', EnsureAuthenticated, async (req, res) => {
  try {

    const { id } = req.params

    const { companyName, companyPhone, companyPostalCode, companyStreetNumber, deliveryCompanyName, deliveryCompanyPhone, deliveryPostalCode, deliveryStreetNumber, desiredDeliveryDate, invoiceAddress, orderDate, orderDetail, purchaserEmail, purchaserName } = req.body;

    const validateBody = Joi.object().keys({
      companyName: Joi.string(),
      companyPhone: Joi.string(),
      companyPostalCode: Joi.string(),
      companyStreetNumber: Joi.number(),
      deliveryCompanyName: Joi.string(),
      deliveryCompanyPhone: Joi.string(),
      deliveryPostalCode: Joi.string(),
      deliveryStreetNumber: Joi.number(),
      desiredDeliveryDate: Joi.date(),
      invoiceAddress: Joi.boolean(),
      orderDate: Joi.date(),
      orderDetail: Joi.array(),
      purchaserEmail: Joi.string(),
      purchaserName: Joi.string(),
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
      const result = await HandleUpdateOrderAdapter({
        id,
        companyName,
        companyPhone,
        companyPostalCode,
        companyStreetNumber,
        deliveryCompanyName,
        deliveryCompanyPhone,
        deliveryPostalCode,
        deliveryStreetNumber,
        desiredDeliveryDate,
        invoiceAddress,
        orderDate,
        orderDetail,
        purchaserEmail,
        purchaserName,
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
    if (error.code === 500) {

      res.status(500).send({
        code: 500,
        type: SERVER_ERROR,
        message: error.message
      });

    } else {

      res.status(500).send({
        code: error.code,
        type: error.type,
        message: error.message
      });

    }
  }
});

router.delete('/en-us/:id', EnsureAuthenticated, async (req, res) => {
  try {

    const { id } = req.params;

    const result = await HandleDeleteOrderAdapter(id);

    if (result.code > 300) {
      throw result;
    }

    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: result
    });

  } catch (error) {
    if (error.code === 500) {

      res.status(500).send({
        code: 500,
        type: SERVER_ERROR,
        message: error.message
      });

    } else {

      res.status(500).send({
        code: error.code,
        type: error.type,
        message: error.message
      });

    }
  }
})

module.exports = router;