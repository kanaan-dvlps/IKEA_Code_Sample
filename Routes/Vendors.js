const { SERVER_ERROR, REQUEST_SUCCESSFUL, ENTITY_CREATED, INVALID_REQUEST, ENTITY_UPDATED, ENTITY_ALREADY_EXISTS } = require('../Helpers/Responses');
const router = require('express').Router();
const Joi = require('joi');
const { HandleAddVendorAdapter } = require('../Adapters/Inbound/Vendor/HandleAddVendorAdapter');
const { HandleDeleteVendorAdapter } = require('../Adapters/Inbound/Vendor/HandleDeleteVendorAdapter');
const { HandleGetAllVendorsAdapter } = require('../Adapters/Inbound/Vendor/HandleGetAllVendorsAdapter');
const { HandleGetVendorAdapter } = require('../Adapters/Inbound/Vendor/HandleGetVendorAdapter');
const { HandleUpdateVendorAdapter } = require('../Adapters/Inbound/Vendor/HandleUpdateVendorAdapter');

// * File Upload Middleware

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/vendoravatar');
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

router.post('/en-us', upload.single('vendor'), async (req, res) => {
  try {

    const avatar = `http://localhost:3030/api/v1/${req.file.path}`;

    const { username, companyName, companyPhone, companyPostalCode, invoiceAddress, owner, partnershipType, address, phone, fax, email, websiteURL, fieldOfProfession, vendorType, baned, password } = req.body;

    const validateBody = Joi.object().keys({
      username: Joi.string().required(),
      companyName: Joi.string(),
      companyPhone: Joi.string(),
      companyPostalCode: Joi.string(),
      invoiceAddress: Joi.string(),
      owner: Joi.string(),
      partnershipType: Joi.string(),
      address: Joi.string(),
      phone: Joi.string(),
      fax: Joi.string(),
      email: Joi.string(),
      websiteURL: Joi.string(),
      fieldOfProfession: Joi.string(),
      vendorType: Joi.string(),
      baned: Joi.boolean(),
      password: Joi.string().required(),
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
      const NewVendor = await HandleAddVendorAdapter({
        username,
        companyName,
        companyPhone,
        companyPostalCode,
        invoiceAddress,
        owner,
        partnershipType,
        address,
        phone,
        fax,
        email,
        websiteURL,
        fieldOfProfession,
        vendorType,
        baned,
        password,
        avatar: avatar
      });

      if (NewVendor.code === 406) {
        throw NewVendor;
      } else {
        res.status(201).send({
          code: 201,
          type: ENTITY_CREATED,
          message: NewVendor,
        });
      }

    }
  } catch (error) {
    res.status(error.code || 500).send({
      code: error.code || 500,
      type: error.type || SERVER_ERROR,
      message: error.message,
    });
  }
});

router.delete('/en-us/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const DeletedVendor = await HandleDeleteVendorAdapter(id);

    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: DeletedVendor,
    });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    });
  }
});

router.get('/en-us', async (req, res) => {
  try {

    const Vendors = await HandleGetAllVendorsAdapter();
    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: Vendors,
    });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    });
  }
});

router.get('/en-us/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const Vendor = await HandleGetVendorAdapter(id);
    res.status(200).send({
      code: 200,
      type: REQUEST_SUCCESSFUL,
      message: Vendor,
    });

  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    });
  }
});

router.put('/en-us/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const { username, companyName, companyPhone, companyPostalCode, invoiceAddress, owner, partnershipType, address, phone, fax, email, websiteURL, fieldOfProfession, vendorType, baned } = req.body;

    const validateBody = Joi.object().keys({
      username: Joi.string().required(),
      companyName: Joi.string(),
      companyPhone: Joi.string(),
      companyPostalCode: Joi.string(),
      invoiceAddress: Joi.string(),
      owner: Joi.string(),
      partnershipType: Joi.string(),
      address: Joi.string(),
      phone: Joi.string(),
      fax: Joi.string(),
      email: Joi.string(),
      websiteURL: Joi.string(),
      fieldOfProfession: Joi.string(),
      vendorType: Joi.string(),
      baned: Joi.boolean(),
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
      const UpdatedVendor = await HandleUpdateVendorAdapter({
        id,
        username,
        companyName,
        companyPhone,
        companyPostalCode,
        invoiceAddress,
        owner,
        partnershipType,
        address,
        phone,
        fax,
        email,
        websiteURL,
        fieldOfProfession,
        vendorType,
        baned,
      });

      res.status(201).send({
        code: 201,
        type: ENTITY_CREATED,
        message: UpdatedVendor,
      });
    }
  } catch (error) {
    res.status(500).send({
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    });
  }
});

module.exports = router;