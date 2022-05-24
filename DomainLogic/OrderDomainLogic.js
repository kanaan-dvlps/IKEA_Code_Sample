const { SERVER_ERROR } = require('../Helpers/Responses');
const { HandleCreateOrderOutboundPort } = require('../Ports/Outbound/Order/HandleCreateOrderOutboundPort');
const { HandleDeleteOrderOutboundPort } = require('../Ports/Outbound/Order/HandleDeleteOrderOutboundPort');
const { HandleGetAllOrdersOutboundPort } = require('../Ports/Outbound/Order/HandleGetAllOrdersOutboundPort');
const { HandleGetOrderOutboundPort } = require('../Ports/Outbound/Order/HandleGetOrderOutboundPort');
const { HandleUpdateOrderOutboundPort } = require('../Ports/Outbound/Order/HandleUpdateOrderOutboundPort');
const { HandleGetVendorByUsernameOutboundPort } = require('../Ports/Outbound/Vendor/HandleGetVendorByUsernameOutboundPort');


const CreateOrder = async (data) => {
  try {

    const { orderDetail, payload } = data;

    const VendorInfo = await HandleGetVendorByUsernameOutboundPort(payload);
    const NewOrder = await HandleCreateOrderOutboundPort({
      companyId: VendorInfo._id,
      companyName: VendorInfo.companyName,
      companyPhone: VendorInfo.companyPhone,
      companyPostalCode: VendorInfo.companyPostalCode,
      companyEmail: VendorInfo.companyEmail,
      invoiceAddress: VendorInfo.invoiceAddress,
      orderDate: Date.now(),
      orderDetail,
    });

    return NewOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const GetOrder = async (id) => {
  try {

    const Order = await HandleGetOrderOutboundPort(id);
    return Order;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const GetAllOrders = async () => {
  try {

    const Orders = await HandleGetAllOrdersOutboundPort();
    return Orders;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const UpdateOrder = async (data) => {
  try {

    const { id, orderDetail, payload } = data;
    
    const VendorInfo = await HandleGetVendorByUsernameOutboundPort(payload);
    
    const UpdatedOrder = await HandleUpdateOrderOutboundPort({
      id,
      companyId: VendorInfo._id,
      companyName: VendorInfo.companyName,
      companyPhone: VendorInfo.companyPhone,
      companyPostalCode: VendorInfo.companyPostalCode,
      companyEmail: VendorInfo.companyEmail,
      invoiceAddress: VendorInfo.invoiceAddress,
      orderDate: Date.now(),
      orderDetail,
    });

    return UpdatedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const DeleteOrder = async (id) => {
  try {

    const DeletedOrder = await HandleDeleteOrderOutboundPort(id);
    return DeletedOrder;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = {
  CreateOrder,
  GetOrder,
  GetAllOrders,
  UpdateOrder,
  DeleteOrder,
};