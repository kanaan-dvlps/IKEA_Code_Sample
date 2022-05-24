const EventModel = require('../Models/Events.Schema');
const { SERVER_ERROR } = require('../Helpers/Responses');

const GetAllEvents = async () => {
  try {

    const Events = await EventModel.find();
    return Events;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetEvent = async (id) => {
  try {

    const Event = await EventModel.findOne({ _id: id });
    return Event;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetEventByDate = async (DATE) => {
  try {

    const Event = await EventModel.findOne({ eventDate: DATE });
    return Event;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const GetEventByOwner = async (owner) => {
  try {

    const Event = await EventModel.findOne({ eventOwner: owner });
    return Event;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const CreateEvent = async (DATA) => {
  try {

    const { eventName, eventPlace, eventDate, eventHolder, eventOwner, eventDescription, eventsImages } = DATA;

    const NewEvent = await new EventModel({
      eventName,
      eventPlace,
      eventDate,
      eventHolder,
      eventOwner,
      eventDescription,
      eventsImages,
    });

    const SavedEvent = await NewEvent.save();
    return SavedEvent;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const UpdateEvent = async (DATA) => {
  try {

    const { id, eventName, eventPlace, eventDate, eventHolder, eventOwner, eventDescription, } = DATA;

    const UpdatedEvent = await EventModel.findOneAndUpdate({ _id: id }, {
      $set: {
        eventName,
        eventPlace,
        eventDate,
        eventHolder,
        eventOwner,
        eventDescription,
      }
    }, {
      new: true,
    });
    return UpdatedEvent;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

const DeleteEvent = async (id) => {
  try {

    const DeletedEvent = await EventModel.findOneAndDelete({ _id: id });
    return DeletedEvent;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = {
  GetAllEvents,
  GetEvent,
  GetEventByDate,
  GetEventByOwner,
  CreateEvent,
  UpdateEvent,
  DeleteEvent,
};