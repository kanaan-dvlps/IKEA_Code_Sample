const { SERVER_ERROR } = require('../Helpers/Responses');
const ContactUsModel = require('../Models/ContactUs.Schema');

const GetAllContactUs = async () => {
  try {

    const Contacts = await ContactUsModel.find().lean();
    return Contacts;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const GetContactUs = async (id) => {
  try {

    const Contact = await ContactUsModel.findOne({ _id: id }).lean();
    return Contact;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const CreateNewContactUs = async (data) => {
  try {

    const { fullname, email, description } = data;
    
    const NewContact = await new ContactUsModel({
      fullname,
      email,
      description,
    });

    const SavedContact = await NewContact.save();
    return SavedContact;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const UpdateContactUs = async (data) => {
  try {

    const { id, fullname, email, description } = data;
    const UpdatedContact = await ContactUsModel.findOneAndUpdate({ _id: id }, {
      fullname,
      email,
      description
    },
      {
        new: true,
      });

    return UpdatedContact;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

const DeleteContactUs = async (id) => {
  try {

    const DeletedContact = await ContactUsModel.findByIdAndDelete({ _id: id });
    return DeletedContact;

  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message
    }
  }
};

module.exports = {
  GetAllContactUs,
  GetContactUs,
  CreateNewContactUs,
  UpdateContactUs,
  DeleteContactUs,
}