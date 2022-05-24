const { SERVER_ERROR } = require('../../../../Helpers/Responses');
const { HandleDeleteEventInboundPort } = require('../../../../Ports/Inbound/ContactUs/HandleDeleteContactUsTicketInboundPort');

const HandleDeleteCopntactAdapter = async (id) => {
  try {
    
    const DeletedContact = await HandleDeleteEventInboundPort(id);
    return DeletedContact;
    
  } catch (error) {
    return {
      code: 500,
      type: SERVER_ERROR,
      message: error.message,
    }
  }
};

module.exports = { HandleDeleteCopntactAdapter };