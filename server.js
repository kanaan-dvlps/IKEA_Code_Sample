const express = require('express');
const bodyParser = require('body-parser');
const ODM = require('mongoose');
const app = express();
const process = require('process');
const os = require('os');
const cors = require('cors');

// ! ##### Constants #####
// ? -----------------------
app.use('/api/v1/uploads', express.static('uploads'));

// ! ##### Middlewares #####
// ? -----------------------
// * cors middleware
app.use(cors());

// ? -----------------------
// * dotenv middleware
require('dotenv').config();

// * BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ? -----------------------
// * file upload middleware

// ? Routes files
// * Products
const RodScrewSystemProductRoute = require('./Routes/RodScrewSystemProduct');
const CageSystmeRoute = require('./Routes/CageSystem');
const BoneSubstituteAndBoneCementProductRoute = require('./Routes/BoneSubstitute&BoneCementProduct');
const CranioMaxillofacialProduct = require('./Routes/MaxillofacialProduct');

// * Categories
const RodScrewSystemProductCategoryRoute = require('./Routes/RodScrewSystemCategory');
const CageSystemProductCategoryRoute = require('./Routes/CageSystemProductCategory');
const BoneSubstituteAndBoneCementProductCategoryRoute = require('./Routes/BoneSubstitute&BoneCementProductCategory');
const CranioMaxillofacialProductCategory = require('./Routes/MaxillofacialProductCategory');

// * Vendor
const VendorsRoute = require('./Routes/Vendors');

// * Events
const EventRoute = require('./Routes/Events');

// * News
const NewsRoute = require('./Routes/News');

// * Login
const LoginRoute = require('./Routes/Login');
const UsernameRoute = require('./Routes/User');

// * Tickets
const TicketsRoute = require('./Routes/Ticket');
const ContactUsTickets = require('./Routes/ContactUs');

// * Orders
const OrdersRoute = require('./Routes/Order');

// * Minio
const MinioRoute = require('./Routes/Minio');

// ? Router middleware
// * Products
app.use('/api/v1/products', RodScrewSystemProductRoute);
app.use('/api/v1/products', CageSystmeRoute);
app.use('/api/v1/products', BoneSubstituteAndBoneCementProductRoute);
app.use('/api/v1/products', CranioMaxillofacialProduct);

// * Categories
app.use('/api/v1/category', RodScrewSystemProductCategoryRoute);
app.use('/api/v1/category', CageSystemProductCategoryRoute);
app.use('/api/v1/category', BoneSubstituteAndBoneCementProductCategoryRoute);
app.use('/api/v1/category', CranioMaxillofacialProductCategory);

// * Vendor
app.use('/api/v1/vendors', VendorsRoute);

// * Events
app.use('/api/v1/events', EventRoute);

// * News
app.use('/api/v1/news', NewsRoute);

// * Login
app.use('/api/v1', LoginRoute);
app.use('/api/v1/vendorInfo', UsernameRoute);

// * Tickets
app.use('/api/v1/ticket', TicketsRoute);
app.use('/api/v1/contactus-ticket', ContactUsTickets);

// * Orders
app.use('/api/v1/order', OrdersRoute);

// * Minio
app.use('/api/v1/files', MinioRoute);



// ! ##### Server #####
// ? -----------------------

const SERVER = app.listen(process.env.PORT, () => {
  ODM.connect(process.env.MONGODB_URI);

  // ? Colorized terminal message
  console.log(`-----------------------------------`);
  console.log(`\n\x1b[1m\x1b[33m PORT:\x1b[0m\x1b[1m \x1b[32m${process.env.PORT} \x1b[0m`);

  console.log(`\x1b[1m\x1b[33m ADDRESS:\x1b[0m\x1b[1m \x1b[32m${process.env.BASE_URL} \x1b[0m`);
  console.log(`\x1b[1m\x1b[33m IP:\x1b[0m\x1b[1m \x1b[32m${ os.networkInterfaces().eth0[0].address } \x1b[0m`);
  console.log(`\x1b[1m\x1b[33m HOSTNAME:\x1b[0m\x1b[1m \x1b[32m${ os.hostname() } \x1b[0m \n`);
  // console.log(`\x1b[1m\x1b[33m## ENVIRONMENT:\x1b[0m\x1b[1m \x1b[32m${process.env.ENVIRONMENT} ## \x1b[0m \n`);
  ODM.connection.on('error', error => {
    console.log(`\x1b[41m\x1b[1mODM error\x1b[0m`, error);
  });

  console.log(`\x1b[34m\x1b[1mconnection to ODM...\x1b[0m`);
  ODM.connection.on('connected', () => {
    console.log(`\x1b[34m\x1b[1msuccessfully connected to ODM!\x1b[0m`);
  });
  console.log(`\x1b[34m\x1b[1mprocess PID ${process.pid} started\x1b[0m`);
});

function signalHandler(signal) {
  if (signal) {
    console.log(`received signal: ${signal}`);
    console.log(`closing HTTP server`);
    SERVER.close(() => {
      console.log(`HTTP server closed gracefully`);
      ODM.connection.close(false, () => {
        console.log(`Database connection closed gracefully`);
        console.log(`process PID ${process.pid} stopped`);
        process.exit(0);
      });
    });
  }
};

process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);
