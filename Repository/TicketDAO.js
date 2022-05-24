const { SERVER_ERROR } = require('../Helpers/Responses');
const TicketModel = require('../Models/Tickets.Schema');

const GetAllTickets = async () => {
  try {

    const Tickets = await TicketModel.find().lean();
    return Tickets;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const GetTicket = async (id) => {
  try {

    const Ticket = await TicketModel.findOne({ _id: id }).lean();
    return Ticket;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const CreateTicket = async (data) => {
  try {

    const { ticketType, productCategory, ticketDescription } = data;
    const NewTicket = await new TicketModel({
      ticketType,
      productCategory,
      ticketDescription,
    });

    const SavedTicket = await NewTicket.save();

    return SavedTicket;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const UpdateTicket = async (data) => {
  try {

    const { id, ticketType, productCategory, ticketDescription } = data;
    const UpdatedTicket = await TicketModel.findOneAndUpdate({ _id: id }, {
      $set: {
        ticketType,
        productCategory,
        ticketDescription
      }
    }, {
      new: true,
    });

    return UpdatedTicket;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const DeleteTicket = async (id) => {
  try {

    const DeletedTicket = await TicketModel.findOneAndDelete({ _id: id });
    return DeletedTicket;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = {
  GetAllTickets,
  GetTicket,
  CreateTicket,
  UpdateTicket,
  DeleteTicket,
};