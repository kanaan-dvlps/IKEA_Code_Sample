const { SERVER_ERROR } = require('../Helpers/Responses');
const OrderModel = require('../Models/Orders.Schema');

const GetOrder = async (id) => {
  try {

    const Order = await OrderModel.findOne({ _id: id });
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

    const Orders = await OrderModel.find();
    return Orders;


  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const CreateOrder = async (data) => {
  try {

    const { companyId, companyName, companyPhone, companyPostalCode, companyEmail, invoiceAddress, orderDate, orderDetail } = data;

    const NewOrder = await new OrderModel({
      companyId,
      companyName,
      companyPhone,
      companyPostalCode,
      companyEmail,
      invoiceAddress,
      orderDate,
      orderDetail,
    });

    const SavedOrder = await NewOrder.save();
    return SavedOrder;

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

    const { id, companyName, companyPhone, companyPostalCode, companyEmail, invoiceAddress, orderDate, orderDetail } = data;

    const UpdatedOrder = await OrderModel.findOneAndUpdate({ _id: id }, {
      $set: {
        companyName,
        companyPhone,
        companyPostalCode,
        companyEmail,
        invoiceAddress,
        orderDate,
        orderDetail,
      }
    }, {
      new: true,
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

    const DeletedOrder = await OrderModel.findOneAndDelete({ _id: id });
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
  GetOrder,
  GetAllOrders,
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
};